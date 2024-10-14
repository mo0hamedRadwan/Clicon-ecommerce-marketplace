import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { Link, navigateTo } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import appleIcon from "assets/images/Apple.png";
import googleIcon from "assets/images/Google.png";
import Button from "components/form/Button";
import EmailInput from "components/form/EmailInput";
import PasswordInput from "components/form/PasswordInput";
import TextInput from "components/form/TextInput";
import { useState } from "react";
import toast from "react-hot-toast";
import { register } from "../services/auth-services";

export default function SignUpForm() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignUpForm = ({ values }) => {
    const newUser = {
      firstName: values.username,
      lastName: values.username,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    setLoading(true);
    register(newUser)
      .then(() => {
        // notification that user is signed up successfully.
        toast.success(trans("userSignedUpSuccessfully"));
        setLoading(false);
        // navigate to verify email address
        navigateTo(URLS.auth.signup.emailVerification);
        // set email to local storage
        localStorage.setItem("email", newUser.email);
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
    <Form className="p-10 flex flex-col gap-y-5" onSubmit={handleSignUpForm}>
      <TextInput
        name="username"
        label={trans("name")}
        required
        minLength={8}
        maxLength={50}
        // pattern={/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/}
      />
      <EmailInput
        name="email"
        label={trans("emailAddress")}
        required
        minLength={10}
        maxLength={100}
        email
        // pattern={}
      />
      <PasswordInput
        name="password"
        placeholder={`8+ ${trans("characters")}`}
        label={trans("password")}
        required
        minLength={8}
        maxLength={100}
        // pattern={}
      />
      <PasswordInput
        name="confirmPassword"
        match="password"
        label={trans("confirmPassword")}
        required
        minLength={8}
        maxLength={100}
        // pattern={}
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

      <div>
        <p className="">
          <span>{`${trans("areYouAgreeTo")} Clicon `}</span>
          <span>
            <Link
              to={URLS.pages.termsConditions}
              className="text-sky-550 hover:bg-sky-100 duration-150">
              {trans("termsAndConditions")}
            </Link>
          </span>
          <span>{` ${trans("and")} `}</span>
          <span>
            <Link
              to={URLS.pages.privacyPolicy}
              className="text-sky-550 hover:bg-sky-100 duration-150">
              {trans("privacyPolicy")}
            </Link>
          </span>
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
          {`${trans("signup")} ${trans("withGoogle")}`}
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
          {`${trans("signup")} ${trans("withApple")}`}
        </Button>
      </div>
    </Form>
  );
}
