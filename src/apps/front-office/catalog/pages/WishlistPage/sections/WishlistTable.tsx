import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { cartAtom } from "apps/front-office/design-system/atoms/cartAtom";
import { wishlistAtom } from "apps/front-office/design-system/atoms/wishlistAtom";
import Button from "apps/front-office/design-system/components/form/Button";
import { Product } from "apps/front-office/design-system/types";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";

type WishlistTablePropsType = {
  products: Product[];
  size?: string;
};

export default function WishlistTable({
  products,
  size = "page",
}: WishlistTablePropsType) {
  return (
    <table className="w-full border border-gray-150 rounded">
      <caption
        className={`text-2xl font-semibold ${isRTL() ? "text-right" : "text-left"} p-5 border border-gray-150`}>
        {trans("wishlist")}
      </caption>
      <thead className={`bg-gray-150 ${isRTL() ? "text-right" : "text-left"}`}>
        <tr className="">
          <th className={`w-[420px] ${size === "page" ? "" : ""}`}>
            {trans("products").toUpperCase()}
          </th>
          <th className="min-w-[100px] 2xl:min-w-[200px]">
            {trans("price").toUpperCase()}
          </th>
          <th className="min-w-[150px]">
            {trans("stockStatus").toUpperCase()}
          </th>
          <th className="w-[320px]">{trans("actions").toUpperCase()}</th>
        </tr>
      </thead>

      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>
              <Link
                to={URLS.product.view(product)}
                className="center-y gap-x-5">
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
                  <span className="line-through text-gray-450">
                    ${product.price}
                  </span>
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
                  endIcon="bx-cart"
                  iconClassName="text-2xl"
                  className="text-sm"
                  disabled={!product.inStock}
                  onClick={() => cartAtom.addToCart(product.id)}>
                  {`${trans("add")} ${trans("to")} ${trans("cart")}`.toUpperCase()}
                </Button>
                <Button
                  className="text-lg p-2 bg-white text-gray-550 border border-gray-450 rounded-full hover:text-red-550 hover:border-red-550 hover:bg-white"
                  onClick={() => wishlistAtom.removeFromWishlist(product.id)}>
                  <i className="bx bx-x"></i>
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
