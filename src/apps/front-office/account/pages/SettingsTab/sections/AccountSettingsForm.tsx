import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import Button from "apps/front-office/design-system/components/form/Button";
import EmailInput from "apps/front-office/design-system/components/form/EmailInput";
import TextInput from "apps/front-office/design-system/components/form/TextInput";
import profileImg from "shared/assets/images/profileImg/Avatar.png";

export default function AccountSettingsForm() {
  const handleEditAccount = ({ values }) => {
    console.log(values);
  };

  return (
    <div className="border border-gray-150">
      <h2 className="p-5 font-semibold border-b border-gray-150">
        {trans("accountSettings").toUpperCase()}
      </h2>
      <div className="p-5 w-full flex items-start justify-center flex-wrap xl:flex-nowrap gap-5">
        <div className="w-44 h-44">
          <img
            src={profileImg}
            alt="profile image"
            className="w-full h-full rounded-full"
          />
        </div>

        <Form
          className="flex-grow flex flex-col items-start gap-y-5"
          onSubmit={handleEditAccount}>
          <div className="w-full center-y gap-5">
            <TextInput
              name="displayName"
              label="displayName"
              value="displayName"
            />
            <TextInput name="userName" label="userName" value="userName" />
          </div>
          <div className="w-full center-y gap-5">
            <TextInput name="fullName" label="fullName" value="fullName" />
            <EmailInput
              name="emailAddress"
              label="emailAddress"
              value="emailAddress"
            />
          </div>
          <div className="w-full center-y gap-5">
            <EmailInput
              name="secondaryEmail"
              label="secondaryEmail"
              value="secondaryEmail"
            />
            <TextInput
              name="phoneNumber"
              label="phoneNumber"
              value="phoneNumber"
            />
          </div>
          <Button type="submit" onClick={() => console.log("")}>
            {trans("saveChanges")}
          </Button>
        </Form>
      </div>
    </div>
  );
}
