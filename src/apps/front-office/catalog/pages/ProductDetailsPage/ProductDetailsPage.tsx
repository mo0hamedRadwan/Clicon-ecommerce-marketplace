import ProductDetails from "components/ProductDetails/ProductDetails";
import { RealProduct } from "shared/data/testData";
import ProductInfoTabs from "./sections/ProductInfoTabs";
import RelatedProducts from "./sections/RelatedProducts";

export default function ProductDetailsPage() {
  // get product from url
  return (
    <div className="container py-10 sm:py-20 flex flex-col gap-y-5 sm:gap-y-10">
      <ProductDetails product={RealProduct} />
      <ProductInfoTabs product={RealProduct} />
      <RelatedProducts />
    </div>
  );
}
