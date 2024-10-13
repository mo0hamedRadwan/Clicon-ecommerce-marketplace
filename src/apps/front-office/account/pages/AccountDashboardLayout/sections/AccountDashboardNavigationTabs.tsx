import { trans } from "@mongez/localization";
import router, { Link } from "@mongez/react-router";
import { useEffect, useState } from "react";
import { accountNavItems } from "shared/data/accountData";

export default function AccountDashboardNavigationTabs() {
  const path = router.getCurrentRoute();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const tabIndex = accountNavItems.findIndex(item => item.link === path);

    setActiveTab(tabIndex === -1 ? 0 : tabIndex);
  }, [path]);

  return (
    //flex flex-col gap-y-2
    <ul className="w-[260px] py-3 border border-gray-150 shadow-2">
      {accountNavItems.map((item, idx) => (
        <li
          key={item.name}
          className={`px-10 py-2 ${
            activeTab === idx ? "bg-orange-450 text-white" : ""
          } hover:bg-orange-450 hover:text-white duration-200`}>
          <Link
            to={item.link}
            className="center-y gap-x-5"
            onClick={() => setActiveTab(idx)}>
            <span className="text-xl">
              <i className={`bx ${item.icon}`}></i>
            </span>
            <span className="text-sm">{trans(item.name)}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
