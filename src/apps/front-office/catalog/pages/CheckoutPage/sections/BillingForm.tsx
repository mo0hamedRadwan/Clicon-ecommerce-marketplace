import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import RatioInput from "apps/front-office/design-system/components/form/RatioInput";
import CheckboxInput from "components/form/CheckboxInput";
import TextareaInput from "components/form/TextareaInput";
import TextInput from "components/form/TextInput";
import { paymentMethods } from "shared/data/homeData";

export default function BillingForm() {
  const handleBillingForm = ({ values }) => {
    console.log(values);
  };
  return (
    <Form className="flex flex-col gap-y-5" onSubmit={handleBillingForm}>
      <h2 className="text-2xl">{`${trans("billing")} ${trans("information")}`}</h2>
      <div className="center-y flex-wrap lg:flex-nowrap gap-5">
        <div className="w-full flex items-end flex-wrap sm:flex-nowrap gap-5">
          <TextInput
            name="firstName"
            placeholder={trans("firstName")}
            label={trans("username")}
          />
          <TextInput name="lastName" placeholder={trans("lastName")} />
        </div>
        <TextInput name="companyName" label={trans("companyName")} optional />
      </div>
      <div className="">
        <TextInput name="address" label={trans("address")} />
      </div>
      <div className="flex flex-wrap lg:flex-nowrap gap-x-5">
        {/* Convert TextInput to select */}
        <TextInput name="contry" label={trans("country")} />
        <TextInput
          name="region"
          label={`${trans("region")}/${trans("state")}`}
        />
        <TextInput name="city" label={trans("city")} />
        <TextInput name="zipCode" label={trans("zipCode")} />
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-x-5">
        <TextInput name="emailAdress" label={trans("emailAddress")} />
        <TextInput name="phoneNumber" label={trans("phoneNumber")} />
      </div>
      <div className="flex gap-x-2">
        <CheckboxInput
          name="diffAddress"
          label={`Ship into different address`}
        />
      </div>

      <div className="mt-5 flex flex-col gap-y-5 border border-gray-150">
        <h3 className="p-5 text-xl border-b border-gray-150">
          {trans("paymentOption")}
        </h3>
        <ul className="p-5 flex justify-center sm:justify-between flex-wrap sm:flex-nowrap gap-5 border-b border-gray-150">
          {paymentMethods.map(paymentMethod => (
            <li
              key={paymentMethod.name}
              className="w-[120px] flex-center flex-col gap-y-2">
              <img src={paymentMethod.icon} className="w-8 h-8" />
              <RatioInput
                name="paymentMethod"
                value={paymentMethod.name}
                label={paymentMethod.label}
                className="flex-center flex-col gap-y-3"
              />
            </li>
          ))}
        </ul>
        <div className="p-5 flex flex-col gap-y-5">
          <TextInput label={trans("nameOfCard")} />
          <TextInput label={trans("cardNumber")} />
          <div className="flex flex-wrap sm:flex-nowrap gap-x-5">
            <TextInput label={trans("expireDate")} />
            <TextInput label={trans("cvv")} />
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-y-5">
        <h3 className="text-xl">{trans("additionalInformation")}</h3>
        <TextareaInput
          label={trans("orderNotes")}
          placeholder={`Notes about your order, e.g. special notes for delivery`}
          optional
        />
      </div>
    </Form>
  );
}