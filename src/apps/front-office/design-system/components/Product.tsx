import { Link } from "@mongez/react-router";
import { smallBannerProduct2 } from "shared/data/testData";
import { ProductType } from "../types";
import Badge from "./ui/Badge";
import ProductButtons from "./ui/ProductButtons";
import StarsRating from "./ui/StarsRating";

type ProductPropsType = {
  product?: ProductType;
};

export default function Product({
  product = smallBannerProduct2,
}: ProductPropsType) {
  return (
    <div className="w-[230px] h-[320px] p-3 rounded border border-gray-200 hover:shadow-3">
      <Link to="/product/:id" className="flex flex-col gap-y-2">
        <div className="relative flex-center w-[200px] h-[160px] group">
          <img
            src={product.imageUrl}
            alt="Product image"
            className="w-full h-full"
          />
          <ProductButtons product={product} />
        </div>
        <StarsRating
          rating={product.rating}
          numOfReviews={product.numOfReviews}
        />
        <p className="text-lg line-clamp-2">{product.name}</p>
        <p className="center-y gap-x-3 text-base">
          {product.oldPrice && (
            <span className="text-gray-450 line-through">
              ${product.oldPrice}
            </span>
          )}
          <span className="font-semibold text-sky-550">${product.price}</span>
        </p>

        <Badge />
      </Link>
    </div>
  );
}
