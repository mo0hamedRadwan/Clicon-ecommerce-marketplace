import { trans } from "@mongez/localization";
import TextInput from "apps/front-office/design-system/components/form/TextInput";
import Loader1 from "apps/front-office/design-system/components/loaders/Loader1";
import LinkAsButton from "apps/front-office/design-system/components/ui/LinkAsButton";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import { accountAtom } from "../../atoms/accountAtom";

type TrackOrderSectionPropsType = {
  size?: "page" | "tab";
};

export default function TrackOrderSection({
  size = "page",
}: TrackOrderSectionPropsType) {
  const { loading, user } = accountAtom.useValue();

  if (loading) {
    return (
      <div className="w-full h-[500px] flex justify-center">
        <Loader1 />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-y-5">
      <h2 className="text-2xl font-semibold">{trans("trackOrder")}</h2>
      <p
        className={`w-full ${
          size === "page" ? "md:w-[750px]" : ""
        } text-sm text-gray-600`}>
        To track your order please enter your order ID in the input field below
        and press the “Track Order” button. this was given to you on your
        receipt and in the confirmation email you should have received.
      </p>
      <div
        className={`w-full center-y flex-wrap gap-5 ${
          size === "page"
            ? "lg:w-[820px] md:flex-nowrap"
            : "xs:flex-nowrap lg:flex-nowrap"
        }`}>
        <TextInput name="orderID" label="orderID" placeholder="id" />
        <TextInput
          name="billingEmail"
          label="billingEmail"
          placeholder="emailAddress"
          defaultValue={user.email}
        />
      </div>
      <p className="center-y gap-x-2 text-gray-550">
        <span className="text-2xl">
          <i className="bx bx-info-circle"></i>
        </span>
        <span>{`${trans("orderID")} ${trans("that")} ${trans("sendedToYour")} ${trans("in")} ${trans("yourEmailAddress")}.`}</span>
      </p>
      <LinkAsButton
        href={URLS.userAccount.trackOrder.viewRoute}
        endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}>
        {trans("trackOrder").toUpperCase()}
      </LinkAsButton>
    </div>
  );
}
