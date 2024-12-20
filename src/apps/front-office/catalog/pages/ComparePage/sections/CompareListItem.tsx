import { trans } from "@mongez/localization";
import { Product } from "apps/front-office/design-system/types";
import BottomCompareTableRow from "../components/BottomCompareTableRow";
import UpperCompareTableRow from "../components/UpperCompareTableRow";

type CompareListItemPropsType = {
  product: Product;
};

export default function CompareListItem({ product }: CompareListItemPropsType) {
  return (
    <table className="w-full border border-gray-150">
      <tbody>
        <tr className="w-full border-b border-gray-150">
          <td colSpan={2} className="">
            <UpperCompareTableRow product={product} />
          </td>
        </tr>
        {[
          // { title: "customersFeedback", productKey: "customersFeedback" },
          { title: "price", productKey: "salePrice" },
          // { title: "soldBy", productKey: "price" },
          { title: "category", productKey: "category.name" },
          { title: "stockStatus", productKey: "inStock" },
          // { title: "size", productKey: "size" },
          { title: "weight", productKey: "weight" },
        ].map((row, idx) => (
          <tr
            key={row.title}
            className={`${idx % 2 === 0 ? "bg-gray-200" : ""} text-xs sm:text-base`}>
            <td className="w-1/4 p-2 border-r border-gray-150">
              {trans(row.title)}
            </td>
            <td className="w-1/4 p-2 border-r border-gray-150">
              <BottomCompareTableRow row={row} product={product} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
