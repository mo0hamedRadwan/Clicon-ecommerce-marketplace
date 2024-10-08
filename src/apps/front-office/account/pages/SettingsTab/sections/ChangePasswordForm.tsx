import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import Button from "apps/front-office/design-system/components/form/Button";
import PasswordInput from "apps/front-office/design-system/components/form/PasswordInput";

export default function ChangePasswordForm() {
  const handleChangePassword = ({ values }) => {
    console.log(values);
  };

  return (
    <div className="border border-gray-150">
      <h2 className="p-5 font-semibold border-b border-gray-150">
        {trans("changePassword").toUpperCase()}
      </h2>
      <Form
        className="p-5 flex-grow flex flex-col items-start gap-y-5"
        onSubmit={handleChangePassword}>
        <PasswordInput name="currentPassword" label="currentPassword" />
        <PasswordInput name="newPassword" label="newPassword" />
        <PasswordInput name="confirmPassword" label="confirmPassword" />
        <Button type="submit" onClick={() => console.log("change password")}>
          {trans("changePassword")}
        </Button>
      </Form>
    </div>
  );
}
