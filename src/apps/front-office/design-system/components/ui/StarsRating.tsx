type StarsRatingPropsType = {
  rating?: number;
  numOfReviews?: number;
};

export default function StarsRating({
  rating = 3.5,
  numOfReviews = 0,
}: StarsRatingPropsType) {
  return (
    <div className="center-y gap-x-1">
      <ul className="center-y">
        {[1, 2, 3, 4, 5].map((star, idx) => (
          <li key={idx} className="text-orange-450">
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
      <p className="text-xs text-gray-450">({numOfReviews})</p>
    </div>
  );
}
