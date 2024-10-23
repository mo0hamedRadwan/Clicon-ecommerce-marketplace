import { Link } from "@mongez/react-router";
import { Banner } from "apps/front-office/design-system/types";
import URLS from "apps/front-office/utils/urls";

type BannersPropsType = {
  banners: Banner[];
};

export default function Banners({ banners }: BannersPropsType) {
  return (
    <div className="py-5 sm:py-10 container hidden sm:center-y flex-wrap lg:flex-nowrap gap-5">
      {/* <MediumBanner product={product1} varient="primary" center />
      <MediumBanner product={product2} varient="secondary" showPrice /> */}
      {banners.map(banner => (
        <Link to={URLS.shop.root} key={banner.id} className="flex-grow">
          <img
            src={banner.image.url}
            alt="Product Banner"
            className="w-full h-full"
          />
        </Link>
      ))}
    </div>
  );
}
