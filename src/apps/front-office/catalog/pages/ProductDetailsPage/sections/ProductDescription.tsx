import { trans } from "@mongez/localization";
import { isRTL } from "apps/front-office/utils/helpers";
import creditCardIcon from "assets/images/SVGs/CreditCard2.svg";
import handshakeIcon from "assets/images/SVGs/Handshake.svg";
import headphoneIcon from "assets/images/SVGs/Headphones2.svg";
import medalIcon from "assets/images/SVGs/Medal.svg";
import truckIcon from "assets/images/SVGs/Truck.svg";

type ProductDescriptionPropsType = {
  description: string;
};

export default function ProductDescription({
  description,
}: ProductDescriptionPropsType) {
  return (
    <div className="flex flex-wrap xl:flex-nowrap md:justify-center gap-5 sm:gap-10">
      <div className="w-full md:w-[680px] flex flex-col gap-3">
        <h3 className="font-semibold text-lg">{trans("description")}</h3>
        <p>{description}</p>
        <p>
          Even the most ambitious projects are easily handled with up to 10 CPU
          cores, up to 16 GPU cores, a 16-core Neural Engine, and dedicated
          encode and decode media engines that support H.264, HEVC, and ProRes
          codecs.
        </p>
      </div>
      <div className="block xs:hidden xl:block h-[1px] xs:h-[270px] w-full xs:w-[1px] bg-gray-150"></div>
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-lg">{trans("features")}</h3>
        <ul className="w-full sm:w-[280px] flex flex-col gap-y-3">
          <li className="center-y gap-x-2">
            <img src={medalIcon} alt="" />
            <span>{trans("freeYearWarranty")}</span>
          </li>
          <li className="center-y gap-x-2">
            <img src={truckIcon} alt="" />
            <span>{`${trans("freeShipping")} & ${trans("fastedDelivery")}`}</span>
          </li>
          <li className="center-y gap-x-2">
            <img src={creditCardIcon} alt="" />
            <span>{`100% ${trans("moneyBackGuarantee")}`}</span>
          </li>
          <li className="center-y gap-x-2">
            <img src={handshakeIcon} alt="" />
            <span>{`24/7 ${trans("customerSupport")}`}</span>
          </li>
          <li className="center-y gap-x-2">
            <img src={headphoneIcon} alt="" />
            <span>{trans("securePaymentMethod")}</span>
          </li>
        </ul>
      </div>
      <div className="block xs:hidden xl:block h-[1px] xs:h-[270px] w-full xs:w-[1px] bg-gray-150"></div>
      <div>
        <h3 className="mb-3 font-semibold text-lg">
          {trans("shippingInformation")}
        </h3>
        <ul className="w-full sm:w-[290px] flex flex-col gap-y-3 text-sm">
          <li className="center-y gap-x-2">
            <span className="font-semibold">{trans("Courier")}:</span>
            <span className="text-gray-550">
              {`2 - 4 ${trans("days")}${isRTL() ? "و" : ","} ${trans("freeShipping")}`}
            </span>
          </li>
          <li className="center-y gap-x-2">
            <span className="font-semibold">{trans("localShipping")}:</span>
            <span className="text-gray-550">
              {`${trans("upTo")} ${trans("oneWeek")}${isRTL() ? "و" : ","} $19.00`}
            </span>
          </li>
          <li className="center-y gap-x-2">
            <span className="font-semibold">{trans("UPSGroundShipping")}:</span>
            <span className="text-gray-550">
              {`2 - 4 ${trans("days")}${isRTL() ? "و" : ","} $29.00`}
            </span>
          </li>
          <li className="center-y gap-x-2">
            <span className="font-semibold">
              {trans("unishopGlobalExport")}:
            </span>
            <span className="text-gray-550">
              {`2 - 4 ${trans("days")}${isRTL() ? "و" : ","} $29.00`}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
