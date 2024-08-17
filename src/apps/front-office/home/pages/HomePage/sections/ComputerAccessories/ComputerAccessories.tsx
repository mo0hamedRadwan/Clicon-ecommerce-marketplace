import { trans } from "@mongez/localization";
import { isRTL } from "apps/front-office/utils/helpers";
import Banner from "components/Banner";
import TabsWithBanner from "components/TabsWithBanner";
import Badge from "components/ui/Badge";
import LinkAsButton from "components/ui/LinkAsButton";
import { product3 } from "shared/data/testData2";

export default function ComputerAccessories() {
  return (
    <TabsWithBanner heading="Computer Accessories" direction="right">
      {/* Banner */}
      <div className="hidden lg:flex flex-col gap-y-5">
        <Banner product={product3} showTitle showDescription />
        <div className="p-10 bg-cyan-950 text-white flex flex-col items-center gap-y-5 rounded">
          <Badge title="summerSales" className="py-2 bg-cyan-850 text-white" />
          <h3 className="-mt-2 text-3xl">{`37% ${trans("discount")}`}</h3>
          <p className="">
            <span>{`${trans("only")} ${trans("for")} `}</span>
            <span className="text-yellow-450 text-base">
              {trans("smartPhone")}{" "}
            </span>
            <span>{trans("product")}.</span>
          </p>
          <LinkAsButton
            size="lg"
            href="/category/:id"
            endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
            iconClassName="ml-3 text-xl">{`${trans("shop")} ${trans("now")}`}</LinkAsButton>
        </div>
      </div>
    </TabsWithBanner>
  );
}
