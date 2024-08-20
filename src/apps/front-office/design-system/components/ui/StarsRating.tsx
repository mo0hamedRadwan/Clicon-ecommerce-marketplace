import { trans } from "@mongez/localization";

type StarsRatingPropsType = {
  rating?: number;
  numOfReviews?: number;
  longRating?: boolean;
  starClassName?: string;
};

export default function StarsRating({
  rating = 3.5,
  numOfReviews = 0,
  longRating = false,
  starClassName = "text-orange-450",
}: StarsRatingPropsType) {
  return (
    <div className="center-y gap-x-2">
      <ul className="center-y">
        {[1, 2, 3, 4, 5].map((star, idx) => (
          <li key={idx} className={`${starClassName}`}>
            {star <= rating ? (
              <i className="bx bxs-star"></i>
            ) : star === Math.ceil(rating) ? (
              <i className="bx bxs-star-half"></i>
            ) : (
              <i className="bx bx-star text-gray-450"></i>
            )}
          </li>
        ))}
      </ul>
      {longRating && (
        <p className="font-bold text-black text-xs sm:text-base">{`${rating} ${trans("stars")} ${trans("rating")}`}</p>
      )}
      <p className="text-sm font-medium text-gray-450">
        {`(${numOfReviews.toLocaleString()}${longRating ? ` ${trans("users")} ${trans("feedback")}` : ""})`}
      </p>
    </div>
  );
}
