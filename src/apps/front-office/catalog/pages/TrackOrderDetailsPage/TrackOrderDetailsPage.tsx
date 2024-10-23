import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { OrderType } from "apps/front-office/design-system/types";
import { isRTL } from "apps/front-office/utils/helpers";
import { useEffect, useState } from "react";
import { getOrderDetails } from "../../services/catalog-service";

// export const order = {
//   id: 96459761,
//   productsNum: 3,
//   finalPrice: 1199.99,
//   statusNumber: 1,
//   orderDate: new Date("2024-8-15"),
//   expectedDate: new Date("2024-8-30"),
//   orderActivities: [
//     {
//       icon: "bx-notepad",
//       iconColor: "text-blue-400",
//       iconBgColor: "bg-blue-50",
//       description: "Your order has been confirmed.",
//       date: new Date(""),
//     },
//     {
//       icon: "bx-check-circle",
//       iconColor: "text-green-400",
//       iconBgColor: "bg-green-50",
//       description: "Your order is successfully verified.",
//       date: new Date(""),
//     },
//     {
//       icon: "bx-map-alt",
//       iconColor: "text-blue-400",
//       iconBgColor: "bg-blue-50",
//       description: "Your order on the way to (last mile) hub.",
//       date: new Date(""),
//     },
//     {
//       icon: "bx-map",
//       iconColor: "text-blue-400",
//       iconBgColor: "bg-blue-50",
//       description: "Your order has reached at last mile hub.",
//       date: new Date(""),
//     },
//     {
//       icon: "bx-user",
//       iconColor: "text-blue-400",
//       iconBgColor: "bg-blue-50",
//       description:
//         "Our delivery man (John Wick) Has picked-up your order for delvery. ",
//       date: new Date(""),
//     },
//     {
//       icon: "bx-check-double",
//       iconColor: "text-green-400",
//       iconBgColor: "bg-green-50",
//       description:
//         "Your order has been delivered. Thank you for shopping at Clicon!",
//       date: new Date(""),
//     },
//   ],
// };

export const orderStatus = [
  { label: "orderPlaced", icon: "bx-notepad" },
  { label: "packaging", icon: "bx-package" },
  { label: "onTheRoad", icon: "bxs-truck" },
  { label: "delivered", icon: "bxs-like" },
];

export type TrackOrderDetailsPagePropsType = {
  params: { id: string };
};

export default function TrackOrderDetailsPage({
  params,
}: TrackOrderDetailsPagePropsType) {
  const [loading, setLoading] = useState<boolean>(false);
  const [order, setOrder] = useState<OrderType | undefined>();

  useEffect(() => {
    setLoading(true);
    getOrderDetails(params.id)
      .then(response => {
        console.log(response.data);
        setOrder(response.data.order);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex flex-center justify-center items-center h-screen">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  // Check Order for Account

  // Not Order
  if (!order) {
    return (
      <div className="flex flex-col gap-y-5">
        <h2 className="text-2xl font-semibold">{trans("order")}</h2>
        <p className="w-full text-sm text-gray-600">{trans("orderNotFound")}</p>
      </div>
    );
  }

  return (
    <>
      <Helmet title={"trackOrderDetailsPage"} />
      <div className="py-20 container flex-center">
        <div className="w-[870px] p-6 flex flex-col gap-y-5 border border-gray-150">
          <div className="space-between-center p-5 flex-wrap xs:flex-nowrap gap-5 bg-yellow-50">
            <div className="flex flex-col gap-y-3">
              <h3 className="text-xl font-semibold">#{order.id}</h3>
              <p className="center-y flex-wrap sm:flex-nowrap gap-x-2">
                <span>
                  {`${order.items.length} ${order.items.length === 1 ? trans("product") : trans("products")}`}
                </span>
                <span>.</span>
                {/* <span>{`${trans("order")} ${trans("placed")} ${trans("in")} ${order.orderDate.toLocaleDateString()} at ${order.orderDate.toLocaleTimeString()}`}</span> */}
                <span>{`${trans("order")} ${trans("placed")} ${trans("in")} ${order.status.createdAt.format}`}</span>
              </p>
            </div>
            <div>
              <p className="text-3xl text-sky-550 font-semibold">
                ${order.finalPrice.toFixed(2)}
              </p>
            </div>
          </div>
          <p className="flex gap-x-1">
            <span className="text-gray-550">{`${trans("order")} ${trans("expected")} ${trans("arrival")}`}</span>
            <span className="font-semibold">
              {/* {order.expectedDate.toLocaleDateString()} */}
              {new Date(10, 11, 2024).toLocaleDateString()}
            </span>
          </p>

          <div className="flex justify-around">
            <div className="relative w-full lg:w-[700px] flex flex-col items-center gap-y-8">
              <ul className="pt-10 w-full flex flex-col sm:flex-row items-center justify-between sm:items-start gap-5">
                {orderStatus.map((status, index) => (
                  <li key={status.label} className="w-full flex-center">
                    <div
                      className={`hidden sm:flex-center z-10 absolute -top-2 w-6 h-6 ${
                        order.statusLog.length >= index
                          ? "bg-orange-450 border-white"
                          : "bg-white border-orange-450"
                      } border-2 rounded-full text-white`}>
                      <span
                        className={`${order.statusLog.length > index ? "block" : "hidden"}`}>
                        <i className="bx bx-check"></i>
                      </span>
                    </div>
                    <div className="w-full relative flex flex-col items-center gap-y-3">
                      <div
                        className={`hidden ${index !== orderStatus.length - 1 ? "sm:block" : "hidden"} ${
                          order.statusLog.length > index
                            ? "bg-orange-450"
                            : "bg-orange-150"
                        } absolute -top-10 ${
                          isRTL()
                            ? "right-16 md:right-[90px] lg:right-20"
                            : " left-16 md:left-[90px] lg:left-20"
                        } w-[calc(100%+20px)] h-2 rounded`}></div>
                      <span
                        className={`text-4xl ${
                          order.statusLog.length > index
                            ? "text-green-500"
                            : order.statusLog.length === index
                              ? "text-orange-450"
                              : "text-orange-200"
                        }`}>
                        <i className={`bx ${status.icon}`}></i>
                      </span>
                      <p
                        className={`${order.statusLog.length >= index ? "text-black" : "text-gray-450"}`}>
                        {trans(status.label)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-150">
            <h3 className="my-5 text-xl font-semibold">
              {trans("OrderActivity")}
            </h3>
            <ul className="flex flex-col-reverse gap-y-5 sm:gap-y-3">
              {order.statusLog.map((activity, index) => (
                <li key={index} className="center-y gap-x-3">
                  <div className="min-w-12 min-h-12 flex-center bg-green-50">
                    <span className="text-2xl text-green-400">
                      <i className="bx bx-notepad"></i>
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <span>{activity.label}</span>
                    <span className="text-gray-450">
                      {/* {activity.date.toLocaleDateString()} */}
                      {activity.createdAt.format}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
