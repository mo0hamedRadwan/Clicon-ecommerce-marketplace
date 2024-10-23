import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { navigateTo } from "@mongez/react-router";
import { accountAtom } from "apps/front-office/account/atoms/accountAtom";
import { login } from "apps/front-office/auth/services/auth-services";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import Button from "components/form/Button";
import EmailInput from "components/form/EmailInput";
import PasswordInput from "components/form/PasswordInput";
import LinkAsButton from "components/ui/LinkAsButton";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AccountMenu() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoginForm = ({ values }) => {
    const user = {
      email: values.email,
      password: values.password,
    };

    setLoading(true);
    login(user)
      .then(response => {
        // notification user is logged in successfully.
        toast.success(trans("userSignedinSuccessfully"));
        setLoading(false);
        // add access token to local storage
        // localStorage.setItem("accessToken", response.data.user.accessToken);

        // load user details from the server
        accountAtom.loadUser();
        accountAtom.updateUser(response.data.user);

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
    <div
      className={`hidden xs:group-hover:flex flex-col gap-y-4 z-20 absolute w-[420px] h-[440px] top-[50px] ${isRTL() ? "left-0" : "right-0"} w-[300px] p-6 bg-white text-black text-base font-semibold rounded shadow-2`}>
      <h3 className="text-center text-2xl">{`${trans("signIn")} ${trans("to")} ${trans("yourAccount")}`}</h3>

      <Form className="flex flex-col gap-y-4" onSubmit={handleLoginForm}>
        <EmailInput name="email" label="emailAddress" />
        <PasswordInput name="password" label="password" showForgetPassword />

        {/* Login User */}
        <Button
          type="submit"
          onClick={() => console.log("login")}
          endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
          className="w-full tracking-widest"
          disabled={loading}>
          {trans("login").toUpperCase()}
        </Button>
      </Form>
      <div className="relative">
        <hr className="my-3" />
        <p className="absolute top-0 left-1/2 -translate-x-1/2 bg-white px-2 font-normal">
          {`${trans("donot")} ${trans("have")} ${trans("account")} `}
          {`${isRTL() ? "؟" : "?"}`}
        </p>
      </div>
      <LinkAsButton
        variant="outlined"
        href={URLS.auth.signup.root}
        className="w-full tracking-wide">
        {`${trans("create")} ${trans("account")}`.toUpperCase()}
      </LinkAsButton>
    </div>
  );
}
