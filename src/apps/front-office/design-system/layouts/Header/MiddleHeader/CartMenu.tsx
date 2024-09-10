import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { cartAtom } from "apps/front-office/design-system/atoms/cartAtom";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import LinkAsButton from "components/ui/LinkAsButton";
import { useEffect } from "react";

export default function CartMenu() {
  const { loading, cart } = cartAtom.useValue();

  useEffect(() => {
    cartAtom.loadCartItems();
  }, []);

  return (
    <div
      className={`hidden xs:group-hover:block z-20 absolute top-[50px] ${isRTL() ? "left-0" : "right-0"} w-[300px] p-4 bg-white text-black text-base rounded shadow-2`}>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <h3 className="text-xl font-semibold center-y gap-x-1">
            <span>{trans("shoppingCart")}</span>
            <span>
              ({`${cart.items.length < 9 ? "0" : ""}${cart.items.length}`})
            </span>
          </h3>
          <div className="mt-3 w-full h-[1px] bg-gray-300"></div>
          <ul className="py-3 flex flex-col gap-y-3">
            {cart.items.map(item => (
              <li key={item.product.id} className="center-y">
                <Link
                  to={URLS.product.view(item.product)}
                  className="flex-grow h-[60px] center-y gap-x-5">
                  <div className="min-w-[60px] h-full">
                    <img
                      src={item.product.images[0].url}
                      alt={item.product.name}
                      className="w-full h-full object-cover rounded-md border border-gray-200"
                    />
                  </div>
                  <div className="h-full flex-grow flex flex-col justify-between">
                    <p className="text-sm line-clamp-2">{item.product.name}</p>
                    <p className="text-sm font-semibold">
                      <span>{item.quantity}</span>
                      <span className="mx-1">x</span>
                      <span className="text-sky-500 font-bold">
                        ${item.product.salePrice}
                      </span>
                    </p>
                  </div>
                </Link>
                {/* onClick Delete Product from cart */}
                <button
                  className="text-gray"
                  onClick={() => cartAtom.removeFromCart(item.id)}>
                  x
                </button>
              </li>
            ))}
          </ul>
          <div className="mb-3 w-full h-[1px] bg-gray-300"></div>
          <div className="space-between-center text-lg">
            <span>{trans("subtotal")}:</span>
            <span className="font-semibold">
              ${cartAtom.get("cart").subtotal}
            </span>
          </div>
        </>
      )}
      <div className="mt-2 flex flex-col gap-y-2">
        <LinkAsButton variant="contained" href={URLS.checkout.root}>
          {`${trans("checkout")} ${trans("now")}`.toUpperCase()}
        </LinkAsButton>
        <LinkAsButton variant="outlined" href={URLS.cart}>
          {`${trans("view")} ${trans("cart")}`.toUpperCase()}
        </LinkAsButton>
      </div>
    </div>
  );
}
