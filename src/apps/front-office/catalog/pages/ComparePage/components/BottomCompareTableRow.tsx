import { trans } from "@mongez/localization";
import { Product } from "apps/front-office/design-system/types";
import { getValue } from "apps/front-office/design-system/utils/helperMethod";

type BottomCompareTableRowPropsType = {
  row: { title: string; productKey: string };
  product: Product;
};

export default function BottomCompareTableRow({
  row,
  product,
}: BottomCompareTableRowPropsType) {
  const value = getValue(product, row.productKey);

  if (row.productKey === "salePrice") {
    return (
      <div className="">
        <span className="text-xl text-sky-550">${value} </span>
        <span className="text-gray-400 text-sm line-through">
          ${product.price}
        </span>
      </div>
    );
  } else if (row.productKey === "inStock") {
    return (
      <div className="font-semibold">
        {product.inStock ? (
          <span className="text-green-500 font-semibold">
            {trans("inStock").toUpperCase()}
          </span>
        ) : (
          <span className="text-red-500 font-semibold">
            {trans("outOfStock").toUpperCase()}
          </span>
        )}
      </div>
    );
  } else if (!value) {
    return (
      <div className="text-gray-400 text-sm font-semibold">
        {trans("notFound")}
      </div>
    );
  } else {
    return <div className="text-sm font-semibold">{value}</div>;
  }
}
