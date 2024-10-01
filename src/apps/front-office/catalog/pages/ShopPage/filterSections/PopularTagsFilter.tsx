import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { popularTags } from "shared/data/footerData";

export default function PopularTagsFilter() {
  return (
    <>
      <h2 className="text-xl">{trans("popularTags").toUpperCase()}</h2>
      <ul className="flex flex-row flex-wrap gap-2">
        {popularTags.map(popularTag => (
          <li
            key={popularTag.name}
            className="py-1 px-2 text-sm text border border-gray-150 rounded-sm hover:bg-orange-150 hover:text-orange-450 hover:border-orange-450 duration-200">
            <Link to={popularTag.link}>{popularTag.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
