import { removeFromCart } from "apps/front-office/catalog/services/catalog-service";
import { useEffect, useState } from "react";
import { cartAtom } from "../../atoms/cartAtom";
import { CartItem } from "../../types";

export function useRemoveFromCart(item: CartItem) {
  const [clickEvent, setClickEvent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!clickEvent) return;

    setLoading(true);
    removeFromCart(item.id)
      .then(response => {
        const items = response.data.cart.items;
        console.log(response.data);
        cartAtom.merge({
          cart: {
            ...cartAtom.get("cart"),
            items: !items ? cartAtom.get("cart").items : items,
            totals: {
              ...cartAtom.get("cart").totals,
              subtotal:
                cartAtom.get("cart").totals.subtotal - item.product.salePrice,
            },
          },
          totalProducts: cartAtom.get("totalProducts") - 1,
        });
        setLoading(false);
        setClickEvent(false);
      })
      .catch(error => {
        console.error("Error removing from cart:", error);
        setLoading(false);
        setClickEvent(false);
      });
  }, [clickEvent, item]);

  return { removeFromCart: setClickEvent, loading };
}
