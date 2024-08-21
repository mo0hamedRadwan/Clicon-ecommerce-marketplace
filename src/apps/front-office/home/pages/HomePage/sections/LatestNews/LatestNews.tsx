import { trans } from "@mongez/localization";
import NewsCard from "apps/front-office/design-system/components/NewsCard";
import { news } from "shared/data/testData";

export default function LatestNews() {
  return (
    <div className="py-20 bg-gray-150">
      <div className="container">
        <h2 className="text-4xl font-semibold text-center">{`${trans("latest")} ${trans("news")}`}</h2>
        <ul className="mt-5 sm:mt-10 center-y justify-center gap-5 flex-wrap xl:flex-nowrap">
          {news.map(newsBlog => (
            <li key={newsBlog.id}>
              <NewsCard news={newsBlog} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
