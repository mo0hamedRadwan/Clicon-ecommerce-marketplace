import { trans } from "@mongez/localization";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import LinkAsButton from "components/ui/LinkAsButton";
import PaymentCard from "components/ui/PaymentCard";
import { paymentOptionsItems } from "shared/data/accountData";

export default function PaymentOptionsSection() {
  return (
    <div className="border border-gray-150 shadow-2">
      <div className="space-between-center gap-5 border-b border-gray-150">
        <h2 className="p-5 font-semibold">
          {trans("paymentOption").toUpperCase()}
        </h2>
        <LinkAsButton
          variant="text"
          endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
          href={
            URLS.userAccount.cardsAndAddresses
          }>{`${trans("add")} ${trans("card")}`}</LinkAsButton>
      </div>
      <div className="p-5 flex flex-wrap justify-center gap-5">
        {paymentOptionsItems.map((paymentOptionsItem, idx) => (
          <PaymentCard key={idx} {...paymentOptionsItem} />
        ))}
      </div>
    </div>
  );
}
