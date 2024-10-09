import { trans } from "@mongez/localization";
import { queryString } from "@mongez/react-router";
import { shopAtom } from "apps/front-office/catalog/atoms/shopAtom";
import Select from "apps/front-office/design-system/components/form/Select";
import { SelectOption } from "apps/front-office/design-system/types";

export const sortByOptions: SelectOption[] = [
  {
    label: "mostPopular",
    value: "mostViewed",
  },
  { label: "topRated", value: "topRated" },
  { label: "newest", value: "newest" },
  {
    label: "lowestPrice2highestPrice",
    value: "lowestPrice",
  },
  {
    label: "highestPrice2lowestPrice",
    value: "highestPrice",
  },
];

export default function SortProducts() {
  const handleSortProducts = (value: string) => {
    const query = queryString.all();
    query.sortBy = value;

    queryString.update(query);

    shopAtom.loadProducts({
      sortBy: value,
      page: 1, // Reset page to 1 when sorting by new sorting option
    });
  };

  return (
    <div className="center-y gap-x-5">
      <p>{trans("sortBy")}</p>
      <Select
        triggerValue="mostPopular"
        options={sortByOptions}
        className="w-[250px] border border-gray-150"
        itemClassName="hover:bg-sky-550 hover:text-white duration-200"
        onValueChange={(value: string) => handleSortProducts(value)}
      />
    </div>
  );
}