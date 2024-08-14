import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import Button from "apps/front-office/design-system/components/form/Button";
import EmailInput from "apps/front-office/design-system/components/form/EmailInput";
import { isRTL } from "apps/front-office/utils/helpers";

export default function SubscribeForm() {
  return (
    <Form className="relative">
      <EmailInput
        className="w-[400px] md:w-[550px] p-5 rounded"
        placeholder={trans("email")}
      />
      <Button
        onClick={() => console.log("Subscribe Email")}
        className={`absolute top-3 ${isRTL() ? "left-3" : "right-3"}`}>
        {trans("subscribe")}
      </Button>
    </Form>
  );
}
