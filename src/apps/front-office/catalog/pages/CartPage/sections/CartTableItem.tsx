import { Link } from "@mongez/react-router";
import { cartAtom } from "apps/front-office/design-system/atoms/cartAtom";
import Loader2 from "apps/front-office/design-system/components/loaders/Loader2";
import { CartItem } from "apps/front-office/design-system/types";
import URLS from "apps/front-office/utils/urls";
import Button from "components/form/Button";
import QuantityInput from "components/ui/QuantityInput";
import { useState } from "react";

type CartTableItemPropsType = {
  item: CartItem;
};

export default function CartTableItem({ item }: CartTableItemPropsType) {
  const [productQuantity, setProductQuantity] = useState(item.quantity || 1);
  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingUpdateQuantity, setLoadingUpdateQuantity] = useState(false);

  const handleQuantityChange = (value: number) => {
    setProductQuantity(value);
    cartAtom.updateQuantityItem(setLoadingUpdateQuantity, item, value);
  };

  return (
    <>
      <td className="center-y gap-x-5">
        <Button
          className="p-2 rounded-full bg-white text-gray-550 border border-gray-150 hover:text-red-550 hover:border-red-550 hover:bg-white"
          disabled={loadingCart}
          onClick={() => cartAtom.removeFromCart(setLoadingCart, item.id)}>
          {loadingCart ? (
            <Loader2 />
          ) : (
            <span>
              <i className="bx bx-x"></i>
            </span>
          )}
        </Button>
        <Link to={URLS.product.view(item.product)} className="center-y gap-x-5">
          <img
            src={item.product.images[0].url}
            alt={item.product.name}
            className="w-20 h-20 object-cover rounded-md border border-gray-200"
          />
          <p className="text-gray-550 text-sm line-clamp-3 hover:text-zinc-950 duration-150">
            {item.product.name}
          </p>
        </Link>
      </td>
      <td>
        <div className="center-y gap-x-2 text-lg">
          {item.product.price && (
            <span className="line-through text-gray-450">
              ${item.product.price}
            </span>
          )}
          <span>${item.product.salePrice}</span>
        </div>
      </td>
      <td>
        <QuantityInput
          value={productQuantity}
          setValue={handleQuantityChange}
        />
        {loadingUpdateQuantity && <Loader2 />}
      </td>
      <td>
        <span className="text-lg font-semibold">
          ${productQuantity * item.product.salePrice}
        </span>
      </td>
    </>
  );
}
