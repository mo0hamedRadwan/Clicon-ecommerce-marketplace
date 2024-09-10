import { trans } from "@mongez/localization";
import { cartAtom } from "apps/front-office/design-system/atoms/cartAtom";
import Button from "components/form/Button";
import TextInput from "components/form/TextInput";
import { useEffect } from "react";
import ShoppingCartList from "./sections/ShoppingCartList";
import ShoppingCartTable from "./sections/ShoppingCartTable";

export default function CartPage() {
  // const { loading, loadingItem, cart } = cartAtom.useValue();
  const { cart } = cartAtom.useValue();

  useEffect(() => {
    cartAtom.loadCartItems();
  }, []);

  return (
    <div className="py-20 container">
      <div className="flex flex-wrap 2xl:flex-nowrap justify-center gap-5">
        <div className="flex-grow 2xl:flex-grow-0">
          <div className="hidden lg:block">
            <ShoppingCartTable items={cart.items} />
          </div>
          <div className="block lg:hidden">
            <ShoppingCartList items={cart.items} />
          </div>
        </div>
        <div className="w-full max-w-[400px] lg:max-w-full 2xl:w-[400px] flex flex-col lg:flex-row 2xl:flex-col gap-5">
          <div className="w-full flex-grow p-5 xl:w-[400px] flex flex-col gap-y-5 border border-gray-150">
            <h3 className="text-lg font-medium">{trans("cartTotals")}</h3>
            <ul className="flex flex-col gap-y-2">
              <li className="space-between">
                <p>{trans("subtotal")}</p>
                <p className="font-semibold">${cart.subtotal}</p>
              </li>
              <li className="space-between">
                <p>{trans("shipping")}</p>
                <p className="font-semibold">$200</p>
              </li>
              <li className="space-between">
                <p>{trans("discount")}</p>
                <p className="font-semibold">$200</p>
              </li>
              <li className="space-between">
                <p>{trans("tax")}</p>
                <p className="font-semibold">$200</p>
              </li>
            </ul>
            <div className="w-full h-[1px] bg-gray-150"></div>
            <p className="space-between text-lg">
              <span>{trans("total")}</span>
              <span className="font-semibold">$1000 USD</span>
            </p>
            <Button onClick={() => console.log("procss to checkout")}>
              {trans("processToCheckout")}
            </Button>
          </div>
          <div className="w-full lg:max-h-[220px] lg:w-[400px] border border-gray-150">
            <h3 className="p-5 text-lg font-medium border-b border-gray-150">
              {trans("couponCode")}
            </h3>
            <div className="p-5 w-full flex flex-col items-start gap-y-5">
              <TextInput placeholder={trans("coupon")} className="block" />
              <Button
                className="bg-sky-550 hover:bg-sky-600"
                onClick={() => console.log("apply coupon")}>
                {trans("applyCoupon")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
