import { atom } from "@mongez/react-atom";
import { getOrders } from "apps/front-office/catalog/services/catalog-service";
import { OrderType } from "../types";

type ordersDataType = {
  loading: boolean;
  orders: OrderType[];
  error: string;
  totalsOrders: number;
  pendingOrders: number;
  completedOrders: number;
};

type ordersActionType = {
  loadingOrders: () => void;
  addOrderToOrders: (order: OrderType) => void;
};

export const ordersAtom = atom<ordersDataType, ordersActionType>({
  key: "orders",
  default: {
    loading: false,
    orders: [],
    error: "",
    totalsOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
  },
  actions: {
    loadingOrders: () => {
      ordersAtom.change("loading", true);
      getOrders()
        .then(response => {
          const orders = response.data.orders;
          console.log(response.data);
          ordersAtom.merge({
            orders,
            loading: false,
            totalsOrders: orders.length,
            pendingOrders: orders.filter(
              order => order.status.name === "pending",
            ).length,
            completedOrders: orders.filter(
              order => order.status.name === "completed",
            ).length,
          });
        })
        .catch(error => {
          console.error(error);
          ordersAtom.merge({
            error: error,
            loading: false,
          });
        });
    },
    addOrderToOrders: (order: OrderType) => {
      ordersAtom.merge({
        orders: [...ordersAtom.get("orders"), order],
        totalsOrders: ordersAtom.get("totalsOrders") + 1,
        pendingOrders: ordersAtom.get("pendingOrders") + 1,
      });
    },
    // Add other actions as needed
  },
});
