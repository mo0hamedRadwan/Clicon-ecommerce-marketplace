import { trans } from "@mongez/localization";
import Banner from "components/Banner";
import TabsWithBanner from "components/TabsWithBanner";
import Badge from "components/ui/Badge";
import LinkAsButton from "components/ui/LinkAsButton";
import { smallBannerProduct1 } from "shared/data/testData";

export default function ComputerAccessories() {
  return (
    <TabsWithBanner heading="Computer Accessories" direction="right">
      {/* Banner */}
      <div className="hidden lg:flex flex-col gap-y-5">
        <Banner product={smallBannerProduct1} showTitle />
        <div className="p-8 bg-cyan-950 text-white flex flex-col gap-y-5 text-center rounded">
          <Badge title="summer sales" className="bg-cyan-850" />
          <h3 className="text-3xl">{`37% ${trans("discount")}`}</h3>
          <p className="">
            <span>{`${trans("only")} ${trans("for")} `}</span>
            <span>{trans("smartPhone")} </span>
            <span>{trans("product")}.</span>
          </p>
          <LinkAsButton
            size="lg"
            href="/category/:id"
            endIcon="bx-right-arrow-alt"
            iconClassName="ml-3 text-xl">{`${trans("show")} ${trans("now")}`}</LinkAsButton>
        </div>
      </div>
    </TabsWithBanner>
  );
}
