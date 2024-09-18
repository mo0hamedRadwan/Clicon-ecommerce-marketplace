import { trans } from "@mongez/localization";
import URLS from "apps/front-office/utils/urls";
import checkedCircleIcon from "assets/images/SVGs/CheckCircle.svg";
import LinkAsButton from "components/ui/LinkAsButton";

export default function CheckoutSuccessPage() {
  return (
    <div className="py-20 container flex-center text-center">
      <div className="w-[300px] sm:w-[500px] flex-center flex-col gap-y-5">
        <img src={checkedCircleIcon} className="w-24 h-24" />
        <h3 className="text-2xl font-semibold">{`${trans("yourOrder")} ${trans("isSuccessfully")}`}</h3>
        <p className=" text-sm sm:text-base text-gray-550">
          Pellentesque sed lectus nec tortor tristique accumsan quis dictum
          risus. Donec volutpat mollis nulla non facilisis.
        </p>
        <div className="flex-center gap-x-5">
          {/* I Will Merge Buttons props to list and use map function */}
          <LinkAsButton
            variant="outlined"
            startIcon="bxs-layer"
            href={URLS.userAccount.dashboard}
            className="md:text-base font-semibold"
            iconClassName="text-lg">
            {`${trans("goto")} ${trans("dashboard")}`.toUpperCase()}
          </LinkAsButton>
          <LinkAsButton
            variant="contained"
            startIcon="bx-home"
            href={"order/:id"}
            className="md:text-base font-semibold"
            iconClassName="text-lg">
            {`${trans("view")} ${trans("order")}`.toUpperCase()}
          </LinkAsButton>
        </div>
      </div>
    </div>
  );
}
