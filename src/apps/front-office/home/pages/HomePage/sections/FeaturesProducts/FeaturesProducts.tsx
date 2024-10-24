import { trans } from "@mongez/localization";
import { Category } from "apps/front-office/design-system/types";
import { isRTL } from "apps/front-office/utils/helpers";
import CategoryTabs from "components/CategoryTabs/CategoryTabs";
import LinkAsButton from "components/ui/LinkAsButton";
import { homeImages } from "shared/data/images";

type FeaturesProductsPropsType = {
  title: string;
  categories: Category[];
};

export default function FeaturesProducts({
  title = "Featured Products",
  categories,
}: FeaturesProductsPropsType) {
  return (
    <div className="py-10 container">
      <div className="w-full flex items-start gap-x-5">
        {/* Banner */}
        <div className="hidden lg:flex flex-col gap-y-5 justify-between min-w-[310px] min-h-[744px] bg-amber-250 text-center">
          <div className="pt-5 px-5 bg-amber-250">
            <h2 className="mt-4 mb-2 text-red-550 text-sm font-semibold">
              {`${trans("computer")} & ${trans("accessories")}`.toUpperCase()}
            </h2>
            <h3 className="text-4xl font-semibold">{`32% ${trans("discount")}`}</h3>
            <p className="mt-5">{`${trans("for")} ${trans("all")} ${trans("electronicsProducts")}`}</p>
            <p className="my-5 center-y gap-x-2 text-lg">
              <span className="text-sm">{`${trans("offers")} ${trans("endIn")}`}</span>
              <span className="p-2 bg-white font-semibold">{`${trans("endsOf")} ${"chirstmas"}`}</span>
            </p>
            <LinkAsButton
              size="lg"
              href="/category/:id"
              endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
              className="inline-block"
              iconClassName="ml-3 text-xl">{`${trans("shop")} ${trans("now")}`}</LinkAsButton>
          </div>
          <div className="">
            <img src={homeImages.productsImage} alt="banner image" />
          </div>
        </div>

        <CategoryTabs heading={title} categories={categories} />
      </div>
    </div>
  );
}
