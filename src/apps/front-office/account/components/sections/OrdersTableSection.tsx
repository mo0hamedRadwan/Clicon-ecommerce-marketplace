import { trans } from "@mongez/localization";
import LinkAsButton from "apps/front-office/design-system/components/ui/LinkAsButton";
import Pagination from "apps/front-office/design-system/components/ui/Pagination";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { ordersData } from "shared/data/accountData";

type OrdersTableSectionPropsType = {
  heading?: string;
  showPagination?: boolean;
};

const statusStyle = {
  inProgress: "text-orange-450",
  completed: "text-green-500",
  canceled: "text-red-500",
};

export default function OrdersTableSection({
  heading = "recentOrders",
  showPagination = true,
}: OrdersTableSectionPropsType) {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="border border-gray-150 shadow-4">
      <div className="space-between-center gap-5 border-b border-gray-150">
        <h2 className="p-5 font-semibold">{trans(heading)}</h2>
        <LinkAsButton
          variant="text"
          endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
          href={
            URLS.userAccount.cardsAndAddresses
          }>{`${trans("view")} ${trans("all")}`}</LinkAsButton>
      </div>

      <table className="w-full text-left">
        <tr className="bg-gray-150 text-zinc-500 text-sm">
          <th className="w-[200px] px-5 py-2">
            {trans("orderID").toUpperCase()}
          </th>
          <th className="w-[150px] px-5 py-2">
            {trans("status").toUpperCase()}
          </th>
          <th className="w-[260px] px-5 py-2">{trans("date").toUpperCase()}</th>
          <th className="w-[260px] px-5 py-2">
            {trans("total").toUpperCase()}
          </th>
          <th className="px-5 py-2">{trans("action").toUpperCase()}</th>
        </tr>

        {ordersData.map(order => (
          <tr key={order.id} className="text-left">
            <td className="font-bold">#{order.id}</td>
            <td className={`font-semibold ${statusStyle[order.status]}`}>
              {trans(order.status)}
            </td>
            <td className="text-gray-550">
              <span className="mr-2">
                {order.date.toLocaleDateString("US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span>
                {order.date.toLocaleTimeString("US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                  timeZone: "UTC",
                })}
              </span>
            </td>
            <td>
              <span className="mr-2">${order.total}</span>
              <span>(5 product)</span>
            </td>
            <td className="max-w-28">
              <LinkAsButton
                variant="text"
                href={URLS.userAccount.trackOrder.view(order.id)}>
                {trans("viewDetails")}
              </LinkAsButton>
            </td>
          </tr>
        ))}
      </table>

      {showPagination && (
        <Pagination activePage={activePage} setActivePage={setActivePage} />
      )}
    </div>
  );
}
