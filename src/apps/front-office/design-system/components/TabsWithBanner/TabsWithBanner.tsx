import { trans } from "@mongez/localization";
import LinkAsButton from "apps/front-office/design-system/components/ui/LinkAsButton";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import { categories } from "shared/data/testData";
import {
  product10,
  product11,
  product12,
  product5,
  product6,
  product7,
  product8,
  product9,
} from "shared/data/testData2";
import { twMerge } from "tailwind-merge";
import ProductsGrid from "../ProductsGrid";

type BestDealsPropsType = {
  heading: string;
  direction?: "left" | "right";
  children: React.ReactNode;
};

export default function TabsWithBanner({
  heading,
  direction = "left",
  children,
}: BestDealsPropsType) {
  return (
    <div
      className={twMerge(
        "py-10 container space-between gap-5",
        direction === "right" ? "flex-row-reverse" : "",
      )}>
      {children}
      <div className="flex-grow flex flex-col gap-y-5">
        <div className="space-between flex-wrap gap-5">
          <h2 className="text-2xl font-semibold">{heading}</h2>
          <div className="center-y gap-x-3">
            <ul className="hidden sm:center-y gap-x-2">
              {categories.slice(0, 4).map((category, index) => (
                <li key={index} className="text-sm">
                  {category.name}
                </li>
              ))}
            </ul>
            <LinkAsButton
              variant="text"
              href={URLS.deals}
              endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
              className="p-0 text-orange-450">{`${trans("browse")} ${trans("all")} ${trans("products")}`}</LinkAsButton>
          </div>
        </div>

        <ProductsGrid
          products={[
            product12,
            product11,
            product10,
            product5,
            product6,
            product7,
            product8,
            product9,
          ]}
          className="gap-5 lg:gap-5"
          showRating
        />
      </div>
    </div>
  );
}
