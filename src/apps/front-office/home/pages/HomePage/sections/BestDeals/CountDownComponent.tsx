import { trans } from "@mongez/localization";
import { useCountDown } from "apps/front-office/design-system/hooks/use-count-down";

type CountDownComponentPropsType = {
  date: Date;
};

export default function CountDownComponent({
  date,
}: CountDownComponentPropsType) {
  const countDown = useCountDown(date);

  return (
    <div className="center-y gap-x-2">
      <p className="font-semibold">{`${trans("deals")} ${trans("endIn")}`}</p>
      <p className="py-1 px-1 sm:px-3 bg-amber-250 select-none">
        <span>{countDown.days}d : </span>
        <span>{countDown.hours}h : </span>
        <span>{countDown.minutes}m : </span>
        <span>{countDown.seconds}s</span>
      </p>
    </div>
  );
}
