import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import Helmet from "@mongez/react-helmet";
import { navigateTo } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import Button from "components/form/Button";
import TextInput from "components/form/TextInput";
import { useState } from "react";
import toast from "react-hot-toast";
import { verifyForgetPassword } from "../../services/auth-services";

export default function VerifyEmailPage() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleVerifyForgetPasswordForm = ({ values }) => {
    const verifyEmail = {
      email: localStorage.getItem("email"),
      code: values.code,
    };

    setLoading(true);
    verifyForgetPassword(verifyEmail)
      .then(() => {
        toast.success(trans("userVerifiedEmailSuccessfully"));
        setLoading(false);
        // navigate to login page after verify email
        navigateTo(URLS.auth.signin.resetPassword);
        // set code to local storage
        localStorage.setItem("code", values.code);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <>
      <Helmet title={trans("verifyForgetPasswordPage")} />
      <div className="container py-32 flex-center">
        <Form
          className="p-10 w-[500px] shadow-4 flex flex-col gap-y-5"
          onSubmit={handleVerifyForgetPasswordForm}>
          <h3 className="text-2xl text-center">
            {trans("verifyForgetPassword")}
          </h3>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            eius temporibus quia quas ullam sit voluptas id dolore suscipit
            modi,
          </p>

          <div className="relative">
            <TextInput name="code" label={trans("verificationCode")} required />
            <Button
              variant="text"
              className="absolute top-2 right-0 p-0 text-sm text-sky-550 hover:bg-sky-200"
              onClick={() =>
                console.log("resend code")
              }>{`${trans("resend")} ${trans("code")}`}</Button>
          </div>

          <Button
            type="submit"
            endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
            onClick={() => console.log("send Code")}
            disabled={loading}>
            {`${trans("verify")} ${trans("me")}`.toUpperCase()}
          </Button>
        </Form>
      </div>
    </>
  );
}
