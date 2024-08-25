import { trans } from "@mongez/localization";
import TextInput from "apps/front-office/design-system/components/form/TextInput";
import LinkAsButton from "apps/front-office/design-system/components/ui/LinkAsButton";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";

export default function TrackOrderPage() {
  return (
    <div className="py-20 container">
      <div className="flex flex-col items-start gap-y-5">
        <h2 className="text-2xl font-semibold">{trans("trackOrder")}</h2>
        <p className="w-full md:w-[750px] text-sm text-gray-600">
          To track your order please enter your order ID in the input field
          below and press the “Track Order” button. this was given to you on
          your receipt and in the confirmation email you should have received.
        </p>
        <div className="w-full lg:w-[820px] center-y flex-wrap md:flex-nowrap gap-5">
          <TextInput label={trans("orderID")} placeholder={trans("id")} />
          <TextInput
            label={trans("billingEmail")}
            placeholder={"emailAddress"}
          />
        </div>
        <p className="center-y gap-x-2 text-gray-550">
          <span className="text-2xl">
            <i className="bx bx-info-circle"></i>
          </span>
          <span>{`${trans("orderID")} ${trans("that")} ${trans("sendedToYour")} ${trans("in")} ${trans("yourEmailAddress")}.`}</span>
        </p>
        <LinkAsButton
          href={URLS.pages.trackOrder.details}
          endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}>
          {trans("trackOrder").toUpperCase()}
        </LinkAsButton>
      </div>
    </div>
  );
}
