import { trans } from "@mongez/localization";
import Button from "apps/front-office/design-system/components/form/Button";
import { isRTL } from "apps/front-office/utils/helpers";
import { useState } from "react";

type OfferNotificationPropsType = {
  discount?: number;
};

export default function OfferNotification({
  discount = 50,
}: OfferNotificationPropsType) {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [closeNotification, setCloseNotification] = useState(false);
  return (
    <>
      {!closeNotification && (
        <div className="h-20 relative hidden md:center-y bg-gray-950 text-white ">
          <div className="container h-full center-y justify-around 2xl:justify-between">
            <div className="center-y gap-x-2 text-2xl font-semibold">
              <span className="py-1 px-3 bg-amber-250 text-black -rotate-6">
                {trans("black")}
              </span>
              <span>{trans("friday")}</span>
            </div>
            <div className="center-y">
              <span>{trans("upTo")}</span>
              <span className="mx-2 text-yellow-450 text-5xl">{discount}%</span>
              <span className="text-2xl">{trans("off").toUpperCase()}</span>
            </div>
            <Button
              endIcon="bx-right-arrow-alt"
              className="bg-yellow-450 hover:bg-yellow-500"
              onClick={() => console.log("Add Route to Browse history")}>
              {`${trans("shop")} ${trans("now")}`.toUpperCase()}
            </Button>
            {/* <Link
              to="/shop"
              className="py-3 px-6 bg-yellow-500 text-black font-semibold">
              <span className="">{trans("shopNow").toUpperCase()}</span>
              <span>
                <i className="bx bx-right-arrow-alt"></i>
              </span>
            </Link> */}
          </div>
          <button
            className={`absolute ${isRTL() ? "left-5" : "right-5"} py-1 px-3 bg-neutral-750 rounded`}
            onClick={() => setCloseNotification(!closeNotification)}>
            x
          </button>
        </div>
      )}
    </>
  );
}
