import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import Button from "apps/front-office/design-system/components/form/Button";
import { isRTL } from "apps/front-office/utils/helpers";
import { products } from "shared/data/testData";

export default function WishlistTable() {
  return (
    <table className="w-full border border-gray-150 rounded">
      <caption
        className={`text-2xl font-semibold ${isRTL() ? "text-right" : "text-left"} p-5 border border-gray-150`}>
        {trans("wishlist")}
      </caption>
      <thead className={`bg-gray-150 ${isRTL() ? "text-right" : "text-left"}`}>
        <tr className="">
          <th className="w-[420px] xl:min-w-[520px]">
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

      {products.map(product => (
        <tr key={product.id}>
          <td>
            <Link to={"/product/:id"} className="center-y gap-x-5">
              <img
                src={product.imageUrl}
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
              {product.oldPrice && (
                <span className="line-through text-gray-450">
                  ${product.oldPrice}
                </span>
              )}
              <span>${product.price}</span>
            </div>
          </td>
          <td>
            {product.stockStatus ? (
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
                className="text-sm hover:bg-gray-450"
                onClick={() => console.log("add product to cart")}>
                {`${trans("add")} ${trans("to")} ${trans("cart")}`.toUpperCase()}
              </Button>
              <Button
                className="text-lg p-2 bg-white text-gray-550 border border-gray-450 rounded-full hover:text-red-550 hover:border-red-550 hover:bg-white"
                onClick={() => console.log("remove product from wishlist")}>
                <i className="bx bx-x"></i>
              </Button>
            </div>
          </td>
        </tr>
      ))}
    </table>
  );
}