import { trans } from "@mongez/localization";
import { isRTL } from "apps/front-office/utils/helpers";
import { NewsType } from "../types";
import LinkAsButton from "./ui/LinkAsButton";

type NewsCardPropsType = {
  news: NewsType;
};

export default function NewsCard({ news }: NewsCardPropsType) {
  return (
    <article className="p-3 sm:p-5 xl:p-8 w-full sm:w-[400px] 2xl:w-[470px] bg-white rounded flex flex-col items-start gap-y-3 sm:gap-y-5">
      <div className="w-full flex-center">
        <img src={news.imageUrl} alt="" />
      </div>
      <ul className="flex gap-x-2 sm:gap-x-5 text-xs sm:text-base">
        <li className="center-y gap-x-2">
          <span className="text-orange-450 text-xl">
            <i className="bx bx-user-circle"></i>
          </span>
          <span className="text-gray-450">{news.author}</span>
        </li>
        <li className="center-y gap-x-1">
          <span className="text-orange-450 text-xl">
            <i className="bx bx-calendar-alt"></i>
          </span>
          <span className="text-gray-450">
            {news.createdAt.toLocaleDateString(isRTL() ? "ar-Eg" : "en-Us", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        </li>
        <li className="center-y gap-x-2">
          <span className="text-orange-450 text-xl">
            <i className="bx bx-message-rounded-dots"></i>
          </span>
          <span className="text-gray-450">{news.numOfComments}</span>
        </li>
      </ul>
      <h2 className="text-base sm:text-xl font-semibold line-clamp-2">
        {news.title}
      </h2>
      <p className="text-gray-450 line-clamp-3 text-xs sm:text-base">
        {news.shortDescription}
      </p>
      <LinkAsButton
        variant="outlined"
        size="md"
        endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
        iconClassName="text-2xl"
        href="blog/:id">
        {trans("readMore").toUpperCase()}
      </LinkAsButton>
    </article>
  );
}
