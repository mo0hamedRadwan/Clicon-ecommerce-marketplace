import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { navigateTo } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import Button from "components/form/Button";
import PasswordInput from "components/form/PasswordInput";
import { resetPassword } from "../../services/auth";

export default function ResetPasswordPage() {
  const handleResetPasswordForm = ({ values }) => {
    const resetUserPassword = {
      email: localStorage.getItem("email"),
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    resetPassword(resetUserPassword)
      .then(response => {
        console.log(response);
        // navigate to login page after reset password
        navigateTo(URLS.auth.signin.root);
        // remove email from local storage
        localStorage.removeItem("email");
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container py-32 flex-center">
      <Form
        className="p-10 w-[500px] shadow-4 flex flex-col gap-y-5"
        onSubmit={handleResetPasswordForm}>
        <h3 className="text-2xl text-center">{trans("resetpassword")}</h3>
        <p className="text-sm text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cum
          temporibus voluptatibus quibusdam ipsa velit ipsum harum.
        </p>
        <PasswordInput
          name="password"
          label={trans("password")}
          placeholder={`8+ ${trans("characters")}`}
          required
        />
        <PasswordInput
          name="confirmPassword"
          label={trans("confirmPassword")}
          required
        />

        <Button
          type="submit"
          endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
          onClick={() => console.log("send Code")}>
          {trans("resetpassword").toUpperCase()}
        </Button>
      </Form>
    </div>
  );
}
