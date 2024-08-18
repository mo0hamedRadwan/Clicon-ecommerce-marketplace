import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import Button from "components/form/Button";
import EmailInput from "components/form/EmailInput";

export default function ForgetPasswordPage() {
  return (
    <div className="container py-32 flex-center">
      <div className="p-10 w-[500px] shadow-4 flex flex-col gap-y-5">
        <h3 className="text-2xl text-center">{trans("forgetPassword")}</h3>
        <p className="text-sm text-center">{`${trans("enter")} ${trans("the")} ${trans("emailAddress")} ${trans("or")} ${trans("mobileNumber")} ${trans("associateWithYourAccount")}`}</p>
        <EmailInput label={trans("emailAddress")} />
        <Button
          endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
          onClick={e => console.log("send Code")}>
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
            <Link to={URLS.pages.customerServices}>
              {trans("customerServices")}
            </Link>
          </span>
          <span>{` ${trans("forHelp")} ${trans("restoringAccessToYourAccount")}.`}</span>
        </p>
      </div>
    </div>
  );
}
