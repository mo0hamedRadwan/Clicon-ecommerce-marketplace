import { trans } from "@mongez/localization";
import { isRTL } from "apps/front-office/utils/helpers";
import Button from "components/form/Button";
import PasswordInput from "components/form/PasswordInput";

export default function ResetPasswordPage() {
  return (
    <div className="container py-32 flex-center">
      <div className="p-10 w-[500px] shadow-4 flex flex-col gap-y-5">
        <h3 className="text-2xl text-center">{trans("resetpassword")}</h3>
        <p className="text-sm text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cum
          temporibus voluptatibus quibusdam ipsa velit ipsum harum.
        </p>
        <PasswordInput
          label={trans("password")}
          placeholder={`8+ ${trans("characters")}`}
        />
        <PasswordInput label={trans("confirmPassword")} />

        <Button
          endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
          onClick={() => console.log("send Code")}>
          {trans("resetpassword").toUpperCase()}
        </Button>
      </div>
    </div>
  );
}
