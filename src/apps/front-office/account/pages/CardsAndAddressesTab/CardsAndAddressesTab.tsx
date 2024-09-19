import BillingAddressCard from "../../components/sections/BillingAddressCard";
import PaymentOptionsSection from "../../components/sections/PaymentOptionsSection";
import ShippingAddressCard from "../../components/sections/ShippingAddressCard";

export default function CardsAndAddressesTab() {
  return (
    <div className="flex flex-col gap-y-5">
      <PaymentOptionsSection />
      <div className="center-y gap-5">
        <BillingAddressCard />
        <ShippingAddressCard />
      </div>
    </div>
  );
}
