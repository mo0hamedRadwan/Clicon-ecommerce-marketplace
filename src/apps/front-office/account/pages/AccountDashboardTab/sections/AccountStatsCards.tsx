import { accountStatsItems } from "shared/data/accountData";
import AccountStatsCard from "../../../../design-system/components/ui/AccountStatsCard";

export default function AccountStatsCards() {
  return (
    <div className="w-full flex flex-row xl:flex-col flex-wrap xl:flex-nowrap gap-5">
      {accountStatsItems.map((stat, idx) => (
        <AccountStatsCard key={idx} {...stat} />
      ))}
    </div>
  );
}
