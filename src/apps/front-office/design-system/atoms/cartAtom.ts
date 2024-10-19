import { atom } from "@mongez/react-atom";
import {
  addToCart,
  getCartItems,
  removeFromCart,
  setShippingAddressByCity,
  updateCartItem,
} from "apps/front-office/catalog/services/catalog-service";
import { Cart, CartItem } from "../types";

type CartDataType = {
  cart: Cart;
  totalProducts: number;
  loading: boolean;
  error: string;
};

type CartActionsType = {
  loadCartItems: () => void;
  addToCart: (
    setLoading: (value: boolean) => void,
    productId: string,
    quantity?: number,
  ) => void;
  removeFromCart: (
    setLoading: (value: boolean) => void,
    itemId: string,
  ) => void;
  updateQuantityItem: (
    setLoading: (value: boolean) => void,
    item: CartItem,
    quantity: number,
  ) => void;

  changeShippingAddressCity: (city: string) => void;
  setCart: (cart: CartItem[]) => void;
};

export const cartAtom = atom<CartDataType, CartActionsType>({
  key: "cart",
  default: {
    cart: {
      items: [],
      totals: {
        subtotal: 0,
        discount: 0,
        shippingFees: 0,
        tax: 0,
        coupon: 0,
        price: 0,
      },
    },
    totalProducts: 0,
    loading: false,
    error: "",
  },
  actions: {
    loadCartItems: () => {
      cartAtom.change("loading", true);
      getCartItems()
        .then(response => {
          const items: CartItem[] = response.data.cart.items || [];
          const totals = response.data.cart.totals;

          console.log(response.data);
          cartAtom.merge({
            cart: {
              items,
              totals,
            },
            totalProducts: items.reduce(
              (total, item) => item.quantity + total,
              0,
            ),
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
    addToCart: (
      setLoading: (value: boolean) => void,
      productId: string,
      quantity: number = 1,
    ) => {
      setLoading(true);
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
          const cart: CartItem[] = response.data.cart;

          cartAtom.merge({
            cart: {
              ...cartAtom.get("cart"),
              ...cart,
            },
            totalProducts: cartAtom.get("totalProducts") + quantity,
          });
          setLoading(false);
        })
        .catch(error => {
          console.error("Error adding to cart:", error);
          cartAtom.merge({
            error: "Failed to add to cart",
          });
          setLoading(false);
        });
    },
    removeFromCart: (setLoading: (value: boolean) => void, itemId: string) => {
      const items = cartAtom.get("cart").items;
      const existsItem = items.find(item => item.id === itemId);

      if (!existsItem) {
        return;
      }

      removeFromCart(existsItem.id)
        .then(response => {
          console.log(response.data);
          const cart = response.data.cart;
          cartAtom.merge({
            cart: {
              ...cartAtom.get("cart"),
              ...cart,
            },
            totalProducts: cartAtom.get("totalProducts") - existsItem.quantity,
          });
          setLoading(false);
        })
        .catch(error => {
          console.error("Error removing from cart:", error);
          cartAtom.merge({
            error: "Failed to removing from cart",
          });
          setLoading(false);
        });
    },
    updateQuantityItem: (
      setLoading: (value: boolean) => void,
      item: CartItem,
      quantity: number,
    ) => {
      setLoading(true);
      updateCartItem(item.id, {
        quantity,
      })
        .then(response => {
          const cart = response.data.cart;
          cartAtom.merge({
            cart: {
              ...cartAtom.get("cart"),
              ...cart,
            },
            totalProducts:
              cartAtom.get("totalProducts") + (quantity - item.quantity),
          });
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
        });
    },
    changeShippingAddressCity: (city: string) => {
      cartAtom.change("loading", true);
      setShippingAddressByCity(city)
        .then(response => {
          console.log(response.data);
          const cart = response.data.cart;
          cartAtom.merge({
            cart,
            loading: false,
          });
        })
        .catch(error => {
          console.error("Error changing shipping address:", error);
          cartAtom.merge({
            error: "Failed to change shipping address",
          });
          cartAtom.change("loading", false);
        });
    },
    setCart: (cart: CartItem[]) => {
      cartAtom.change("cart", cart);
    },
  },
});
