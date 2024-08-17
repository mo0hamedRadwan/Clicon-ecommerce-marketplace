import { features } from "shared/data/homeData";
import FeatureItem from "./FeatureItem";

export default function Features() {
  return (
    <div className="container">
      <ul className="hidden xs:space-between flex-wrap xl:flex-nowrap py-5 rounded shadow-2 border border-gray-200">
        {features.map((feature, index) => (
          <li
            key={feature.title}
            className="center-y p-5 gap-x-5 text-neutral-950">
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
    </div>
  );
}
