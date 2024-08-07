import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
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
        <div className="h-20 bg-gray-950 text-white">
          <div className="container h-full space-between-center">
            <div className="center-y gap-x-2 text-2xl font-semibold">
              <span className="py-1 px-3 bg-yellow-300 text-black -rotate-6">
                {trans("black")}
              </span>
              <span>{trans("friday")}</span>
            </div>
            <div className="center-y">
              <span>{trans("upTo")}</span>
              <span className="mx-2 text-yellow-500 text-5xl">{discount}%</span>
              <span className="text-2xl">{trans("off").toUpperCase()}</span>
            </div>
            <Link
              to="/shop"
              className="py-3 px-6 bg-yellow-500 text-black font-semibold">
              <span className="">{trans("shopNow").toUpperCase()}</span>
              <span>
                <i className="bx bx-right-arrow-alt"></i>
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
