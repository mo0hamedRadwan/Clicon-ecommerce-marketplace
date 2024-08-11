import { features } from "shared/data/homeData";
import FeatureItem from "./FeatureItem";

export default function Features() {
  return (
    <ul className="container hidden sm:space-between flex-wrap p-5 rounded shadow-2">
      {features.map((feature, index) => (
        <li key={feature.title} className="center-y p-5 gap-x-5 text-black">
          {index > 0 && (
            <div className="hidden 2xl:block w-[2px] h-full bg-gray-200"></div>
          )}
          <FeatureItem
            icon={feature.icon}
            title={feature.title}
            subtitle={feature.subtitle}
          />
        </li>
      ))}
    </ul>
  );
}
