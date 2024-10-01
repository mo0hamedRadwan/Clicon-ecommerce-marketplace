import { atom } from "@mongez/react-atom";
import {
  addToWishlist,
  getWishlistItems,
  removeFromWishlist,
} from "apps/front-office/catalog/services/catalog-service";
import { Product, Wishlist } from "../types";

type wishlistDataType = {
  wishlist: Wishlist;
  totalProducts: number;
  loading: boolean;
  loadingItem: boolean;
  error: string;
};

type wishlistActionsType = {
  loadWishlistItems: () => void;
  getWishlist(): wishlistDataType;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
};

export const wishlistAtom = atom<wishlistDataType, wishlistActionsType>({
  key: "wishlist",
  default: {
    wishlist: {
      products: [],
    },
    totalProducts: 0,
    loading: false,
    loadingItem: false,
    error: "",
  },
  actions: {
    loadWishlistItems: () => {
      wishlistAtom.change("loading", true);
      getWishlistItems()
        .then(response => {
          const products: Product[] = response.data.products || [];

          wishlistAtom.merge({
            wishlist: {
              products,
            },
            totalProducts: products.length,
            loading: false,
          });
        })
        .catch(error => {
          console.error("Error fetching wishlist items:", error);
          wishlistAtom.merge({
            loading: false,
            error: "Failed to load wishlist items",
          });
        });
    },
    addToWishlist: (product: Product) => {
      wishlistAtom.change("loadingItem", true);

      addToWishlist(product.id)
        .then(response => {
          console.log("wishlist add to wishlist successfully");
          const products: Product[] = wishlistAtom.get("wishlist").products;
          console.log(response.data);
          wishlistAtom.merge({
            wishlist: {
              products: [...products, product],
            },
            totalProducts: products.length + 1,
            loadingItem: false,
          });
        })
        .catch(error => {
          console.error("Error adding to wishlist:", error);
          wishlistAtom.merge({
            loadingItem: false,
            error: "Failed to add to wishlist",
          });
        });
    },
    removeFromWishlist: (productId: string) => {
      wishlistAtom.change("loadingItem", true);

      removeFromWishlist(productId)
        .then(response => {
          const products = wishlistAtom
            .get("wishlist")
            .products.filter(product => product.id != productId);
          console.log(response.data);
          wishlistAtom.merge({
            wishlist: {
              products,
            },
            totalProducts: products.length,
            loadingItem: false,
          });
        })
        .catch(error => {
          console.error("Error adding to wishlist:", error);
          wishlistAtom.merge({
            loadingItem: false,
            error: "Failed to add to wishlist",
          });
        });
    },
    toggleWishlistProduct: (product: Product) => {
      console.log("toggle product", product);
    },
  },
});
