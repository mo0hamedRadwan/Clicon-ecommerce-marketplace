import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { navigateTo } from "@mongez/react-router";
import user from "apps/front-office/account/user";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import appleIcon from "assets/images/Apple.png";
import googleIcon from "assets/images/Google.png";
import Button from "components/form/Button";
import EmailInput from "components/form/EmailInput";
import PasswordInput from "components/form/PasswordInput";
import { useState } from "react";
import toast from "react-hot-toast";
import { login } from "../services/auth-services";

export default function SignInForm() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignInForm = ({ values }) => {
    const userData = {
      email: values.email,
      password: values.password,
    };

    setLoading(true);
    login(userData)
      .then(response => {
        // notification that user is signed in successfully.
        toast.success(trans("userSignedinSuccessfully"));
        setLoading(false);
        // add access token to local storage
        // localStorage.setItem("accessToken", response.data.user.accessToken);
        user.login(response.data.user);
        // navigate to home page
        navigateTo(URLS.home);
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
    <Form className="p-10 flex flex-col gap-y-5" onSubmit={handleSignInForm}>
      <EmailInput
        name="email"
        placeholder={trans("emailAddress")}
        label={trans("emailAddress")}
        minLength={10}
        maxLength={100}
        email
      />
      <PasswordInput
        name="password"
        placeholder={trans("password")}
        label={trans("password")}
        showForgetPassword
        required
        minLength={8}
        maxLength={100}
      />
      <Button
        type="submit"
        endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
        onClick={() => console.log("sign In")}
        disabled={loading}>
        {trans("signin").toUpperCase()}
      </Button>
      <div className="relative">
        <hr className="my-3" />
        <p className="absolute top-0 left-1/2 -translate-x-1/2 bg-white text-gray-450 px-2 font-normal">
          {trans("or")}
        </p>
      </div>
      <div className="flex flex-col gap-y-3">
        <Button
          variant="outlined"
          className="relative border-gray-150 text-gray-550 hover:text-orange-450"
          onClick={() => console.log("login with google")}>
          <img
            src={googleIcon}
            alt="Google Icon"
            className={`absolute top-3 ${isRTL() ? "right-3" : "left-3"}`}
          />
          {`${trans("login")} ${trans("withGoogle")}`}
        </Button>
        <Button
          variant="outlined"
          className="relative border-gray-150 text-gray-550 hover:text-orange-450"
          onClick={() => console.log("login with google")}>
          <img
            src={appleIcon}
            alt="Apple Icon"
            className={`absolute top-3 ${isRTL() ? "right-3" : "left-3"}`}
          />
          {`${trans("login")} ${trans("withApple")}`}
        </Button>
      </div>
    </Form>
  );
}
