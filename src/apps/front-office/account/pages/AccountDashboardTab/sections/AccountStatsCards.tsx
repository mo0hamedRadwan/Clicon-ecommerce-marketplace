import { accountStatsItems } from "shared/data/accountData";
import AccountStatsCard from "../../../../design-system/components/ui/AccountStatsCard";

export default function AccountStatsCards() {
  return (
    <div className="flex flex-row lg:flex-col flex-wrap lg:flex-nowrap gap-5">
      {accountStatsItems.map((stat, idx) => (
        <AccountStatsCard key={idx} {...stat} />
      ))}
    </div>
  );
}
