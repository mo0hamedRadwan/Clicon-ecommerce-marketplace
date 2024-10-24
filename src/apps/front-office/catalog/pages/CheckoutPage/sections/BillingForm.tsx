import { trans } from "@mongez/localization";
import { useOnce } from "@mongez/react-hooks";
import { accountAtom } from "apps/front-office/account/atoms/accountAtom";
import {
  setPaymentMethod,
  setShippingMethod,
} from "apps/front-office/catalog/services/catalog-service";
import { cartAtom } from "apps/front-office/design-system/atoms/cartAtom";
import { citiesAtom } from "apps/front-office/design-system/atoms/citiesAtom";
import { SelectOption } from "apps/front-office/design-system/types";
import paypalIcon from "assets/images/paypal.png";
import amazonIcon from "assets/images/SVGs/Amazon.svg";
import creditCardIcon2 from "assets/images/SVGs/CreditCard2.svg";
import cashIcon from "assets/images/SVGs/CurrencyDollar.svg";
import venmoIcon from "assets/images/venmo.png";
import CheckboxInput from "components/form/CheckboxInput";
import RadioInput from "components/form/RadioInput";
import Select from "components/form/Select";
import TextareaInput from "components/form/TextareaInput";
import TextInput from "components/form/TextInput";
import Loader1 from "components/loaders/Loader1";
import { useEffect, useState } from "react";

const paymentMethods = [
  { name: "cashOnDelivery", icon: cashIcon, label: "cashOnDelivery" },
  { name: "venomCard", icon: venmoIcon, label: "venmo" },
  { name: "paypalCard", icon: paypalIcon, label: "paypal" },
  { name: "wallet", icon: amazonIcon, label: "amazonPay" },
  { name: "debitCreditCard", icon: creditCardIcon2, label: "debitCreditcard" },
];

export default function BillingForm() {
  const { loading, user } = accountAtom.useValue();
  const { loading: loadingCities, cities } = citiesAtom.useValue();
  const [paymentMethodSelected, setPaymentMethodSelected] = useState<string>(
    paymentMethods[0].name,
  );
  const [citiesSelectOptions, setCitiesSelectOptions] = useState<
    SelectOption[]
  >([]);

  const handleCityChange = (city: string) => {
    cartAtom.changeShippingAddressCity(city);
  };

  useOnce(() => {
    Promise.all([
      // loading cities
      citiesAtom.loadCities(),
      // setting Shipping Method to standard
      setShippingMethod()
        .then(response => console.log(response))
        .catch(error => console.error(error)),
      // setting Payment Method to cashOnDelivary
      setPaymentMethod()
        .then(response => console.log(response))
        .catch(error => console.error(error)),
    ]);
  });

  useEffect(() => {
    // After loading cities
    if (cities.length > 0 && citiesSelectOptions.length === 0) {
      setCitiesSelectOptions(
        cities.map(city => ({
          value: city.id,
          label: city.name,
        })),
      );
    }
  }, [cities, citiesSelectOptions]);

  if (loading || loadingCities) {
    return (
      <div className="w-full h-[500px] flex justify-center">
        <Loader1 />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="text-2xl">{trans("billingInformation")}</h2>
      <div className="center-y flex-wrap lg:flex-nowrap gap-5">
        <div className="w-full flex items-end flex-wrap md:flex-nowrap gap-5">
          <TextInput
            name="firstName"
            placeholder={trans("firstName")}
            label={trans("username")}
            defaultValue={user.firstName}
            required
          />
          <TextInput
            name="lastName"
            placeholder={trans("lastName")}
            defaultValue={user.lastName}
            required
          />
        </div>
        <TextInput name="companyName" label={trans("companyName")} optional />
      </div>
      <div className="flex items-end flex-wrap md:flex-nowrap gap-5">
        <TextInput name="address" label={trans("address")} required />
        <Select
          name="city"
          triggerValue={""}
          options={citiesSelectOptions}
          className="w-[400px] border border-gray-150"
          onValueChange={handleCityChange}
          required
        />
      </div>
      {/* <div className="flex flex-wrap lg:flex-nowrap gap-x-5">
        <TextInput name="country" label={trans("country")} value="Egypt" />
        <TextInput
          name="region"
          label={`${trans("region")} / ${trans("state")}`}
        />
        <TextInput name="city" label={trans("city")} />
        <TextInput name="zipCode" label={trans("zipCode")} />
      </div> */}
      <div className="flex flex-wrap md:flex-nowrap gap-x-5">
        <TextInput
          name="emailAdress"
          label={trans("emailAddress")}
          defaultValue={user.email}
          required
        />
        <TextInput
          name="phoneNumber"
          label={trans("phoneNumber")}
          defaultValue={user.phoneNumber}
          required
        />
      </div>
      <div className="flex gap-x-2">
        {/* I Will Create Form for that in future */}
        <CheckboxInput
          name="diffAddress"
          label={`${trans("shipInto")} ${trans("differentAddress")}`}
        />
      </div>

      <div className="mt-5 flex flex-col gap-y-5 border border-gray-150">
        <h3 className="p-5 text-xl border-b border-gray-150">
          {trans("paymentOption")}
        </h3>
        <ul className="p-5 flex justify-center sm:justify-between flex-wrap md:flex-nowrap gap-5 border-b border-gray-150">
          {paymentMethods.map((paymentMethod, idx) => (
            <li
              key={paymentMethod.name}
              className="w-[150px] flex-center flex-col gap-y-2">
              <img src={paymentMethod.icon} className="w-8 h-8" />
              <RadioInput
                name="paymentMethod"
                checked={
                  paymentMethodSelected === paymentMethod.name && idx === 0
                }
                id={paymentMethod.name}
                value={paymentMethod.name}
                label={paymentMethod.label}
                className="flex-center flex-col gap-y-3"
                onChange={() => {
                  setPaymentMethodSelected(paymentMethod.name);
                }}
              />
            </li>
          ))}
        </ul>
        {/* {paymentMethodSelected !== "cash" && (
          <div className="p-5 flex flex-col gap-y-5">
            <TextInput name="nameOnCard" label={trans("nameOnCard")} />
            <TextInput name="cardNumber" label={trans("cardNumber")} />
            <div className="flex flex-wrap sm:flex-nowrap gap-x-5">
              <TextInput name="expireDate" label={trans("expireDate")} />
              <TextInput name="cvv" label={trans("cvv")} />
            </div>
          </div>
        )} */}
      </div>

      <div className="mt-5 flex flex-col gap-y-5">
        <h3 className="text-xl">{trans("additionalInformation")}</h3>
        <TextareaInput
          name="orderNotes"
          label={trans("orderNotes")}
          placeholder={trans("orderNotesPlaceholder")}
          optional
        />
      </div>
    </div>
  );
}
