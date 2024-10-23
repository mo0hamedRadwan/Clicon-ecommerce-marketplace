import { trans } from "@mongez/localization";

type FeatureItemPropsType = {
  icon: string;
  title: string;
  subtitle: string;
};

export default function FeatureItem({
  icon,
  title,
  subtitle,
}: FeatureItemPropsType) {
  return (
    <div className="w-60 md:w-[260px] center-y gap-x-3">
      <div className="text-4xl">
        {/* <i className={`bx ${icon}`}></i> */}
        <img src={icon} alt="icon" />
      </div>
      <div className="flex flex-col gap-y-[2px]">
        <span className="text-base md:text-lg font-medium">
          {trans(title).toUpperCase()}
        </span>
        <span className="text-sm text-gray-550">{trans(subtitle)}</span>
      </div>
    </div>
  );
}
