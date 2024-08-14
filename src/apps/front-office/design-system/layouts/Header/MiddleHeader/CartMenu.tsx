import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import LinkAsButton from "components/ui/LinkAsButton";
import { cartProducts } from "shared/data/testData";

export default function CartMenu() {
  return (
    <div
      className={`hidden xs:group-hover:block z-20 absolute top-[50px] ${isRTL() ? "left-0" : "right-0"} w-[300px] p-4 bg-white text-black text-base rounded shadow-2`}>
      <h3 className="text-xl font-semibold center-y gap-x-1">
        <span>{trans("shoppingCart")}</span>
        <span>(02)</span>
      </h3>
      <div className="mt-3 w-full h-[1px] bg-gray-300"></div>
      <ul className="py-3 flex flex-col gap-y-3">
        {cartProducts.map(product => (
          <li key={product.id} className="center-y">
            <Link
              to={"/productId"}
              className="flex-grow h-[60px] center-y gap-x-5">
              <div className="w-[60px] h-full">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-md border border-gray-200"
                />
              </div>
              <div className="h-full flex-grow flex flex-col justify-between">
                <p>{product.name}</p>
                <p className="text-sm font-semibold">
                  <span>{product.quantity}</span>
                  <span className="mx-1">x</span>
                  <span className="text-sky-500 font-bold">
                    ${product.price}
                  </span>
                </p>
              </div>
            </Link>
            {/* onClick Delete Product from cart */}
            <button className="text-gray">x</button>
          </li>
        ))}
      </ul>
      <div className="mb-3 w-full h-[1px] bg-gray-300"></div>
      <div className="space-between-center text-lg">
        <span>{trans("subTotal")}:</span>
        <span className="font-semibold">${"1080.00"}</span>
      </div>
      <div className="mt-2 flex flex-col gap-y-2">
        <LinkAsButton variant="contained" href={URLS.checkout}>
          {`${trans("checkout")} ${trans("now")}`.toUpperCase()}
        </LinkAsButton>
        <LinkAsButton variant="outlined" href={URLS.cart}>
          {`${trans("view")} ${trans("cart")}`.toUpperCase()}
        </LinkAsButton>
      </div>
    </div>
  );
}
