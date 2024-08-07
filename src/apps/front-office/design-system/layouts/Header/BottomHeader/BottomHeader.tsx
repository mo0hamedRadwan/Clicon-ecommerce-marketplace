import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";
import { useState } from "react";
import { callUs, navigateItems } from "shared/data/headerData";

export default function BottomHeader() {
  const [openCategoriesMenu, setOpenCategoriesMenu] = useState<boolean>(false);
  return (
    <div className="h-20 shadow-1">
      <div className="container h-full space-between-center">
        <ul className="center-y gap-x-6 text-lg text-gray-500">
          <li
            className="cursor-pointer center-y gap-x-2 text-gray-900"
            onClick={() => setOpenCategoriesMenu(!openCategoriesMenu)}>
            <span>{trans("allCategories")}</span>
            <span>
              {openCategoriesMenu ? (
                <i className="bx bx-chevron-up"></i>
              ) : (
                <i className="bx bx-chevron-down"></i>
              )}
            </span>
          </li>
          {navigateItems.map(item => (
            <li key={item.name}>
              <Link to={item.link} className="center-y gap-x-3">
                <span>
                  <i className={`bx ${item.icon}`}></i>
                </span>
                <span>{trans(item.name)}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-2xl center-y gap-x-2">
          <span className={`text-4xl ${isRTL() ? "-rotate-90" : ""}`}>
            <i className={`bx ${callUs.icon}`}></i>
          </span>
          <span>{callUs.number}</span>
        </p>
      </div>
    </div>
  );
}
