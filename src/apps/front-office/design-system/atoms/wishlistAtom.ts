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
  error: string;
};

type wishlistActionsType = {
  loadWishlistItems: () => void;
  getWishlist(): wishlistDataType;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (product: Product) => void;
  toggleWishlistProduct: (product: Product) => void;
};

export const wishlistAtom = atom<wishlistDataType, wishlistActionsType>({
  key: "wishlist",
  default: {
    wishlist: {
      products: [],
    },
    totalProducts: 0,
    loading: false,
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
          });
        })
        .catch(error => {
          console.error("Error adding to wishlist:", error);
          wishlistAtom.merge({
            error: "Failed to add to wishlist",
          });
        });
    },
    removeFromWishlist: (product: Product) => {
      removeFromWishlist(product.id)
        .then(response => {
          const products = wishlistAtom
            .get("wishlist")
            .products.filter(product => product.id != product.id);
          console.log(response.data);
          wishlistAtom.merge({
            wishlist: {
              products,
            },
            totalProducts: products.length,
          });
        })
        .catch(error => {
          console.error("Error adding to wishlist:", error);
          wishlistAtom.merge({
            error: "Failed to add to wishlist",
          });
        });
    },
    toggleWishlistProduct: (product: Product) => {
      const productExists = wishlistAtom
        .get("wishlist")
        .products.find(p => p.id === product.id);

      if (productExists) {
        wishlistAtom.removeFromWishlist(product);
      } else {
        wishlistAtom.addToWishlist(product);
      }
    },
  },
});
