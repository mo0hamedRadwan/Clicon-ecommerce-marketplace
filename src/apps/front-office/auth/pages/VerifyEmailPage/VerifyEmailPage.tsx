import { trans } from "@mongez/localization";
import { isRTL } from "apps/front-office/utils/helpers";
import Button from "components/form/Button";
import TextInput from "components/form/TextInput";

export default function VerifyEmailPage() {
  return (
    <div className="container py-32 flex-center">
      <div className="p-10 w-[500px] shadow-4 flex flex-col gap-y-5">
        <h3 className="text-2xl text-center">{trans("verifyEmailAddress")}</h3>
        <p className="text-sm text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          eius temporibus quia quas ullam sit voluptas id dolore suscipit modi,
        </p>

        <div className="relative">
          <TextInput label={trans("verificationCode")} />
          <Button
            variant="text"
            className="absolute top-2 right-0 p-0 text-sm text-sky-550 hover:bg-sky-200"
            onClick={() =>
              console.log("resend code")
            }>{`${trans("resend")} ${trans("code")}`}</Button>
        </div>

        <Button
          endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
          onClick={() => console.log("send Code")}>
          {`${trans("verify")} ${trans("me")}`.toUpperCase()}
        </Button>
      </div>
    </div>
  );
}
