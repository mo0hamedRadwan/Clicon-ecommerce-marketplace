import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import Helmet from "@mongez/react-helmet";
import { Link, navigateTo } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import Button from "components/form/Button";
import EmailInput from "components/form/EmailInput";
import { useState } from "react";
import toast from "react-hot-toast";
import { forgetPassword } from "../../services/auth-services";

export default function ForgetPasswordPage() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleForgetPasswordForm = ({ values }) => {
    const email = { email: values.email };

    setLoading(true);
    forgetPassword(email)
      .then(() => {
        // send verification code to the user
        toast.success(trans("verificationCodeSendedSuccessfully"));
        setLoading(false);
        // set email to local storage
        localStorage.setItem("email", values.email);
        // navigate to verify code page
        navigateTo(URLS.auth.signin.resetPasswordVerification);
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
      <Helmet title={trans("forgetPasswordPage")} />
      <div className="flex flex-col gap-y-12"></div>
      <div className="container py-32 flex-center">
        <Form
          className="p-10 w-[500px] shadow-4 flex flex-col gap-y-5"
          onSubmit={handleForgetPasswordForm}>
          <h3 className="text-2xl text-center">{trans("forgetPassword")}</h3>
          <p className="text-sm text-center">{`${trans("enter")} ${trans("the")} ${trans("emailAddress")} ${trans("or")} ${trans("mobileNumber")} ${trans("associateWithYourAccount")}`}</p>
          <EmailInput
            name="email"
            label={trans("emailAddress")}
            required
            email
            // pattern={}
          />
          <Button
            type="submit"
            endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
            onClick={() => console.log("send Code")}
            disabled={loading}>
            {`${trans("send")} ${trans("code")}`.toUpperCase()}
          </Button>
          <p className="flex gap-x-2">
            <span className="text-gray-550">
              {`${trans("alreadyHaveAccount")} ${isRTL() ? "؟" : "?"}`}
            </span>
            <span className="text-sky-550">
              <Link to={URLS.auth.signin.root}>{trans("signin")}</Link>
            </span>
          </p>
          <p className="flex gap-x-2">
            <span className="text-gray-550">
              {`${trans("donot")} ${trans("have")} ${trans("account")} ${isRTL() ? "؟" : "?"}`}
            </span>
            <span className="text-sky-550">
              <Link to={URLS.auth.signup.root}>{trans("signup")}</Link>
            </span>
          </p>

          <hr className="my-3" />

          <p>
            <span>{`${trans("youMayContact")} `}</span>
            <span className="text-orange-450">
              <Link to={URLS.pages.customerSupport}>
                {trans("customerSupport")}
              </Link>
            </span>
            <span>{` ${trans("forHelp")} ${trans("restoringAccessToYourAccount")}.`}</span>
          </p>
        </Form>
      </div>
    </>
  );
}
