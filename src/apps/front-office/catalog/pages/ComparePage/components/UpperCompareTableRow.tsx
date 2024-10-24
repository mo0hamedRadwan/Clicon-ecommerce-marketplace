import { trans } from "@mongez/localization";
import { cartAtom } from "apps/front-office/design-system/atoms/cartAtom";
import { compareAtom } from "apps/front-office/design-system/atoms/compareAtom";
import { wishlistAtom } from "apps/front-office/design-system/atoms/wishlistAtom";
import { Product } from "apps/front-office/design-system/types";
import Button from "components/form/Button";
import Loader2 from "components/loaders/Loader2";
import { useState } from "react";

type UpperCompareTableRowPropsType = {
  product: Product;
};

export default function UpperCompareTableRow({
  product,
}: UpperCompareTableRowPropsType) {
  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingWishlist, setLoadingWishlist] = useState(false);
  const [loadingCompare, setLoadingCompare] = useState(false);

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col items-center gap-y-5">
        <button
          disabled={loadingCompare}
          onClick={() =>
            compareAtom.removeProductFromCompare(setLoadingCompare, product)
          }
          className="w-6 h-6 rounded-full border border-gray-150 hover:border-red-500 text-gray-450 hover:text-red-500 duration-200 flex-center">
          x
        </button>
        <img
          src={product.images[0].url}
          alt="product image"
          className="w-40 2xl:w-[270px] h-40 2xl:h-[270px]"
        />
      </div>
      <p className="h-[60px] text-sm xl:text-base font-medium line-clamp-3">
        {product.name}
      </p>
      <div className="center-y gap-x-2">
        <Button
          variant="contained"
          disabled={loadingCart || !product.inStock}
          onClick={() => cartAtom.addToCart(setLoadingCart, product.id)}
          endIcon="bx-cart"
          iconClassName="text-2xl"
          className="w-full md:text-xs xl:text-sm">
          {loadingCart ? (
            <Loader2 />
          ) : (
            <span>
              {`${trans("add")} ${trans("to")} ${trans("cart")}`.toUpperCase()}
            </span>
          )}
        </Button>
        <Button
          variant="outlined"
          onClick={() =>
            wishlistAtom.toggleWishlistProduct(setLoadingWishlist, product)
          }
          className="text-3xl md:text-2xl lg:text-3xl">
          {loadingWishlist ? <Loader2 /> : <i className="bx bx-heart"></i>}
        </Button>
      </div>
    </div>
  );
}
