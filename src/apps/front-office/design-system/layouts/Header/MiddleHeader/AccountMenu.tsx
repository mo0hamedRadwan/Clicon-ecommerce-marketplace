import { trans } from "@mongez/localization";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import Button from "components/form/Button";
import EmailInput from "components/form/EmailInput";
import PasswordInput from "components/form/PasswordInput";
import LinkAsButton from "components/ui/LinkAsButton";

export default function AccountMenu() {
  return (
    <div
      className={`hidden xs:group-hover:flex flex-col gap-y-4 z-20 absolute w-[420px] h-[440px] top-[50px] ${isRTL() ? "left-0" : "right-0"} w-[300px] p-6 bg-white text-black text-base font-semibold rounded shadow-2`}>
      <h3 className="text-center text-2xl">{`${trans("signIn")} ${trans("to")} ${trans("yourAccount")}`}</h3>

      <EmailInput label="emailAddress" />
      <PasswordInput label="password" showForgetPassword />

      {/* Login User */}
      <Button
        onClick={() => console.log("login")}
        endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
        className="w-full tracking-widest">
        {trans("login").toUpperCase()}
      </Button>
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
