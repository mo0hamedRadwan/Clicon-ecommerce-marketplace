import AccountSettingsForm from "./sections/AccountSettingsForm";
import AddressForm from "./sections/AddressForm";
import ChangePasswordForm from "./sections/ChangePasswordForm";

export default function SettingsTab() {
  return (
    <div className="flex flex-col gap-y-5">
      <AccountSettingsForm />
      <div className="flex gap-5">
        <AddressForm heading="billingAddress" />
        <AddressForm heading="shippingAddress" />
      </div>
      <ChangePasswordForm />
    </div>
  );
}
