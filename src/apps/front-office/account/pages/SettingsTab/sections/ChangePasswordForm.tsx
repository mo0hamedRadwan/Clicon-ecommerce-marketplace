import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { accountAtom } from "apps/front-office/account/atoms/accountAtom";
import Button from "apps/front-office/design-system/components/form/Button";
import PasswordInput from "apps/front-office/design-system/components/form/PasswordInput";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ChangePasswordForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChangePassword = ({ values }) => {
    console.log(values);
    if (values.newPassword !== values.confirmPassword) {
      toast.error("new password is dismatching confirm password");
      return;
    } else if (values.newPassword !== values.currentPassword) {
      toast.error("new password is same old password");
      return;
    }

    setFormSubmitted(true);
    accountAtom.changeUserPassword({
      currentPassword: values.currentPassword,
      password: values.newPassword,
      confirmPassword: values.confirmPassword,
    });
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
        <Button
          type="submit"
          disabled={formSubmitted}
          onClick={() => console.log("change password")}>
          {trans("changePassword")}
        </Button>
      </Form>
    </div>
  );
}
