import { trans } from "@mongez/localization";
import Button from "apps/front-office/design-system/components/form/Button";
import { isRTL } from "apps/front-office/utils/helpers";
import BillingForm from "./sections/BillingForm";

export default function CheckoutPage() {
  return (
    <div className="py-20 container">
      <div className="flex flex-col-reverse 2xl:flex-row flex-wrap 2xl:flex-nowrap justify-center gap-5">
        <div className="flex-grow 2xl:flex-grow-0">
          <div className="w-full lg:min-w-[1030px]">
            <BillingForm />
          </div>
        </div>
        <div className="w-full lg:max-w-full 2xl:w-[400px]">
          <div className="w-full p-5 2xl:w-[400px] flex flex-col gap-y-5 border border-gray-150">
            <h3 className="text-lg font-medium">{trans("orderSummary")}</h3>
            <ul className="flex flex-col gap-y-2">
              <li className="space-between">
                <p>{trans("subtotal")}</p>
                <p className="font-semibold">$200</p>
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
            <Button
              endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
              onClick={() => console.log("procss to checkout")}>
              {trans("placeOrder")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
