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
    <div className="w-60 md:w-72 center-y gap-x-5">
      <span className="text-5xl font-thin">
        <i className={`bx ${icon}`}></i>
      </span>
      <div className="flex flex-col gap-y-2">
        <span className="text-base md:text-xl font-semibold">
          {trans(title).toUpperCase()}
        </span>
        <span className="text-sm">{trans(subtitle)}</span>
      </div>
    </div>
  );
}
