import { trans } from "@mongez/localization";
import { isRTL } from "apps/front-office/utils/helpers";
import appleIcon from "assets/images/Apple.png";
import googleIcon from "assets/images/Google.png";
import Button from "components/form/Button";
import EmailInput from "components/form/EmailInput";
import PasswordInput from "components/form/PasswordInput";

export default function SignInForm() {
  return (
    <div className="p-10 flex flex-col gap-y-5">
      <EmailInput
        placeholder={trans("emailAddress")}
        label={trans("emailAddress")}
      />
      <PasswordInput
        placeholder={trans("password")}
        label={trans("password")}
        showForgetPassword
      />
      <Button
        endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
        onClick={e => console.log("sign In")}>
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
    </div>
  );
}
