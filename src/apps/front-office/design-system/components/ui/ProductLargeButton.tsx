import { trans } from "@mongez/localization";
import { useState } from "react";
import { cartAtom } from "../../atoms/cartAtom";
import { wishlistAtom } from "../../atoms/wishlistAtom";
import { Product } from "../../types";
import Button from "../form/Button";
import Loader2 from "../loaders/Loader2";

type ProductLargeButtonPropsType = {
  product: Product;
  setViewProduct: (value: boolean) => void;
};

export default function ProductLargeButton({
  product,
  setViewProduct,
}: ProductLargeButtonPropsType) {
  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingWishlist, setLoadingWishlist] = useState(false);

  return (
    <div className="flex gap-x-2">
      <Button
        disabled={loadingWishlist}
        onClick={() =>
          wishlistAtom.toggleWishlistProduct(setLoadingWishlist, product)
        }
        className="bg-orange-150 text-black hover:text-white text-2xl p-3">
        {wishlistAtom.productExistsInWishlist(product) ? (
          <i className="bx bxs-heart text-red-500"></i>
        ) : (
          <i className="bx bx-heart"></i>
        )}
      </Button>
      <Button
        disabled={loadingCart}
        onClick={() => cartAtom.addToCart(setLoadingCart, product.id)}
        startIcon={!loadingCart ? "bx-cart" : ""}
        className="flex-grow text-sm p-3"
        iconClassName="text-xl">
        {loadingCart ? (
          <Loader2 />
        ) : (
          <span>
            {`${trans("add")} ${trans("to")} ${trans("cart")}`.toUpperCase()}
          </span>
        )}
      </Button>
      <Button
        onClick={() => setViewProduct(true)}
        className="bg-orange-150 text-black hover:text-white text-2xl p-3">
        <i className="bx bx-show"></i>
      </Button>
    </div>
  );
}
