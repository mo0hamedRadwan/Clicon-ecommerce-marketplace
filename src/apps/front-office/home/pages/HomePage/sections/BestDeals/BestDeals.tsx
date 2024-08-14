import { trans } from "@mongez/localization";
import LinkAsButton from "apps/front-office/design-system/components/ui/LinkAsButton";
import { DealsProductType } from "apps/front-office/design-system/types";
import URLS from "apps/front-office/utils/urls";
import Product from "components/ui/Product";
import BestDealsGrid from "./BestDealsGrid";
import CountDownComponent from "./CountDownComponent";

type BestDealsPropsType = {
  bestDeals: DealsProductType;
};

export default function BestDeals({ bestDeals }: BestDealsPropsType) {
  if (bestDeals.products.length === 0) {
    return;
  }
  return (
    <div className="py-10 container">
      <div className="py-5 w-full space-between items-end md:items-center gap-x-5">
        <div className="flex flex-col md:flex-row gap-x-8 gap-y-3">
          <h2 className="text-3xl font-semibold">{`${trans("best")} ${trans("deals")}`}</h2>
          <CountDownComponent date={bestDeals.deadline} />
        </div>
        <LinkAsButton
          variant="text"
          href={URLS.deals}
          className="p-0 text-sky-550 hover:bg-sky-200">{`${trans("browse")} ${trans("all")} ${trans("products")}`}</LinkAsButton>
      </div>

      <ul className="flex">
        <li className="hidden lg:block">
          <Product largeProduct showRating product={bestDeals.products[0]} />
        </li>
        <li className="flex-grow">
          <BestDealsGrid products={bestDeals.products.slice(1, 9)} />
        </li>
      </ul>
    </div>
  );
}
