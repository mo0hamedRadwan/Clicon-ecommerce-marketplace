import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import Button from "apps/front-office/design-system/components/form/Button";
import EmailInput from "apps/front-office/design-system/components/form/EmailInput";
import TextInput from "apps/front-office/design-system/components/form/TextInput";

type AddressFormPropsType = {
  heading: string;
};

export default function AddressForm({ heading }: AddressFormPropsType) {
  const handleEditAddress = ({ values }) => {
    console.log(values);
  };
  return (
    <div className="w-full border border-gray-150">
      <h2 className="p-5 font-semibold border-b border-gray-150">
        {trans(heading).toUpperCase()}
      </h2>

      <Form
        className="p-5 flex-grow flex flex-col items-start gap-y-5"
        onSubmit={handleEditAddress}>
        <div className="w-full center-y gap-5">
          <TextInput name="firstName" label="firstName" value="firstName" />
          <TextInput name="lastName" label="lastName" value="lastName" />
        </div>
        <TextInput
          name="companyName"
          label="companyName"
          value="companyName"
          optional
        />
        <TextInput name="address" label="address" value="address" />
        <TextInput name="country" label="country" value="country" />
        <TextInput
          name="region/state"
          label="region/state"
          value="region/state"
        />
        <div className="w-full center-y gap-5">
          <TextInput name="city" label="city" value="city" />
          <TextInput name="zipCode" label="zipCode" value="000123" />
        </div>
        <EmailInput name="email" label="email" value="email" />
        <TextInput name="phoneNumber" label="phoneNumber" value="phoneNumber" />
        <Button type="submit" onClick={() => console.log("")}>
          {trans("saveChanges")}
        </Button>
      </Form>
    </div>
  );
}
