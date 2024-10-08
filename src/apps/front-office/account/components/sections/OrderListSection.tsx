import { trans } from "@mongez/localization";
import LinkAsButton from "apps/front-office/design-system/components/ui/LinkAsButton";
import Pagination from "apps/front-office/design-system/components/ui/Pagination";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { ordersData } from "shared/data/accountData";

type OrderListSectionPropsType = {
  heading?: string;
  showPagination?: boolean;
};

const statusStyle = {
  inProgress: "bg-orange-100",
  completed: "bg-green-100",
  canceled: "bg-red-100",
};

export default function OrderListSection({
  heading = "recentOrders",
  showPagination = true,
}: OrderListSectionPropsType) {
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

      <div className="py-5 flex justify-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {ordersData.map(order => (
            <li
              key={order.id}
              className="p-3 min-w-[320px] max-w-[380px] space-between-center border border-gray-150">
              <div className="flex flex-col gap-y-2">
                <p
                  className={`p-1 w-[100px] text-center font-semibold rounded ${statusStyle[order.status]}`}>
                  {trans(order.status)}
                </p>
                <p className="center-y gap-x-2">
                  <span className="text-gray-550">{trans("orderID")}</span>
                  <span className="font-bold">#{order.id}</span>
                </p>
                <p className="center-y gap-x-2 text-sm text-gray-450">
                  <span>
                    {order.date.toLocaleDateString("US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span>
                    {order.date.toLocaleTimeString("US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: false,
                    })}
                  </span>
                  <span>- 5 products</span>
                </p>
                <p className="text-sky-550 text-lg font-semibold">
                  ${order.total.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => console.log("")}
                className="w-8 h-8 sm:w-12 sm:h-12 flex-center text-3xl text-orange-450 border border-orange-150 rounded-full hover:bg-orange-450 hover:text-white duration-150 cursor-pointer">
                {isRTL() ? (
                  <i className="bx bx-left-arrow-alt"></i>
                ) : (
                  <i className="bx bx-right-arrow-alt"></i>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

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
