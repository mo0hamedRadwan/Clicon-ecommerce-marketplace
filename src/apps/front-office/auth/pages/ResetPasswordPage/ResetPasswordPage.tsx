import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import Helmet from "@mongez/react-helmet";
import { navigateTo } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import Button from "components/form/Button";
import PasswordInput from "components/form/PasswordInput";
import { useState } from "react";
import toast from "react-hot-toast";
import { resetPassword } from "../../services/auth-services";

export default function ResetPasswordPage() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleResetPasswordForm = ({ values }) => {
    const resetUserPassword = {
      email: localStorage.getItem("email"),
      code: localStorage.getItem("code"),
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    setLoading(true);
    resetPassword(resetUserPassword)
      .then(() => {
        // reset user password successfully
        toast.success(trans("userResetPasswordSuccessfully"));
        setLoading(false);
        // navigate to login page after reset password
        navigateTo(URLS.auth.signin.root);
        // remove email from local storage
        localStorage.removeItem("email");
        // remove code from local storage
        localStorage.removeItem("code");
      })
      .catch(error => {
        const errorMessage =
          error.response.data.error || error.response.data.messages[0].error;
        setLoading(false);
        toast.error(errorMessage);
        console.error(error);
      });
  };

  return (
    <>
      <Helmet title={trans("resetPasswordPage")} />
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
            minLength={8}
            maxLength={100}
          />
          <PasswordInput
            name="confirmPassword"
            label={trans("confirmPassword")}
            match="password"
            required
            minLength={8}
            maxLength={100}
          />

          <Button
            type="submit"
            endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
            onClick={() => console.log("send Code")}
            disabled={loading}>
            {trans("resetpassword").toUpperCase()}
          </Button>
        </Form>
      </div>
    </>
  );
}
