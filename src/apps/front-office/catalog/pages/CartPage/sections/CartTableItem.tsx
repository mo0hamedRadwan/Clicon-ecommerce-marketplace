import { Link } from "@mongez/react-router";
import { ProductType } from "apps/front-office/design-system/types";
import Button from "components/form/Button";
import QuantityInput from "components/ui/QuantityInput";
import { useState } from "react";

type CartTableItemPropsType = {
  product: ProductType;
};

export default function CartTableItem({ product }: CartTableItemPropsType) {
  const [productQuantity, setProductQuantity] = useState(product.quantity || 1);

  return (
    <>
      <td className="center-y gap-x-5">
        <Button
          className="p-2 rounded-full bg-white text-gray-550 border border-gray-150 hover:text-red-550 hover:border-red-550 hover:bg-white"
          onClick={() => console.log("remove product from cart")}>
          <i className="bx bx-x"></i>
        </Button>
        <Link to={"/product/:id"} className="center-y gap-x-5">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-20 h-20 object-cover rounded-md border border-gray-200"
          />
          <p className="text-gray-550 text-sm line-clamp-3 hover:text-zinc-950 duration-150">
            {product.name}
          </p>
        </Link>
      </td>
      <td>
        <div className="center-y gap-x-2 text-lg">
          {product.oldPrice && (
            <span className="line-through text-gray-450">
              ${product.oldPrice}
            </span>
          )}
          <span>${product.price}</span>
        </div>
      </td>
      <td>
        <QuantityInput value={productQuantity} setValue={setProductQuantity} />
      </td>
      <td>
        <span className="text-lg font-semibold">
          ${productQuantity * product.price}
        </span>
      </td>
    </>
  );
}
