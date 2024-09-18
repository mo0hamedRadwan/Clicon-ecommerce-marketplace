type AccountStatsCardPropsType = {
  icon: string;
  number: number;
  subtitle: string;
  className: string;
  iconClassName: string;
};

export default function AccountStatsCard({
  icon,
  number,
  subtitle,
  className,
  iconClassName,
}: AccountStatsCardPropsType) {
  return (
    <div
      className={`p-5 w-full xs:w-[330px] lg:w-[360px] h-24 flex center-y gap-5 shadow-4 ${className}`}>
      <div className={`p-2 bg-white text-4xl ${iconClassName}`}>
        <i className={`bx ${icon}`}></i>
      </div>
      <div className="w-full h-full flex flex-col justify-between">
        <h3 className="text-2xl font-semibold">{`${number < 9 ? "0" : ""}${number}`}</h3>
        <p className="text-gray-550">{subtitle}</p>
      </div>
    </div>
  );
}
