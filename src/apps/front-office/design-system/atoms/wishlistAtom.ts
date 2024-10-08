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
  addToWishlist: (
    setLoading: (value: boolean) => void,
    product: Product,
  ) => void;
  removeFromWishlist: (
    setLoading: (value: boolean) => void,
    product: Product,
  ) => void;
  productExistsInWishlist(product: Product): boolean;
  toggleWishlistProduct: (
    setLoading: (value: boolean) => void,
    product: Product,
  ) => void;
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
          console.log(response.data);
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
    addToWishlist: (setLoading: (value: boolean) => void, product: Product) => {
      setLoading(true);
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
          setLoading(false);
        })
        .catch(error => {
          console.error("Error adding to wishlist:", error);
          wishlistAtom.merge({
            error: "Failed to add to wishlist",
          });
          setLoading(false);
        });
    },
    removeFromWishlist: (
      setLoading: (value: boolean) => void,
      product: Product,
    ) => {
      setLoading(true);
      removeFromWishlist(product.id)
        .then(response => {
          const products = wishlistAtom
            .get("wishlist")
            .products.filter(p => p.id !== product.id);
          console.log(response.data);
          wishlistAtom.merge({
            wishlist: {
              products,
            },
            totalProducts: products.length,
          });
          setLoading(false);
        })
        .catch(error => {
          console.error("Error removing from wishlist:", error);
          wishlistAtom.merge({
            error: "Failed to remove from wishlist",
          });
          setLoading(false);
        });
    },
    productExistsInWishlist(product: Product): boolean {
      const productExists = wishlistAtom
        .get("wishlist")
        .products.find(p => p.id === product.id);
      return !!productExists;
    },
    toggleWishlistProduct: (
      setLoading: (value: boolean) => void,
      product: Product,
    ) => {
      if (wishlistAtom.productExistsInWishlist(product)) {
        wishlistAtom.removeFromWishlist(setLoading, product);
      } else {
        wishlistAtom.addToWishlist(setLoading, product);
      }
    },
  },
});
