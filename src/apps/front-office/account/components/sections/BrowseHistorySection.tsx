import { trans } from "@mongez/localization";
import LinkAsButton from "apps/front-office/design-system/components/ui/LinkAsButton";
import Pagination from "apps/front-office/design-system/components/ui/Pagination";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";

export default function BrowseHistorySection() {
  const [activePage, setActivePage] = useState(1);
  return (
    <div className="border border-gray-150 shadow-4">
      <div className="space-between-center gap-5 border-b border-gray-150">
        <h2 className="p-5 font-semibold">{trans("browsingHistory")}</h2>
        <LinkAsButton
          variant="text"
          endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
          href={
            URLS.userAccount.cardsAndAddresses
          }>{`${trans("view")} ${trans("all")}`}</LinkAsButton>
      </div>

      <ul className="p-5 flex flex-wrap gap-5">
        <li className="w-[240px] h-[330px] border border-red-500"></li>
        <li className="w-[240px] h-[330px] border border-red-500"></li>
        <li className="w-[240px] h-[330px] border border-red-500"></li>
        <li className="w-[240px] h-[330px] border border-red-500"></li>
      </ul>

      <Pagination activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}
