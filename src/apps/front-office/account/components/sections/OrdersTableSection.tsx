import { trans } from "@mongez/localization";
import { ordersAtom } from "apps/front-office/design-system/atoms/ordersAtom";
import LinkAsButton from "apps/front-office/design-system/components/ui/LinkAsButton";
import Pagination from "apps/front-office/design-system/components/ui/Pagination";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
// import { ordersData } from "shared/data/accountData";

type OrdersTableSectionPropsType = {
  heading?: string;
  showPagination?: boolean;
};

const statusStyle = {
  pending: "text-orange-450",
  progressing: "text-orange-450",
  completed: "text-green-500",
  canceled: "text-red-500",
};

export default function OrdersTableSection({
  heading = "recentOrders",
  showPagination = true,
}: OrdersTableSectionPropsType) {
  const orders = ordersAtom.use("orders");
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="border border-gray-150 shadow-2">
      <div className="space-between-center gap-5 border-b border-gray-150">
        <h2 className="p-5 font-semibold">{trans(heading)}</h2>
        <LinkAsButton
          variant="text"
          endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
          href={
            URLS.userAccount.orderHistory.root
          }>{`${trans("view")} ${trans("all")}`}</LinkAsButton>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="bg-gray-150 text-zinc-500 text-sm">
            <th className="w-[200px] px-5 py-2">
              {trans("orderID").toUpperCase()}
            </th>
            <th className="w-[150px] px-5 py-2">
              {trans("status").toUpperCase()}
            </th>
            <th className="w-[260px] px-5 py-2">
              {trans("date").toUpperCase()}
            </th>
            <th className="w-[260px] px-5 py-2">
              {trans("total").toUpperCase()}
            </th>
            <th className="px-5 py-2 text-center">
              {trans("action").toUpperCase()}
            </th>
          </tr>
        </thead>

        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="text-left">
              <td className="font-bold">#{order.id}</td>
              <td className={`font-semibold ${statusStyle[order.status.name]}`}>
                {trans(order.status.name)}
              </td>
              <td className="text-gray-550">
                <span>{order.status.createdAt.format}</span>
                {/* <span className="mr-2">
                  {new Date(
                    order.statusLog[0].createdAt.date,
                  ).toLocaleDateString("US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span> */}
                {/* <span>
                  {new Date(
                    order.statusLog[0].createdAt.time,
                  ).toLocaleTimeString("US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                    timeZone: "UTC",
                  })}
                </span> */}
              </td>
              <td>
                <span className="mr-2">${order.finalPrice}</span>
                {/* <span>(5 product)</span> */}
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
        </tbody>
      </table>

      {showPagination && (
        <Pagination
          activePage={activePage}
          totalPages={5}
          handleChangePage={setActivePage}
        />
      )}
    </div>
  );
}
