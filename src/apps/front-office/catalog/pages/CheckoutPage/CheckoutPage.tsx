// Checkout Steps:
// =================================================================
// 0) get User Addresses
// 1) Set Shipping Method to "standard"
// 2) Set Shipping Address By Selected city
// 3) Set Payment Method "cashOnDelivery"
// 4) Create New Address { name: "", email: "", phoneNumber: "", address: "", city: "CityID"}
// 5) Set Shipping address
// 6) Set Billing address or "useShippingAddressAsBillingAddress" in new checkout
// 7) Create New Checkout { note: "", useShippingAddressAsBillingAddress: true}
// 8) Add Order to Order Atom

import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import Helmet from "@mongez/react-helmet";
import { navigateTo } from "@mongez/react-router";
import { cartAtom } from "apps/front-office/design-system/atoms/cartAtom";
import { ordersAtom } from "apps/front-office/design-system/atoms/ordersAtom";
import Button from "apps/front-office/design-system/components/form/Button";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import toast from "react-hot-toast";
import {
  createAddress,
  createCheckout,
  setShippingAddress,
} from "../../services/catalog-service";
import BillingForm from "./sections/BillingForm";

export default function CheckoutPage() {
  const cart = cartAtom.use("cart");

  const handleBillingForm = ({ values }) => {
    console.log(values);
    const addressData = {
      name: values.firstName + " " + values.lastName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      address: values.address,
      city: values.city,
    };

    // return;

    // create a new address
    createAddress(addressData)
      .then(response => {
        console.log(response.data);
        const address = response.data.address;
        // set address id to shipping address
        setShippingAddress(address.id)
          .then(response => {
            console.log(response.data);
            // create a new checkout
            createCheckout({
              notes: values.orderNotes,
              useShippingAddressAsBillingAddress: true,
            })
              .then(response => {
                console.log(response.data);
                toast.success("checkout created successfully");
                ordersAtom.addOrderToOrders(response.data.order);
                navigateTo(URLS.checkout.success);
              })
              .catch(error => console.error(error));
          })
          .catch(error => console.error(error));
      })
      .catch(error => console.log(error));

    createCheckout();
  };

  return (
    <>
      <Helmet title={trans("checkoutPage")} />
      <div className="py-20 container">
        <Form
          className="flex flex-col-reverse 2xl:flex-row flex-wrap 2xl:flex-nowrap justify-center gap-5"
          onSubmit={handleBillingForm}>
          <div className="flex-grow 2xl:flex-grow-0">
            <div className="w-full lg:min-w-[1030px]">
              <BillingForm />
            </div>
          </div>
          <div className="w-full lg:max-w-full 2xl:w-[400px]">
            <div className="w-full p-5 2xl:w-[400px] flex flex-col gap-y-5 border border-gray-150">
              <h3 className="text-lg font-medium">{trans("orderSummary")}</h3>

              {/* <ul className="flex flex-col gap-y-3">
              {products.map(product => (
                <li key={product.id}>
                  <Link
                    to={URLS.product.view(product)}
                    className="h-[60px] center-y gap-x-5">
                    <div className="min-w-[60px] h-full">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-md border border-gray-200"
                      />
                    </div>
                    <div className="h-full flex-grow flex flex-col justify-between">
                      <p className="line-clamp-1">{product.name}</p>
                      <p className="text-sm font-semibold">
                        <span className="text-sky-500 font-bold">
                          ${product.price}
                        </span>
                        <span className="mx-1">x</span>
                        <span>{product.quantity}</span>
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul> */}

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
                <p className="font-semibold">
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
                </p>
              </div>
              <Button
                type="submit"
                endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
                onClick={() => console.log("procss to checkout")}>
                {trans("placeOrder")}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}
