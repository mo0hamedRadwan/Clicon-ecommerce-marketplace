import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { subscribeNewLetters } from "apps/front-office/home/services/home-service";
import { isRTL } from "apps/front-office/utils/helpers";
import Button from "components/form/Button";
import EmailInput from "components/form/EmailInput";

export default function SubscribeForm() {
  const handleFormSubmit = ({ values }) => {
    const email = {
      email: values.email,
    };
    subscribeNewLetters(email)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error("Error subscribing email: ", error);
      });
  };

  return (
    <Form className="relative" onSubmit={handleFormSubmit}>
      <EmailInput
        name="email"
        className="p-3 sm:p-5 rounded text-sm sm:text-base"
        placeholder={trans("email")}
        required
        minLength={10}
        maxLength={100}
        email
      />
      <Button
        onClick={() => console.log("Subscribe Email")}
        className={`absolute top-1 sm:top-3 ${isRTL() ? "left-1 ms:left-3" : "right-1 sm:right-3"}`}>
        {trans("subscribe")}
      </Button>
    </Form>
  );
}
