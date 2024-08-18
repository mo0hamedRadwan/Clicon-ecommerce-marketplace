import MediumBanner from "components/MediumBanner";
import { product13, product14 } from "shared/data/testData2";

export default function Banners() {
  return (
    <div className="py-5 sm:py-10 container hidden sm:center-y flex-wrap lg:flex-nowrap gap-5">
      <MediumBanner product={product13} varient="primary" center />
      <MediumBanner product={product14} varient="secondary" showPrice />
    </div>
  );
}
