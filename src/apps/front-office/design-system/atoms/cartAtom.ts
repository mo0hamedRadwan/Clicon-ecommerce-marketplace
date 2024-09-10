import { atom } from "@mongez/react-atom";
import {
  addToCart,
  getCartItems,
  removeFromCart,
} from "apps/front-office/home/services/home-service";
import { Cart, CartItem } from "../types";

type CartDataType = {
  cart: Cart;
  loading: boolean;
  loadingItem: boolean;
  error: string;
};

type CartActionsType = {
  loadCartItems: () => void;
  getTotalPrice(): number;
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
};

export const cartAtom = atom<CartDataType, CartActionsType>({
  key: "cart",
  default: {
    cart: {
      items: [],
      subtotal: 0,
      discount: 0,
      shippingFees: 0,
    },
    loading: false,
    loadingItem: false,
    error: "",
  },
  actions: {
    loadCartItems: () => {
      cartAtom.change("loading", true);
      getCartItems()
        .then(response => {
          const items: CartItem[] = response.data.cart.items || [];
          const subtotal = response.data.cart.subtotal;
          const discount = response.data.cart.discount;
          const shippingFees = response.data.cart.shippingFees;

          console.log(response.data);
          cartAtom.merge({
            cart: {
              items,
              subtotal,
              discount,
              shippingFees,
            },
            loading: false,
          });
        })
        .catch(error => {
          console.error("Error fetching cart items:", error);
          cartAtom.merge({
            loading: false,
            error: "Failed to load cart items",
          });
        });
    },
    addToCart: (productId: string, quantity: number = 1) => {
      cartAtom.change("loadingItem", true);
      const items = cartAtom.get("cart").items;
      const existProduct = items.find(item => item.id === productId);
      const productQuantity = existProduct
        ? existProduct.quantity + quantity
        : quantity;

      addToCart({
        product: productId,
        quantity: productQuantity,
      })
        .then(response => {
          console.log("cart add to cart successfully");
          const items: CartItem[] = response.data.cart.items;
          const product = items.find(item => item.id === productId);
          cartAtom.merge({
            cart: {
              items,
              subtotal:
                cartAtom.get("cart").subtotal + product!.product.salePrice,
            },
            loadingItem: false,
          });
        })
        .catch(error => {
          console.error("Error adding to cart:", error);
          cartAtom.merge({
            loadingItem: false,
            error: "Failed to add to cart",
          });
        });
    },
    removeFromCart: (itemId: string) => {
      cartAtom.change("loadingItem", true);
      if (!cartAtom.get("cart").items.length) cartAtom.loadCartItems();
      const items = cartAtom.get("cart").items;
      const existsItem = items.find(item => item.id === itemId);

      if (!existsItem) {
        cartAtom.change("loadingItem", false);
        return;
      }

      removeFromCart(existsItem.id)
        .then(response => {
          const items = response.data.cart.items;
          console.log(response.data);
          cartAtom.merge({
            cart: {
              items,
              subtotal:
                cartAtom.get("cart").subtotal - existsItem.product.salePrice,
            },
            loadingItem: false,
          });
        })
        .catch(error => {
          console.error("Error adding to cart:", error);
          cartAtom.merge({
            loading: false,
            error: "Failed to add to cart",
          });
        });
    },
  },
});
