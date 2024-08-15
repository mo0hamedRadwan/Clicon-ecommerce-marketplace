import { RealProduct } from "shared/data/testData";
import MediumBanner from "./MediumBanner";

export default function Banners() {
  return (
    <div className="py-10 container center-y flex-wrap lg:flex-nowrap gap-5">
      <MediumBanner product={RealProduct} varient="primary" />
      <MediumBanner product={RealProduct} varient="secondary" showDiscount />
    </div>
  );
}
