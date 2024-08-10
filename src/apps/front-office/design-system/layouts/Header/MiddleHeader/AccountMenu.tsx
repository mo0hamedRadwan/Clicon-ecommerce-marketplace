import { trans } from "@mongez/localization";
import LinkAsButton from "apps/front-office/design-system/components/LinkAsButton";
import Button from "apps/front-office/design-system/components/form/Button";
import EmailInput from "apps/front-office/design-system/components/form/EmailInput";
import PasswordInput from "apps/front-office/design-system/components/form/PasswordInput";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";

export default function AccountMenu() {
  return (
    <div
      className={`hidden group-hover:flex flex-col gap-y-4 z-20 absolute w-[420px] h-[440px] top-[50px] ${isRTL() ? "left-0" : "right-0"} w-[300px] p-6 bg-white text-black text-base font-semibold rounded shadow-2`}>
      <h3 className="text-center text-2xl">{`${trans("signIn")} ${trans("to")} ${trans("yourAccount")}`}</h3>

      <EmailInput />
      <PasswordInput>
        <LinkAsButton
          variant="text"
          href={URLS.auth.forgetPassword}
          className="p-0 text-sky-550 hover:bg-white">
          {trans("forgetPassword")}
        </LinkAsButton>
      </PasswordInput>

      {/* Login User */}
      <Button
        onClick={() => console.log("login")}
        endIcon="bx-right-arrow-alt"
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
        href={URLS.auth.register}
        className="w-full tracking-wide">
        {`${trans("create")} ${trans("account")}`.toUpperCase()}
      </LinkAsButton>
    </div>
  );
}
