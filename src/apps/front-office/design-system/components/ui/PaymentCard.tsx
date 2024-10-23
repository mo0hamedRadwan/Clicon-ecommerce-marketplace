import { trans } from "@mongez/localization";

type PaymentCardPropsType = {
  balance: number;
  cardNumber: string;
  paymentTypeImg: string;
  className: string;
};

export default function PaymentCard({
  balance,
  cardNumber,
  paymentTypeImg,
  className,
}: PaymentCardPropsType) {
  return (
    <div
      className={`w-full xs:w-[300px] p-5 flex flex-col gap-y-5 text-white rounded ${className}`}>
      <div className="w-full space-between">
        <span>${balance.toFixed(2)}</span>
        <button>...</button>
      </div>
      <div className="flex flex-col gap-y-2">
        <h4 className="text-xs opacity-65">
          {trans("cardNumber").toUpperCase()}
        </h4>
        <div className="center-y gap-x-2">
          <span>{`**** **** **** ${cardNumber.slice(-4)}`}</span>
          <span></span>
        </div>
      </div>
      <div className="w-full space-between">
        <img src={paymentTypeImg} alt="payment types image" />
        <span>Kevin Gilbert</span>
      </div>
    </div>
  );
}
