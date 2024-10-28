import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import Button from "components/form/Button";
import PasswordInput from "components/form/PasswordInput";
import { useState } from "react";
import toast from "react-hot-toast";
import { changePassword } from "../../../services/account-services";

export default function ChangePasswordForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChangePassword = ({ values }) => {
    if (values.newPassword !== values.confirmPassword) {
      // TODO: translate this message
      toast.error("new password is dismatching confirm password");
      return;
    } else if (values.newPassword !== values.currentPassword) {
      // TODO: translate this message
      toast.error("new password is same old password");
      return;
    }

    setFormSubmitted(true);
    changePassword({
      confirmPassword: values.confirmPassword,
      currentPassword: values.currentPassword,
      password: values.newPassword,
    }).then(() => {
      // TODO: translate this message
      toast.success("password changed successfully");
      setFormSubmitted(false);
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
