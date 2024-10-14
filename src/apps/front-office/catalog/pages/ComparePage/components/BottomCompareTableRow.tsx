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

  return (
    <div className="">
      <span
        className={`${row.productKey === "salePrice" ? "text-xl text-sky-550" : ""} ${
          row.productKey === "inStock"
            ? product.inStock
              ? "text-green-500"
              : "text-red-500"
            : ""
        }`}>
        {row.productKey === "inStock"
          ? trans(product.inStock ? "inStock" : "outStock")
          : value || "data"}
        {/* {productValue === true
          ? trans("inStock")
          : productValue === false
            ? trans("outStock")
            : !productValue
              ? "notFound"
              : productValue} */}
      </span>
    </div>
  );
}
