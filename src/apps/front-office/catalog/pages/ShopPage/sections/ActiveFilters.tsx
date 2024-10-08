import { trans } from "@mongez/localization";
import { queryString } from "@mongez/react-router";
import { shopAtom } from "apps/front-office/catalog/atoms/shopAtom";

export default function ActiveFilters() {
  const filter = shopAtom.use("filter");
  const totalProducts = shopAtom.use("paginationInfo").total;

  const handleRemoveFilter = (key: string) => {
    const query = queryString.toQueryString({
      ...queryString.all(),
      [key]: undefined,
    });
    queryString.update(query);
    shopAtom.loadProducts();
  };

  return (
    <div className="w-full px-5 py-2 bg-gray-150 space-between flex-wrap gap-5">
      <div className="center-y gap-2">
        <span className="text-gray-550">{trans("activeFilters")}:</span>
        <ul className="center-y gap-2 font-semibold">
          {Object.keys(filter).map(key =>
            filter[key] ? (
              <li
                key={key}
                className="py-1 px-2 center-y bg-gray-300 rounded-lg">
                <span>{`${key}: ${filter[key]}`}</span>
                <button
                  className="ml-3 text-xs text-red-500 font-bold"
                  onClick={() => handleRemoveFilter(key)}>
                  x
                </button>
              </li>
            ) : null,
          )}
        </ul>
      </div>
      <div className="center-y gap-x-2">
        <span className="font-semibold">{totalProducts}</span>
        <span>{trans("resultsFound")}</span>
      </div>
    </div>
  );
}
