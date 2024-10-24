import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { cartAtom } from "apps/front-office/design-system/atoms/cartAtom";
import { wishlistAtom } from "apps/front-office/design-system/atoms/wishlistAtom";
import { Product } from "apps/front-office/design-system/types";
import URLS from "apps/front-office/utils/urls";
import Button from "components/form/Button";
import Loader2 from "components/loaders/Loader2";
import { useState } from "react";

type WishlistTableRowPropsType = {
  product: Product;
};

export default function WishlistTableRow({
  product,
}: WishlistTableRowPropsType) {
  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingWishlist, setLoadingWishlist] = useState(false);

  return (
    <tr>
      <td>
        <Link to={URLS.product.view(product)} className="center-y gap-x-5">
          <img
            src={product.images[0].url}
            alt={product.name}
            className="w-20 h-20 object-cover rounded-md border border-gray-200"
          />
          <p className="text-gray-550 text-sm line-clamp-3 hover:text-zinc-950 duration-150">
            {product.name}
          </p>
        </Link>
      </td>
      <td>
        <div className="center-y gap-x-2 text-lg font-semibold">
          {product.price && (
            <span className="line-through text-gray-450">${product.price}</span>
          )}
          <span>${product.salePrice}</span>
        </div>
      </td>
      <td>
        {product.inStock ? (
          <span className="text-green-500 font-semibold">
            {trans("inStock").toUpperCase()}
          </span>
        ) : (
          <span className="text-red-500 font-semibold">
            {trans("outOfStock").toUpperCase()}
          </span>
        )}
      </td>
      <td>
        <div className="center-y gap-x-5">
          <Button
            endIcon={!loadingCart ? "bx-cart" : ""}
            iconClassName="text-2xl"
            className="text-sm"
            disabled={!product.inStock}
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
            className="text-lg p-2 bg-white text-gray-550 border border-gray-450 rounded-full hover:text-red-550 hover:border-red-550 hover:bg-white"
            disabled={loadingWishlist}
            onClick={() =>
              wishlistAtom.removeFromWishlist(setLoadingWishlist, product)
            }>
            <i className="bx bx-x"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
}
