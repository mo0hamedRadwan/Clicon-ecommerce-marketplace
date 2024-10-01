import { trans } from "@mongez/localization";
import CategoryTabs from "apps/front-office/design-system/components/CategoryTabs/CategoryTabs";
import { Category, Product } from "apps/front-office/design-system/types";
import { isRTL } from "apps/front-office/utils/helpers";
import Banner from "components/Banner";
import Badge from "components/ui/Badge";
import LinkAsButton from "components/ui/LinkAsButton";
import { productsImage } from "shared/data/images2";

const product3: Product = {
  id: "3",
  isActive: true,
  name: "Xiaomi FlipBuds Pro",
  shortDescription:
    "Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.",
  salePrice: 299,
  images: [
    {
      url: productsImage.product3,
    },
  ],
};

type ComputerAccessoriesPropsType = {
  title: string;
  categories: Category[];
};

export default function ComputerAccessories({
  title = "Computer Accessories",
  categories,
}: ComputerAccessoriesPropsType) {
  return (
    <div className="py-10 container">
      <div className="center-y gap-x-5">
        <CategoryTabs heading={title} categories={categories} />
        <div className="hidden lg:flex flex-col gap-y-5">
          <Banner product={product3} showTitle showDescription />
          <div className="p-10 bg-cyan-950 text-white flex flex-col items-center gap-y-5 rounded">
            <Badge
              title="summerSales"
              className="py-2 bg-cyan-850 text-white"
            />
            <h3 className="-mt-2 text-3xl">{`37% ${trans("discount")}`}</h3>
            <p className="">
              <span>{`${trans("only")} ${trans("for")} `}</span>
              <span className="text-yellow-450 text-base">
                {trans("smartPhone")}{" "}
              </span>
              <span>{trans("product")}</span>
            </p>
            <LinkAsButton
              size="lg"
              href="/category/:id"
              endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
              iconClassName="ml-3 text-xl">{`${trans("shop")} ${trans("now")}`}</LinkAsButton>
          </div>
        </div>
      </div>
    </div>
  );
}
