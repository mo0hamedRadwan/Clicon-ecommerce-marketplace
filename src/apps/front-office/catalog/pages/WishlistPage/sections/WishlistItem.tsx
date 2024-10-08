import { trans } from "@mongez/localization";
import { cartAtom } from "apps/front-office/design-system/atoms/cartAtom";
import { wishlistAtom } from "apps/front-office/design-system/atoms/wishlistAtom";
import Button from "apps/front-office/design-system/components/form/Button";
import Loader2 from "apps/front-office/design-system/components/loaders/Loader2";
import { Product } from "apps/front-office/design-system/types";
import { useState } from "react";

type WishlistItemPropsType = {
  product: Product;
};

export default function WishlistItem({ product }: WishlistItemPropsType) {
  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingWishlist, setLoadingWishlist] = useState(false);

  return (
    <li
      key={product.id}
      className="p-5 w-full sm:w-[450px] flex flex-col gap-y-5 border border-gray-300">
      <div className="flex items-center gap-3">
        <img
          className="w-20 h-20 rounded-full"
          src={product.images[0].url}
          alt={product.name}
        />
        <div className="flex flex-col gap-y-3">
          <h3 className="text-base font-semibold line-clamp-3">
            {product.name}
          </h3>
          <p className="text-sm center-y gap-x-2">
            {product.price && (
              <span className="text-gray-450 line-through">
                ${product.price}
              </span>
            )}
            <span>${product.salePrice}</span>
          </p>
        </div>
      </div>
      <div className="space-between-center gap-x-5">
        <Button
          size="sm"
          endIcon={!loadingCart ? "bx-cart" : ""}
          iconClassName="text-lg sm:text-2xl"
          className="md:text-sm hover:bg-gray-450"
          disabled={loadingCart}
          onClick={() => cartAtom.addToCart(setLoadingCart, product.id)}>
          {loadingCart ? (
            <Loader2 />
          ) : (
            <span>
              {`${trans("add")} ${trans("to")} ${trans("cart")}`.toUpperCase()}
            </span>
          )}
        </Button>
        <Button
          size="sm"
          endIcon="bx-trash"
          iconClassName="text-lg sm:text-2xl"
          className="md:text-sm bg-red-550 hover:bg-gray-450"
          disabled={loadingWishlist}
          onClick={() =>
            wishlistAtom.removeFromWishlist(setLoadingWishlist, product)
          }>
          {loadingWishlist ? (
            <Loader2 />
          ) : (
            <span>
              {`${trans("remove")} ${trans("from")} ${trans("wishlist")}
              `.toUpperCase()}
            </span>
          )}
        </Button>
      </div>
    </li>
  );
}
