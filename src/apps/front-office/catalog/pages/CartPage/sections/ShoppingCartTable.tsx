import { trans } from "@mongez/localization";
import { CartItem } from "apps/front-office/design-system/types";
import { isRTL } from "apps/front-office/utils/helpers";
import CartTableItem from "./CartTableItem";

type ShoppingCartTablePropsType = {
  items: CartItem[];
};

export default function ShoppingCartTable({
  items,
}: ShoppingCartTablePropsType) {
  return (
    <table className="w-full border broder-gray-150">
      <caption
        className={`text-2xl font-semibold ${isRTL() ? "text-right" : "text-left"} p-5 border border-gray-150`}>
        {trans("shoppingCart")}
      </caption>
      <thead className={`bg-gray-150 ${isRTL() ? "text-right" : "text-left"}`}>
        <tr className="">
          <th className="w-[600px] xl:min-w-[650px] 2xl:min-w-[420px]">
            {trans("products").toUpperCase()}
          </th>
          <th className="min-w-[100px] xl:min-w-[200px]">
            {trans("price").toUpperCase()}
          </th>
          <th className="xl:min-w-[150px]">
            {trans("quantity").toUpperCase()}
          </th>
          <th className="w-[200px]">{trans("subtotal").toUpperCase()}</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <CartTableItem item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
