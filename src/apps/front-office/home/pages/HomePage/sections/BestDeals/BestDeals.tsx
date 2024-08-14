import { trans } from "@mongez/localization";
import LinkAsButton from "apps/front-office/design-system/components/ui/LinkAsButton";
import { useCountDown } from "apps/front-office/design-system/hooks/use-count-down";
import { DealsProductType } from "apps/front-office/design-system/types";
import URLS from "apps/front-office/utils/urls";
import Product from "components/ui/Product";
import BestDealsGrid from "./BestDealsGrid";

type BestDealsPropsType = {
  bestDeals: DealsProductType;
};

export default function BestDeals({ bestDeals }: BestDealsPropsType) {
  const countDown = useCountDown(bestDeals.deadline);

  if (bestDeals.products.length === 0) {
    return;
  }
  return (
    <div className="py-10 container">
      <div className="py-5 w-full space-between-center gap-x-5">
        <div className="flex items-end gap-x-8">
          <h2 className="text-3xl font-semibold">{`${trans("best")} ${trans("deals")}`}</h2>
          <div className="center-y gap-x-2">
            <p className="">{`${trans("deals")} ${trans("endIn")}`}</p>
            <p className="py-1 px-3 bg-amber-250">
              <span>{countDown.days}d : </span>
              <span>{countDown.hours}h : </span>
              <span>{countDown.minutes}m : </span>
              <span>{countDown.seconds}s</span>
            </p>
          </div>
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
          <BestDealsGrid
            products={bestDeals.products.slice(1, 9)}
            numOfColumns={4}
          />
        </li>
        {/* <li>
          <BestDealsGrid products={bestDeals.products.slice(1, 7)} />
        </li> */}
      </ul>
    </div>
  );
}
