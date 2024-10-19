import { ordersAtom } from "apps/front-office/design-system/atoms/ordersAtom";
import AccountStatsCard from "../../../../design-system/components/ui/AccountStatsCard";

export default function AccountStatsCards() {
  const { totalsOrders, pendingOrders, completedOrders } =
    ordersAtom.useValue();

  const accountStatsItems = [
    {
      icon: "bx bx-rocket",
      number: totalsOrders,
      subtitle: "totalOrders",
      className: "bg-sky-100",
      iconClassName: "text-sky-550",
    },
    {
      icon: "bx-receipt",
      number: pendingOrders,
      subtitle: "pendingOrders",
      className: "bg-orange-100",
      iconClassName: "text-orange-450",
    },
    {
      icon: "bx-package",
      number: completedOrders,
      subtitle: "completedOrders",
      className: "bg-green-100",
      iconClassName: "text-green-500",
    },
  ];

  return (
    <div className="w-full flex flex-row xl:flex-col flex-wrap xl:flex-nowrap gap-5">
      {accountStatsItems.map((stat, idx) => (
        <AccountStatsCard key={idx} {...stat} />
      ))}
    </div>
  );
}
