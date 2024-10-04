/* eslint-disable unused-imports/no-unused-vars */
import { atom } from "@mongez/react-atom";
import { getCartItems } from "apps/front-office/catalog/services/catalog-service";
import { Cart, CartItem } from "../types";

type CartDataType = {
  cart: Cart;
  totalProducts: number;
  loading: boolean;
  error: string;
};

type CartActionsType = {
  loadCartItems: () => void;
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
  },
});
