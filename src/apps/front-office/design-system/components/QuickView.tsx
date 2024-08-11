import { ProductType } from "../types";
import ProductDetails from "./ProductDetails";

type QuickViewPropsType = {
  product: ProductType;
};

export default function QuickView({ product }: QuickViewPropsType) {
  return (
    <div className="bg-white shadow-2">
      <ProductDetails product={product} />
    </div>
  );
}
