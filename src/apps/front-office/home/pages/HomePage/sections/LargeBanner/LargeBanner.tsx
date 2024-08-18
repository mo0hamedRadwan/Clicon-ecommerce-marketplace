import { trans } from "@mongez/localization";
import LinkAsButton from "apps/front-office/design-system/components/ui/LinkAsButton";
import { ProductType } from "apps/front-office/design-system/types";
import { isRTL } from "apps/front-office/utils/helpers";
import Badge from "components/ui/Badge";
import { RealProduct } from "shared/data/testData";

type LargeBannerPropsType = {
  product: ProductType;
};

export default function LargeBanner({
  product = RealProduct,
}: LargeBannerPropsType) {
  return (
    <div className="hidden sm:flex justify-center">
      <div className="xl:px-10 xl:w-[1550px] bg-orange-150">
        <div className="container p-10 lg:py-0 flex items-center lg:justify-between flex-wrap lg:flex-nowrap">
          <div className="w-[450px] flex flex-col justify-center items-start gap-y-5">
            {product.badges && (
              <Badge title={product.badges[0]} className="font-light" />
            )}
            <h2 className="text-4xl xl:text-5xl font-bold line-clamp-2">
              {product.category}
            </h2>
            <h3 className="text-xl line-clamp-2">{product.name}</h3>
            <LinkAsButton
              href="/product/:id"
              endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}>
              {`${trans("shop")} ${trans("now")}`.toUpperCase()}
            </LinkAsButton>
          </div>
          <div className="relative">
            <img src={product.imageUrl} alt="" />
            <p className="absolute top-5 left-5 w-24 h-24 bg-orange-250 rounded-full flex-center text-xl border-4 border-white">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
