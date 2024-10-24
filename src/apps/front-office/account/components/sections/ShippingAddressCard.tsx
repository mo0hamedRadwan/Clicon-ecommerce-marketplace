import { trans } from "@mongez/localization";
import URLS from "apps/front-office/utils/urls";
import LinkAsButton from "components/ui/LinkAsButton";
import { accountAtom } from "../../atoms/accountAtom";

export default function ShippingAddressCard() {
  const user = accountAtom.use("user");

  return (
    <div className="w-full border border-gray-150 shadow-2">
      <h3 className="p-5 font-semibold border-b border-gray-150">
        {trans("shippingAddress").toUpperCase()}
      </h3>
      <div className="p-5 flex flex-col items-start gap-y-5">
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm text-gray-550">
            East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C,
            Flat No. 5D, Dhaka - 1200, Bangladesh
          </p>
          <p className="center-y gap-x-1">
            <span>{trans("phone")}:</span>
            <span className="text-sm text-gray-550">{user.phoneNumber}</span>
          </p>
          <p className="center-y gap-x-1">
            <span>{trans("email")}:</span>
            <span className="text-sm text-gray-550">{user.email}</span>
          </p>
        </div>
        <LinkAsButton
          variant="outlined"
          href={URLS.userAccount.cardsAndAddresses}
          className="border-sky-550 text-sky-550">
          {trans("editAddress").toUpperCase()}
        </LinkAsButton>
      </div>
    </div>
  );
}
