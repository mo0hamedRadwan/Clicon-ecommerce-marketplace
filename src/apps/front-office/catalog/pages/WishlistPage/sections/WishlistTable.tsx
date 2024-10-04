import { trans } from "@mongez/localization";
import { Product } from "apps/front-office/design-system/types";
import { isRTL } from "apps/front-office/utils/helpers";
import WishlistTableRow from "./WishlistTableRow";

type WishlistTablePropsType = {
  products: Product[];
  size?: string;
};

export default function WishlistTable({
  products,
  size = "page",
}: WishlistTablePropsType) {
  return (
    <table className="w-full border border-gray-150 rounded">
      <caption
        className={`text-2xl font-semibold ${isRTL() ? "text-right" : "text-left"} p-5 border border-gray-150`}>
        {trans("wishlist")}
      </caption>
      <thead className={`bg-gray-150 ${isRTL() ? "text-right" : "text-left"}`}>
        <tr className="">
          <th className={`w-[420px] ${size === "page" ? "" : ""}`}>
            {trans("products").toUpperCase()}
          </th>
          <th className="min-w-[100px] 2xl:min-w-[200px]">
            {trans("price").toUpperCase()}
          </th>
          <th className="min-w-[150px]">
            {trans("stockStatus").toUpperCase()}
          </th>
          <th className="w-[320px]">{trans("actions").toUpperCase()}</th>
        </tr>
      </thead>

      <tbody>
        {products.map(product => (
          <WishlistTableRow product={product} key={product.id} />
        ))}
      </tbody>
    </table>
  );
}
