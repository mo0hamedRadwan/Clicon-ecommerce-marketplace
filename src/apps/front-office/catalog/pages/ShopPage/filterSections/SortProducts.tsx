import { trans } from "@mongez/localization";
import { useOnce } from "@mongez/react-hooks";
import { queryString } from "@mongez/react-router";
import { shopAtom } from "apps/front-office/catalog/atoms/shopAtom";
import { SelectOption } from "apps/front-office/design-system/types";
import Select from "components/form/Select";

export const sortByOptions: SelectOption[] = [
  {
    label: "mostViewed",
    value: "mostViewed",
  },
  { label: "topRated", value: "topRated" },
  { label: "newest", value: "newest" },
  {
    label: "lowestPrice",
    value: "lowestPrice",
  },
  {
    label: "highestPrice",
    value: "highestPrice",
  },
];

export default function SortProducts() {
  const handleSortProducts = (value: string) => {
    const query = queryString.all();
    query.orderBy = value;

    queryString.update(query);

    shopAtom.loadProducts({
      orderBy: value,
      page: 1, // Reset page to 1 when sorting by new sorting option
    });
  };

  useOnce(() => {
    const query = queryString.all();
    if (query.orderBy) {
      handleSortProducts(query.orderBy);
    }
  });

  return (
    <div className="center-y gap-x-5">
      <p>{trans("orderBy")}</p>
      <Select
        name="orderBy"
        triggerValue="mostViewed"
        options={sortByOptions}
        className="w-[250px] border border-gray-150"
        itemClassName="hover:bg-sky-550 hover:text-white duration-200"
        onValueChange={(value: string) => handleSortProducts(value)}
      />
    </div>
  );
}
