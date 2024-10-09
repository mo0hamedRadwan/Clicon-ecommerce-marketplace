import { trans } from "@mongez/localization";
import { cartAtom } from "apps/front-office/design-system/atoms/cartAtom";
import Loader2 from "apps/front-office/design-system/components/loaders/Loader2";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import LinkAsButton from "components/ui/LinkAsButton";
import CartMenuItem from "./CartMenuItem";

export default function CartMenu() {
  const { loading, cart } = cartAtom.useValue();

  return (
    <div
      className={`hidden xs:group-hover:block z-20 absolute top-[50px] ${isRTL() ? "left-0" : "right-0"} w-[300px] p-4 bg-white text-black text-base rounded shadow-2`}>
      {loading ? (
        <div className="w-full h-[200px]">
          <Loader2 />
        </div>
      ) : (
        <>
          <h3 className="text-xl font-semibold center-y gap-x-1">
            <span>{trans("shoppingCart")}</span>
            <span>
              {/* ({`${cart.items.length < 9 ? "0" : ""}${cart.items.length}`}) */}
            </span>
          </h3>
          <div className="mt-3 w-full h-[1px] bg-gray-300"></div>
          <ul className="py-3 flex flex-col gap-y-3">
            {cart.items.map(item => (
              <CartMenuItem item={item} key={item.id} />
            ))}
          </ul>
          <div className="mb-3 w-full h-[1px] bg-gray-300"></div>
          <div className="space-between-center text-lg">
            <span>{trans("subtotal")}:</span>
            <span className="font-semibold">
              ${cartAtom.get("cart").totals.subtotal}
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
