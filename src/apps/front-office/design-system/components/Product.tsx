import { Link } from "@mongez/react-router";
import { useState } from "react";
import { RealProduct } from "shared/data/testData";
import { ProductType } from "../types";
import QuickView from "./QuickView";
import Badge from "./ui/Badge";
import ProductButtons from "./ui/ProductButtons";
import StarsRating from "./ui/StarsRating";

type ProductPropsType = {
  product?: ProductType;
};

export default function Product({ product = RealProduct }: ProductPropsType) {
  const [viewProduct, setViewProduct] = useState(false);
  return (
    <div className="w-[230px] h-[320px] p-3 rounded border border-gray-200 hover:shadow-3">
      <Link to="/product/:id" className="flex flex-col gap-y-2">
        <div className="relative flex-center w-[200px] h-[160px] hover:bg-[rgba(0,0,0,0.2)] duration-200 group">
          <img
            src={product.imageUrl}
            alt="Product image"
            className="w-full h-full"
          />
          <ProductButtons setViewProductQuick={setViewProduct} />
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

        <div className="absolute flex flex-col items-start gap-y-2">
          {product.badges?.map(badge => <Badge key={badge} title={badge} />)}
        </div>
      </Link>

      {viewProduct && (
        <div className="z-50 absolute top-0 left-0 min-w-full min-h-full flex-center bg-[rgba(0,0,0,0.8)] border border-red-400">
          <QuickView product={product} setCloseViewProduct={setViewProduct} />
        </div>
      )}
    </div>
  );
}
