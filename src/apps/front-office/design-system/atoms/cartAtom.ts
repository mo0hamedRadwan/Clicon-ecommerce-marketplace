/* eslint-disable unused-imports/no-unused-vars */
import { atom } from "@mongez/react-atom";
import {
  addToCart,
  getCartItems,
  removeFromCart,
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
          const items: CartItem[] = response.data.cart.items;
          const product = items.find(item => item.product.id === productId);

          cartAtom.merge({
            cart: {
              ...cartAtom.get("cart"),
              items,
              totals: {
                ...cartAtom.get("cart").totals,
                subtotal: !product
                  ? cartAtom.get("cart").totals.subtotal
                  : cartAtom.get("cart").totals.subtotal + product.salePrice,
              },
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
          cartAtom.merge({
            cart: {
              ...cartAtom.get("cart"),
              items: cartAtom
                .get("cart")
                .items.filter(item => item.id !== itemId),
              totals: {
                ...cartAtom.get("cart").totals,
                subtotal:
                  cartAtom.get("cart").totals.subtotal -
                  existsItem.product.salePrice,
              },
            },
            totalProducts: cartAtom.get("totalProducts") - 1,
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
  },
});
