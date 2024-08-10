import { features } from "shared/data/homeData";
import FeatureItem from "./FeatureItem";

export default function Features() {
  return (
    <ul className="container hidden sm:space-between flex-wrap p-5 rounded shadow-2">
      {features.map((feature, index) => (
        <li key={feature.title} className="p-5 center-y gap-x-5 text-black">
          <FeatureItem
            icon={feature.icon}
            title={feature.title}
            subtitle={feature.subtitle}
          />
          {index !== features.length - 1 && (
            <div className="hidden xl:block w-[2px] h-full bg-gray-200"></div>
          )}
        </li>
      ))}
    </ul>
  );
}
