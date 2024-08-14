import { isRTL } from "apps/front-office/utils/helpers";
import { twMerge } from "tailwind-merge";
import { ProductType } from "../types";
import ProductDetails from "./ProductDetails/ProductDetails";

type QuickViewPropsType = {
  product: ProductType;
  setCloseViewProduct: (value: boolean) => void;
};

export default function QuickView({
  product,
  setCloseViewProduct,
}: QuickViewPropsType) {
  return (
    <div className="relative border-2 border-blue-500 ">
      <button
        onClick={() => setCloseViewProduct(false)}
        className={twMerge(
          "absolute top-2 w-12 h-12 flex-center rounded-full bg-gray-850 text-white font-light text-3xl cursor-pointer",
          isRTL() ? "left-2 2xl:-left-16" : "right-2 2xl:-right-16",
        )}>
        x
      </button>
      <ProductDetails product={product} />
    </div>
  );
}
