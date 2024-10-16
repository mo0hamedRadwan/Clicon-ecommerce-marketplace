import { isRTL } from "apps/front-office/utils/helpers";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import { Product } from "../types";
import ProductDetails from "./ProductDetails/ProductDetails";

type QuickViewPropsType = {
  product: Product;
  setCloseViewProduct: (value: boolean) => void;
};

export default function QuickView({
  product,
  setCloseViewProduct,
}: QuickViewPropsType) {
  return createPortal(
    <div className="z-50 fixed top-0 bottom-0 left-0 right-0 flex-center bg-[rgba(0,0,0,0.8)]">
      <div className="relative">
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
    </div>,
    document.getElementById("quickView")!,
  );
}
