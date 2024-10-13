import { trans } from "@mongez/localization";
import ProductCard from "apps/front-office/design-system/components/ui/ProductCard";
import { Product } from "apps/front-office/design-system/types";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import ProductsGrid from "components/ProductsGrid";
import LinkAsButton from "components/ui/LinkAsButton";
import CountDownComponent from "./CountDownComponent";

type BestDealsPropsType = {
  products: Product[];
  deadline?: Date;
};

export default function BestDeals({
  products,
  deadline = new Date(2024, 10, 20),
}: BestDealsPropsType) {
  return (
    <div className="py-5 sm:py-10 container">
      <div className="py-5 w-full space-between items-end md:items-center flex-wrap sm:flex-nowrap gap-3">
        <div className="flex flex-col md:flex-row gap-x-3 sm:gap-x-8 gap-y-3">
          <h2 className="text-3xl font-semibold">{`${trans("best")} ${trans("deals")}`}</h2>
          <CountDownComponent date={deadline} />
        </div>
        <LinkAsButton
          variant="text"
          href={URLS.deals}
          endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
          className="p-0 text-sky-550 hover:bg-sky-200">{`${trans("browse")} ${trans("all")} ${trans("products")}`}</LinkAsButton>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-y-5">
        <div className="flex-grow min-w-[340px]">
          <ProductCard largeProduct showRating product={products[0]} />
        </div>
        <div className="flex-grow">
          <ProductsGrid
            products={products.slice(1, 9)}
            productClassName="lg:border-l-0"
          />
        </div>
      </div>
    </div>
  );
}
