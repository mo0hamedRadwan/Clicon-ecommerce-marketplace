import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { accountAtom } from "apps/front-office/account/atoms/accountAtom";
import Button from "apps/front-office/design-system/components/form/Button";
import EmailInput from "apps/front-office/design-system/components/form/EmailInput";
import TextInput from "apps/front-office/design-system/components/form/TextInput";
import Loader2 from "apps/front-office/design-system/components/loaders/Loader2";
import { useState } from "react";
import femaleProfileImg from "shared/assets/images/profileImg/female.png";
import maleProfileImg from "shared/assets/images/profileImg/male.png";

export default function AccountSettingsForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { user, loading } = accountAtom.useValue();

  const handleEditAccount = ({ values }) => {
    setFormSubmitted(true);
    accountAtom.updateUser(values);
  };

  if (loading || !user) return <div>loading...</div>;

  return (
    <div className="border border-gray-150">
      <h2 className="p-5 font-semibold border-b border-gray-150">
        {trans("accountSettings").toUpperCase()}
      </h2>
      <div className="p-5 w-full flex items-start justify-center flex-wrap xl:flex-nowrap gap-5">
        <div className="w-44 h-44 rounded-full border border-orange-450">
          <img
            src={user.gender ? maleProfileImg : femaleProfileImg}
            alt="profile image"
            className="w-full h-full rounded-full object-contain"
          />
        </div>

        <Form
          className="flex-grow flex flex-col items-start gap-y-5"
          onSubmit={handleEditAccount}>
          <div className="w-full center-y gap-5">
            <TextInput
              name="accountId"
              label="accountId"
              defaultValue={user.id}
              disabled={true}
              required
            />
            <TextInput
              name="fullName"
              label="fullName"
              defaultValue={user.name}
              disabled={true}
              required
            />
          </div>
          <div className="w-full center-y gap-5">
            <TextInput
              name="firstName"
              label="firstName"
              defaultValue={user.firstName}
              required
            />
            <TextInput
              name="lastName"
              label="lastName"
              defaultValue={user.lastName}
              required
            />
          </div>
          <div className="w-full center-y gap-5">
            {/* <EmailInput
              disabled={true}
              name="secondaryEmail"
              label="secondaryEmail"
              defaultValue="secondaryEmail"
            /> */}
            <EmailInput
              name="email"
              label="email"
              defaultValue={user.email}
              required
            />
            <TextInput
              name="phoneNumber"
              label="phoneNumber"
              defaultValue={user.phoneNumber}
              required
            />
          </div>
          <Button
            type="submit"
            disabled={loading || formSubmitted}
            onClick={() => console.log("User Account Update")}>
            {loading ? <Loader2 /> : <span>{trans("saveChanges")}</span>}
          </Button>
        </Form>
      </div>
    </div>
  );
}
