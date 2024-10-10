import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { accountAtom } from "../../atoms/accountAtom";
import BillingAddressCard from "../../components/sections/BillingAddressCard";
import BrowseHistorySection from "../../components/sections/BrowseHistorySection";
import OrderListSection from "../../components/sections/OrderListSection";
import OrdersTableSection from "../../components/sections/OrdersTableSection";
import PaymentOptionsSection from "../../components/sections/PaymentOptionsSection";
import AccountInfoCard from "./sections/AccountInfoCard";
import AccountStatsCards from "./sections/AccountStatsCards";

export default function AccountDashboardTab() {
  const user = accountAtom.use("user");

  return (
    <div className="flex flex-col gap-y-10">
      <div>
        <h2 className="mb-5 text-xl font-semibold">{`${trans("hello")}, ${user.name}`}</h2>
        <p className="w-full sm:w-[430px] text-sm">
          <span>{`${trans("from")} ${trans("yourAccountDashboard")}, ${trans("youCan")} ${trans("easily")} ${trans("check")} & ${trans("view")}`}</span>
          <Link
            to={URLS.userAccount.orderHistory.root}
            className="text-sky-550 mx-1">
            {trans("yourRecentOrders")}
          </Link>
          <span>{`, ${trans("manage")}`}</span>
          <Link to={URLS.userAccount.cart} className="text-sky-550 mx-1">
            {trans("yourShipping")}
          </Link>
          <span>{trans("and")}</span>
          <Link
            to={URLS.userAccount.cardsAndAddresses}
            className="text-sky-550 mx-1">
            {trans("billingAddresses")}
          </Link>
          <span>{`${trans("and")} ${trans("edit")}`}</span>
          <Link
            to={URLS.userAccount.settings}
            className="text-sky-550 mx-1">{`${trans("yourPassword")} ${trans("and")} ${trans("accountDetails")}`}</Link>
        </p>
      </div>
      <div className="flex flex-wrap xl:flex-nowrap gap-5">
        <AccountInfoCard />
        <BillingAddressCard />
        <AccountStatsCards />
      </div>
      <PaymentOptionsSection />
      <div className="">
        <div className="hidden xl:block">
          <OrdersTableSection />
        </div>
        <div className="block xl:hidden">
          <OrderListSection />
        </div>
      </div>
      <div>
        <BrowseHistorySection />
      </div>
    </div>
  );
}
