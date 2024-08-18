import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import Button from "apps/front-office/design-system/components/form/Button";
import EmailInput from "apps/front-office/design-system/components/form/EmailInput";
import { isRTL } from "apps/front-office/utils/helpers";

export default function SubscribeForm() {
  return (
    <Form className="relative">
      <EmailInput
        className="p-3 sm:p-5 rounded text-sm sm:text-base"
        placeholder={trans("email")}
      />
      <Button
        onClick={() => console.log("Subscribe Email")}
        className={`absolute top-1 sm:top-3 ${isRTL() ? "left-1 ms:left-3" : "right-1 sm:right-3"}`}>
        {trans("subscribe")}
      </Button>
    </Form>
  );
}
