import { trans } from "@mongez/localization";
import { accountAtom } from "apps/front-office/account/atoms/accountAtom";
import URLS from "apps/front-office/utils/urls";
import LinkAsButton from "components/ui/LinkAsButton";
import femaleProfileImg from "shared/assets/images/profileImg/female.png";
import maleProfileImg from "shared/assets/images/profileImg/male.png";

export default function AccountInfoCard() {
  const user = accountAtom.use("user");

  return (
    <div className="w-full border border-gray-150 shadow-2">
      <h3 className="p-5 font-semibold border-b border-gray-150">
        {trans("accountInfo").toUpperCase()}
      </h3>
      <div className="p-5 flex flex-col items-start gap-y-5">
        <div className="center-y gap-x-5">
          <img
            src={user.gender ? maleProfileImg : femaleProfileImg}
            alt="profile image"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col gap-y-1">
            <h3 className="font-semibold">{user.name}</h3>
            <h4 className="text-sm text-gray-550">Dhaka - 1207, Bangladesh</h4>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="center-y gap-x-1">
            <span>{trans("email")}:</span>
            <span className="text-sm text-gray-550">{user.email}</span>
          </p>
          <p className="center-y gap-x-1">
            <span>{trans("secEmail")}:</span>
            <span className="text-sm text-gray-550">{user.email}</span>
          </p>
          <p className="center-y gap-x-1">
            <span>{trans("phone")}:</span>
            <span className="text-sm text-gray-550">+{user.phoneNumber}</span>
          </p>
        </div>
        <LinkAsButton
          variant="outlined"
          href={URLS.userAccount.settings}
          className="border-sky-550 text-sky-550 hover:bg-sky-100">
          {trans("editAccount").toUpperCase()}
        </LinkAsButton>
      </div>
    </div>
  );
}
