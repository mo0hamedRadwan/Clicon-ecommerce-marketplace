import { trans } from "@mongez/localization";
import { DealsProductType } from "apps/front-office/design-system/types";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import ProductsGrid from "components/ProductsGrid";
import LinkAsButton from "components/ui/LinkAsButton";
import Product from "components/ui/Product";
import {
  product10,
  product11,
  product12,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
} from "shared/data/testData2";
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
          endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
          className="p-0 text-sky-550 hover:bg-sky-200">{`${trans("browse")} ${trans("all")} ${trans("products")}`}</LinkAsButton>
      </div>

      <div className="flex">
        <div className="hidden lg:block min-w-[330px]">
          <Product largeProduct showRating product={product4} />
        </div>
        <div className="flex-grow">
          <ProductsGrid
            products={[
              product5,
              product6,
              product7,
              product8,
              product9,
              product10,
              product11,
              product12,
            ]}
            productClassName="lg:border-l-0"
          />
        </div>
      </div>
    </div>
  );
}
