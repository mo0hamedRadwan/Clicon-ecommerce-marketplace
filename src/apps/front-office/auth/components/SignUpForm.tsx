import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import appleIcon from "assets/images/Apple.png";
import googleIcon from "assets/images/Google.png";
import Button from "components/form/Button";
import EmailInput from "components/form/EmailInput";
import PasswordInput from "components/form/PasswordInput";
import TextInput from "components/form/TextInput";

export default function SignUpForm() {
  return (
    <div className="p-10 flex flex-col gap-y-5">
      <TextInput label={trans("name")} />
      <EmailInput label={trans("emailAddress")} />
      <PasswordInput
        placeholder={`8+ ${trans("characters")}`}
        label={trans("password")}
      />
      <PasswordInput label={trans("confirmPassword")} />
      <Button
        endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
        onClick={() => console.log("sign In")}>
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
    </div>
  );
}
