import { trans } from "@mongez/localization";
import { shopAtom } from "apps/front-office/catalog/atoms/shopAtom";

export default function ActiveFilters() {
  const filter = shopAtom.use("filter");
  const totalProducts = shopAtom.use("paginationInfo").total;

  return (
    <div className="w-full px-5 py-2 bg-gray-150 space-between flex-wrap gap-5">
      <div className="center-y gap-2">
        <span className="text-gray-550">{trans("activeFilters")}:</span>
        <ul className="center-y gap-2 font-semibold">
          {Object.keys(filter).map(key => (
            <li key={key}>{filter[key]}</li>
          ))}
        </ul>
      </div>
      <div className="center-y gap-x-2">
        <span className="font-semibold">{totalProducts}</span>
        <span>{trans("resultsFound")}</span>
      </div>
    </div>
  );
}
