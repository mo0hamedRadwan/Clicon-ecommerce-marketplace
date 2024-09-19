import OrderListSection from "../../components/sections/OrderListSection";
import OrdersTableSection from "../../components/sections/OrdersTableSection";

export default function OrderHistoryTab() {
  return (
    <div className="">
      <div className="hidden xl:block">
        <OrdersTableSection heading="orderHistory" />
      </div>
      <div className="block xl:hidden">
        <OrderListSection heading="orderHistory" />
      </div>
    </div>
  );
}
