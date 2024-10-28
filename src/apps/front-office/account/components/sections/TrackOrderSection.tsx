import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { navigateTo } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import Button from "components/form/Button";
import TextInput from "components/form/TextInput";
import user from "../../user";

type TrackOrderSectionPropsType = {
  size?: "page" | "tab";
};

export default function TrackOrderSection({
  size = "page",
}: TrackOrderSectionPropsType) {
  const handleTrackOrderSubmit = ({ values }) => {
    navigateTo(URLS.pages.trackOrder.view(values.orderID));
  };

  return (
    <Form
      className="flex flex-col items-start gap-y-5"
      onSubmit={handleTrackOrderSubmit}>
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
        <TextInput name="orderID" label="orderID" placeholder="id" required />
        <TextInput
          name="billingEmail"
          label="billingEmail"
          placeholder="emailAddress"
          defaultValue={user.email || ""}
          required
        />
      </div>
      <p className="center-y gap-x-2 text-gray-550">
        <span className="text-2xl">
          <i className="bx bx-info-circle"></i>
        </span>
        <span>{`${trans("orderID")} ${trans("that")} ${trans("sendedToYour")} ${trans("in")} ${trans("yourEmailAddress")}.`}</span>
      </p>
      <Button
        type="submit"
        onClick={() => console.log("trackOrder")}
        endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}>
        {trans("trackOrder").toUpperCase()}
      </Button>
    </Form>
  );
}
