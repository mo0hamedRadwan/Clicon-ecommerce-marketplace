import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { wishlistAtom } from "apps/front-office/design-system/atoms/wishlistAtom";
import Loader2 from "apps/front-office/design-system/components/loaders/Loader2";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import LinkAsButton from "components/ui/LinkAsButton";
import { useState } from "react";

export default function WishlistMenu() {
  const { loading, wishlist } = wishlistAtom.useValue();
  const [loadingItem, setLoadingItem] = useState(false);

  return (
    <div
      className={`hidden xs:group-hover:block z-20 absolute top-[50px] ${isRTL() ? "left-0" : "right-0"} w-[300px] max-h-[500px] p-4 bg-white text-black text-base rounded shadow-2`}>
      {loading ? (
        <div className="w-full h-[200px]">
          <Loader2 />
        </div>
      ) : (
        <>
          <h3 className="text-xl font-semibold center-y gap-x-1">
            <span>{trans("wishlist")}</span>
            <span>
              (
              {`${wishlist.products.length < 9 ? "0" : ""}${wishlist.products.length}`}
              )
            </span>
          </h3>
          <div className="mt-3 w-full h-[1px] bg-gray-300"></div>
          <ul className="py-3 flex flex-col gap-y-3">
            {wishlist.products.map(product => (
              <li key={product.id} className="center-y">
                <Link
                  to={URLS.product.view(product)}
                  className="flex-grow h-[60px] center-y gap-x-5">
                  <div className="min-w-[60px] h-full">
                    <img
                      src={product.images[0].url}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-md border border-gray-200"
                    />
                  </div>
                  <p className="line-clamp-2">{product.name}</p>
                </Link>
                {/* onClick Delete Product from wishlist */}
                <button
                  className="text-gray"
                  disabled={loadingItem}
                  onClick={() =>
                    wishlistAtom.removeFromWishlist(setLoadingItem, product)
                  }>
                  x
                </button>
              </li>
            ))}
          </ul>
          <div className="mb-3 w-full h-[1px] bg-gray-300"></div>
          <div className="mt-2 flex flex-col gap-y-2">
            <LinkAsButton variant="contained" href={URLS.wishlist}>
              {trans("wishlist").toUpperCase()}
            </LinkAsButton>
          </div>
        </>
      )}
    </div>
  );
}
