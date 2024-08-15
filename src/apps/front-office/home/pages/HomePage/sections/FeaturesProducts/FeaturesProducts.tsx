import { trans } from "@mongez/localization";
import LinkAsButton from "apps/front-office/design-system/components/ui/LinkAsButton";
import { isRTL } from "apps/front-office/utils/helpers";
import TabsWithBanner from "components/TabsWithBanner";
import { homeImages } from "shared/data/images";

export default function FeaturesProducts() {
  return (
    <TabsWithBanner heading="Feature Products" direction="left">
      {/* Banner */}
      <div className="hidden lg:flex flex-col gap-y-5 justify-between content-between min-w-[310px] bg-amber-250 text-center">
        <div className="pt-5 px-5 bg-amber-250">
          <h2 className="mt-3 text-red-550 text-base">
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
        <div>
          <img src={homeImages.productsImage} alt="" />
        </div>
      </div>
    </TabsWithBanner>
  );
}
