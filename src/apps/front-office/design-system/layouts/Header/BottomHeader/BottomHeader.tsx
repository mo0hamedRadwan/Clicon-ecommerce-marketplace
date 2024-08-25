import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";
import { useState } from "react";
import { callUs, navigateItems } from "shared/data/headerData";
import AllCategoriesMenu from "./AllCategoriesMenu";

export default function BottomHeader() {
  const [openCategoriesMenu, setOpenCategoriesMenu] = useState<boolean>(false);
  return (
    <div className="hidden md:block h-20 shadow-2">
      <div className="container h-full space-between-center">
        <ul className="center-y gap-x-2 text-base lg:text-lg text-gray-500">
          <li
            className="hidden md:center-y gap-x-2 navItem bg-gray-150 px-5 py-3 font-semibold relative"
            onClick={() => setOpenCategoriesMenu(!openCategoriesMenu)}>
            <span>{`${trans("all")} ${trans("categories")}`}</span>
            <span>
              {openCategoriesMenu ? (
                <i className="bx bx-chevron-up"></i>
              ) : (
                <i className="bx bx-chevron-down"></i>
              )}
            </span>
            {openCategoriesMenu && (
              <AllCategoriesMenu
                setOpenCategoriesMenu={setOpenCategoriesMenu}
              />
            )}
          </li>
          {navigateItems.map(item => (
            <li key={item.name} className="navItem px-3">
              <Link to={item.link} className="center-y gap-x-1 xl:gap-x-3">
                <span className="md:hidden lg:inline">
                  <i className={`bx ${item.icon}`}></i>
                </span>
                <span>{trans(item.name)}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="hidden xl:center-y gap-x-2">
          <span className={`text-2xl ${isRTL() ? "-rotate-90" : "rotate-0"}`}>
            <i className={`bx ${callUs.icon}`}></i>
          </span>
          <span className="text-base xl:text-xl">{callUs.number}</span>
        </p>
      </div>
    </div>
  );
}
