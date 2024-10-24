import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import ShoppingCartList from "apps/front-office/catalog/pages/CartPage/sections/ShoppingCartList";
import ShoppingCartTable from "apps/front-office/catalog/pages/CartPage/sections/ShoppingCartTable";
import { applyCoupon } from "apps/front-office/catalog/services/catalog-service";
import { cartAtom } from "apps/front-office/design-system/atoms/cartAtom";
import URLS from "apps/front-office/utils/urls";
import Button from "components/form/Button";
import TextInput from "components/form/TextInput";
import Loader1 from "components/loaders/Loader1";
import LinkAsButton from "components/ui/LinkAsButton";

type CartDetailsSectionPropsType = {
  size?: "page" | "tab";
};

export default function CartDetailsSection({
  size = "page",
}: CartDetailsSectionPropsType) {
  const { cart, loading } = cartAtom.useValue();

  const handleApplyCoupon = ({ values }) => {
    applyCoupon(values.coupon)
      .then(response => {
        console.log(response.data);
        cartAtom.setCart(response.data.cart);
      })
      .catch(error => console.error(error));
  };

  if (cart.items.length === 0 && !loading) {
    return (
      <div className="h-60 flex flex-col gap-16">
        <h2 className="text-2xl font-medium">{trans("cart")}</h2>
        <div className="flex flex-col items-center gap-16">
          <p className="text-center">{trans("yourCartIsEmpty")}</p>
          <LinkAsButton href={URLS.shop.root}>
            {trans("continueShopping")}
          </LinkAsButton>
        </div>
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <div className="w-full h-[500px] flex justify-center">
          <Loader1 />
        </div>
      ) : (
        <div
          className={`flex flex-wrap justify-center gap-5 ${
            size === "page" ? "w-full 2xl:flex-nowrap" : ""
          }`}>
          <div
            className={`flex-grow ${size === "page" ? "2xl:flex-grow-0" : "lg:flex-grow-0"}`}>
            <div className="hidden xl:block">
              <ShoppingCartTable items={cart.items} size={size} />
            </div>
            <div className="block xl:hidden">
              <ShoppingCartList items={cart.items} />
            </div>
          </div>
          <div
            className={`w-full max-w-[400px] lg:max-w-full  flex flex-col lg:flex-row ${
              size === "page" ? "2xl:w-[400px] 2xl:flex-col" : ""
            } gap-5`}>
            <div className="w-full flex-grow p-5 xl:w-[400px] flex flex-col gap-y-5 border border-gray-150">
              <h3 className="text-lg font-medium">{trans("cartTotals")}</h3>
              <ul className="flex flex-col gap-y-2">
                <li className="space-between">
                  <p>{trans("subtotal")}</p>
                  <p className="font-semibold">
                    ${cart.totals.subtotal.toFixed(2)}
                  </p>
                </li>
                <li className="space-between">
                  <p>{trans("shipping")}</p>
                  <p className="font-semibold">
                    ${cart.totals.shippingFees.toFixed(2)}
                  </p>
                </li>
                <li className="space-between">
                  <p>{trans("discount")}</p>
                  <p className="font-semibold">
                    ${cart.totals.discount.toFixed(2)}
                  </p>
                </li>
                <li className="space-between">
                  <p>{trans("tax")}</p>
                  <p className="font-semibold">${cart.totals.tax.toFixed(2)}</p>
                </li>
                <li className="space-between">
                  <p>{trans("coupon")}</p>
                  <p className="font-semibold">
                    ${cart.totals.coupon.toFixed(2)}
                  </p>
                </li>
              </ul>
              <div className="w-full h-[1px] bg-gray-150"></div>
              <div className="space-between text-lg">
                <span>{trans("total")}</span>
                <div className="font-semibold">
                  <span>$</span>
                  <span>
                    {(
                      cart.totals.subtotal +
                      cart.totals.shippingFees +
                      cart.totals.tax -
                      cart.totals.coupon
                    ).toFixed(2)}
                  </span>
                  <span className="mx-1">USD</span>
                </div>
              </div>
              <LinkAsButton
                href={URLS.checkout.root}
                disabled={cart.items.length === 0}>
                {trans("processToCheckout")}
              </LinkAsButton>
            </div>
            <div className="w-full lg:max-h-[220px] lg:w-[400px] border border-gray-150">
              <h3 className="p-5 text-lg font-medium border-b border-gray-150">
                {trans("couponCode")}
              </h3>
              <Form
                onSubmit={handleApplyCoupon}
                className="p-5 w-full flex flex-col items-start gap-y-5">
                <TextInput
                  name="coupon"
                  placeholder={trans("coupon")}
                  className="block"
                />
                <Button
                  type="submit"
                  disabled={Boolean(cart.totals.coupon !== 0)}
                  className="bg-sky-550 hover:bg-sky-600"
                  onClick={() => console.log("apply coupon")}>
                  {trans("applyCoupon")}
                </Button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
