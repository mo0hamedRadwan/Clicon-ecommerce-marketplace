import { addToCart } from "apps/front-office/catalog/services/catalog-service";
import { useEffect, useState } from "react";
import { cartAtom } from "../../atoms/cartAtom";
import { CartItem, Product } from "../../types";

export function useAddToCart(product: Product, quantity: number = 1) {
  const [clickEvent, setClickEvent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!clickEvent) return;

    setLoading(true);
    const items = cartAtom.get("cart").items;
    const existProduct = items.find(item => item.id === product.id);
    const productQuantity = existProduct
      ? existProduct.quantity + quantity
      : quantity;

    addToCart({
      product: product.id,
      quantity: productQuantity,
    })
      .then(response => {
        console.log("cart add to cart successfully");
        const items: CartItem[] = response.data.cart.items;
        const cart = cartAtom.get("cart");

        cartAtom.merge({
          cart: {
            ...cart,
            items,
            totals: {
              ...cart.totals,
              subtotal: !product
                ? cart.totals.subtotal
                : cart.totals.subtotal + product.salePrice,
            },
          },
          totalProducts: cartAtom.get("totalProducts") + quantity,
        });
        setLoading(false);
        setClickEvent(false);
      })
      .catch(error => {
        console.error("Error adding to cart:", error);
        setLoading(false);
        setClickEvent(false);
      });
  }, [clickEvent, product, quantity]);

  return { loading, addToCart: setClickEvent };
}
