import { useState } from "react";
import { cartAtom } from "../../atoms/cartAtom";
import { compareAtom } from "../../atoms/compareAtom";
import { wishlistAtom } from "../../atoms/wishlistAtom";
import { Product } from "../../types";
import Button from "../form/Button";
import CompareIcon from "../icons/CompareIcon";
import Loader2 from "../loaders/Loader2";

type ProductButtonsPropsType = {
  product: Product;
  setViewProductQuick: (value: boolean) => void;
};

const ButtonActionStyle =
  "w-12 h-12 p-0 flex-center rounded-full bg-gray-150 text-black hover:bg-orange-450 hover:text-white text-2xl";

export default function ProductButtons({
  product,
  setViewProductQuick,
}: ProductButtonsPropsType) {
  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingWishlist, setLoadingWishlist] = useState(false);

  return (
    <div className="hidden z-40 absolute top-0 left-0 w-full h-full group-hover:flex-center hover:bg-[rgba(0,0,0,0.2)] duration-200">
      <div className="center-y gap-x-2">
        <Button
          disabled={loadingWishlist}
          onClick={() =>
            wishlistAtom.toggleWishlistProduct(setLoadingWishlist, product)
          }
          className={ButtonActionStyle}>
          {wishlistAtom.productExistsInWishlist(product) ? (
            <i className="bx bxs-heart text-red-500"></i>
          ) : (
            <i className="bx bx-heart"></i>
          )}
        </Button>
        <Button
          disabled={loadingCart}
          onClick={() => cartAtom.addToCart(setLoadingCart, product.id)}
          className={ButtonActionStyle}>
          {loadingCart ? <Loader2 /> : <i className="bx bx-cart"></i>}
        </Button>
        <Button
          onClick={() => compareAtom.toggleCompareProduct(product)}
          className={ButtonActionStyle}>
          <CompareIcon />
        </Button>
        <Button
          onClick={() => setViewProductQuick(true)}
          className={ButtonActionStyle}>
          <i className="bx bx-show"></i>
        </Button>
      </div>
    </div>
  );
}
