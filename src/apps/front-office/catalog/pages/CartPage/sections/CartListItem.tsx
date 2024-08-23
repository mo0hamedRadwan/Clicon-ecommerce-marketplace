import { trans } from "@mongez/localization";
import QuantityInput from "apps/front-office/design-system/components/ui/QuantityInput";
import { ProductType } from "apps/front-office/design-system/types";
import Button from "components/form/Button";
import { useState } from "react";

type CartListItemPropsType = {
  product: ProductType;
};

export default function CartListItem({ product }: CartListItemPropsType) {
  const [productQuantity, setProductQuantity] = useState(product.quantity || 1);

  return (
    <div className="p-5 w-full sm:w-[450px] flex flex-col items-center gap-y-3 border border-gray-300">
      <div className="w-full center-y gap-3">
        <img
          className="w-20 h-20 rounded-full"
          src={product.imageUrl}
          alt={product.name}
        />
        <div>
          <h3 className="text-base font-semibold line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm center-y gap-x-2">
            {product.oldPrice && (
              <span className="text-gray-450 line-through">
                ${product.oldPrice}
              </span>
            )}
            <span>${product.price}</span>
          </p>
        </div>
      </div>
      <div className="w-full space-between-center">
        <QuantityInput value={productQuantity} setValue={setProductQuantity} />
        <p className="center-y gap-x-2">
          <span>{trans("subtotal")}:</span>
          <span className="font-semibold">
            ${productQuantity * product.price}
          </span>
        </p>
      </div>
      <div className="center-y gap-x-5">
        <Button
          size="sm"
          endIcon="bx-trash"
          iconClassName="text-lg sm:text-2xl"
          className=" bg-red-550 hover:bg-gray-450"
          onClick={() => console.log("remove product from wishlist")}>
          {`${trans("remove")} ${trans("from")} ${trans("cart")}`.toUpperCase()}
        </Button>
      </div>
    </div>
  );
}
