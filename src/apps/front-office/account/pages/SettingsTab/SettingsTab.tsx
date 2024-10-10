import AccountSettingsForm from "./sections/AccountSettingsForm";
import AddressForm from "./sections/AddressForm";
import ChangePasswordForm from "./sections/ChangePasswordForm";

export default function SettingsTab() {
  return (
    <div className="flex flex-col gap-y-5">
      <AccountSettingsForm />
      <div className="flex flex-wrap 2xl:flex-nowrap gap-5">
        <AddressForm heading="billingAddress" />
        <AddressForm heading="shippingAddress" />
      </div>
      <ChangePasswordForm />
    </div>
  );
}
