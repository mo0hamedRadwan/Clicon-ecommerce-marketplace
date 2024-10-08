import {
  addToWishlist,
  removeFromWishlist,
} from "apps/front-office/catalog/services/catalog-service";
import { useEffect, useState } from "react";
import { wishlistAtom } from "../../atoms/wishlistAtom";
import { Product } from "../../types";

export function useAddToWishlist(product: Product) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
        setLoading(false);
      });
  }, [product]);

  return loading;
}

export function useRemoveFromWishlist(product: Product) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
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
        setLoading(false);
      })
      .catch(error => {
        console.error("Error removing from wishlist:", error);
        wishlistAtom.merge({
          error: "Failed to remove from wishlist",
        });
      });
    setLoading(false);
  }, [product]);

  return { loading, setLoading };
}
