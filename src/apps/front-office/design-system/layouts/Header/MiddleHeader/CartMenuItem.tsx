import { Link } from "@mongez/react-router";
import { cartAtom } from "apps/front-office/design-system/atoms/cartAtom";
import { CartItem } from "apps/front-office/design-system/types";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";

type CartMenuItemPropsType = {
  item: CartItem;
};

export default function CartMenuItem({ item }: CartMenuItemPropsType) {
  const [loading, setLoading] = useState(false);

  return (
    <li key={item.product.id} className="center-y">
      <Link
        to={URLS.product.view(item.product)}
        className="flex-grow h-[60px] center-y gap-x-5">
        <div className="min-w-[60px] h-full">
          <img
            src={item.product.images[0].url}
            alt={item.product.name}
            className="w-full h-full object-cover rounded-md border border-gray-200"
          />
        </div>
        <div className="h-full flex-grow flex flex-col justify-between">
          <p className="text-sm line-clamp-2">{item.product.name}</p>
          <p className="text-sm font-semibold">
            <span>{item.quantity}</span>
            <span className="mx-1">x</span>
            <span className="text-sky-500 font-bold">
              ${item.product.salePrice}
            </span>
          </p>
        </div>
      </Link>
      {/* onClick Delete Product from cart */}
      <button
        className="text-gray"
        disabled={loading}
        onClick={() => cartAtom.removeFromCart(setLoading, item.id)}>
        x
      </button>
    </li>
  );
}
