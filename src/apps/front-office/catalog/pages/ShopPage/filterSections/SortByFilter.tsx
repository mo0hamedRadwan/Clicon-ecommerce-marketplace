import { trans } from "@mongez/localization";
import Select from "apps/front-office/design-system/components/form/Select";
import { SelectOption } from "apps/front-office/design-system/types";

export const sortByOptions: SelectOption[] = [
  { label: "mostPopular", value: "mostPopular" },
  { label: "topRated", value: "topRated" },
  { label: "newest", value: "newest" },
  { label: "lowPrice2highPrice", value: "lowPrice2highPrice" },
  { label: "highPrice2lowPrice", value: "highPrice2lowPrice" },
];

export default function SortByFilter() {
  return (
    <div className="center-y gap-x-5">
      <p>{trans("sortBy")}</p>
      <Select
        triggerValue="mostPopular"
        options={sortByOptions}
        className="w-[200px] border border-gray-150"
        itemClassName="hover:bg-sky-550 hover:text-white duration-200"
      />
    </div>
  );
}
