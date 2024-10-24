import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { Banner, Product } from "apps/front-office/design-system/types";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import Badge from "components/ui/Badge";
import LinkAsButton from "components/ui/LinkAsButton";

type LargeBannerPropsType = {
  product?: Product;
  banner?: Banner;
};

export default function LargeBanner({ product, banner }: LargeBannerPropsType) {
  return (
    <>
      {banner ? (
        <div className="w-full flex justify-center">
          <Link to={URLS.shop.root} className="w-full xl:w-[1550px]">
            <img
              src={banner.image.url}
              alt="large banner"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>
      ) : (
        product && (
          <div className="hidden sm:flex justify-center">
            <div className="xl:px-10 xl:w-[1550px] bg-orange-150">
              <div className="container p-10 lg:py-0 flex items-center lg:justify-between flex-wrap lg:flex-nowrap">
                <div className="w-[450px] flex flex-col justify-center items-start gap-y-5">
                  {product.badge && (
                    <Badge title={product.badge} className="font-light" />
                  )}
                  <h2 className="text-4xl xl:text-5xl font-bold line-clamp-2">
                    {trans("productCategoryName")}
                  </h2>
                  <h3 className="text-xl line-clamp-2">{product?.name}</h3>
                  <LinkAsButton
                    href={URLS.product.view(product)}
                    endIcon={
                      isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"
                    }>
                    {`${trans("shop")} ${trans("now")}`.toUpperCase()}
                  </LinkAsButton>
                </div>
                <div className="relative">
                  <img src={product?.images[0].url} alt="product image" />
                  <p className="absolute top-5 left-5 w-24 h-24 bg-orange-250 rounded-full flex-center text-xl border-4 border-white">
                    ${product.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
