import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { accountNavItems } from "shared/data/accountData";

export default function AccountDashboardNavigationTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleLogout = () => {
    console.log("User logout");
  };

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

      <li className="px-10 py-2 hover:bg-orange-450 hover:text-white duration-200">
        <Link
          to={URLS.home}
          className="center-y gap-x-5"
          onClick={() => handleLogout()}>
          <span className="text-xl">
            <i className="bx bx-log-out rotate-180"></i>
          </span>
          <span className="text-sm">{trans("logout")}</span>
        </Link>
      </li>
    </ul>
  );
}
