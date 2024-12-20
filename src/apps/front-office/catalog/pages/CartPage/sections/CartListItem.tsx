import { trans } from "@mongez/localization";
import { cartAtom } from "apps/front-office/design-system/atoms/cartAtom";
import { CartItem } from "apps/front-office/design-system/types";
import Button from "components/form/Button";
import Loader2 from "components/loaders/Loader2";
import QuantityInput from "components/ui/QuantityInput";
import { useState } from "react";

type CartListItemPropsType = {
  item: CartItem;
};

export default function CartListItem({ item }: CartListItemPropsType) {
  const [productQuantity, setProductQuantity] = useState(item.quantity || 1);
  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingUpdateQuantity, setLoadingUpdateQuantity] = useState(false);

  const handleQuantityChange = (value: number) => {
    setProductQuantity(value);
    cartAtom.updateQuantityItem(setLoadingUpdateQuantity, item, value);
  };

  return (
    <div className="p-5 w-full sm:min-w-[450px] sm:max-w-[450px] flex flex-col items-center gap-y-3 border border-gray-300">
      <div className="w-full center-y gap-3">
        <img
          className="w-20 h-20 rounded-full"
          src={item.product.images[0].url}
          alt={item.product.name}
        />
        <div>
          <h3 className="text-base font-semibold line-clamp-2">
            {item.product.name}
          </h3>
          <p className="text-sm center-y gap-x-2">
            {item.product.price && (
              <span className="text-gray-450 line-through">
                ${item.product.price}
              </span>
            )}
            <span>${item.product.salePrice}</span>
          </p>
        </div>
      </div>
      <div className="w-full space-between-center">
        <QuantityInput
          value={productQuantity}
          setValue={handleQuantityChange}
        />
        <div>{loadingUpdateQuantity && <Loader2 />}</div>
        <p className="center-y gap-x-2">
          <span>{trans("subtotal")}:</span>
          <span className="font-semibold">
            ${productQuantity * item.product.salePrice}
          </span>
        </p>
      </div>
      <div className="center-y gap-x-5">
        <Button
          size="sm"
          endIcon="bx-trash"
          iconClassName="text-lg sm:text-2xl"
          className=" bg-red-550 hover:bg-gray-450"
          disabled={loadingCart}
          onClick={() => cartAtom.removeFromCart(setLoadingCart, item.id)}>
          {loadingCart ? (
            <Loader2 />
          ) : (
            <span>
              {`${trans("remove")} ${trans("from")} ${trans("cart")}`.toUpperCase()}
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}
