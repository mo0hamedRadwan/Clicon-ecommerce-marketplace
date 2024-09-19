import { trans } from "@mongez/localization";
import LinkAsButton from "apps/front-office/design-system/components/ui/LinkAsButton";
import URLS from "apps/front-office/utils/urls";
import profileImg from "shared/assets/images/profileImg/profile.jpg";

export default function AccountInfoCard() {
  return (
    <div className="w-full border border-gray-150 shadow-2">
      <h3 className="p-5 font-semibold border-b border-gray-150">
        {trans("accountInfo").toUpperCase()}
      </h3>
      <div className="p-5 flex flex-col items-start gap-y-5">
        <div className="center-y gap-x-5">
          <img
            src={profileImg}
            alt="profile image"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col gap-y-1">
            <h3 className="font-semibold">Kevin Gilbert</h3>
            <h4 className="text-sm text-gray-550">Dhaka - 1207, Bangladesh</h4>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="center-y gap-x-1">
            <span>{trans("email")}:</span>
            <span className="text-sm text-gray-550">
              kevin.gilbert@gmail.com
            </span>
          </p>
          <p className="center-y gap-x-1">
            <span>{trans("secEmail")}:</span>
            <span className="text-sm text-gray-550">kevin12345@gmail.com</span>
          </p>
          <p className="center-y gap-x-1">
            <span>{trans("phone")}:</span>
            <span className="text-sm text-gray-550">+1-202-555-0118</span>
          </p>
        </div>
        <LinkAsButton
          variant="outlined"
          href={URLS.userAccount.settings}
          className="border-sky-550 text-sky-550">
          {trans("editAccount").toUpperCase()}
        </LinkAsButton>
      </div>
    </div>
  );
}
