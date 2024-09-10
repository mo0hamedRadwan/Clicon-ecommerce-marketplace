import { wishlistAtom } from "apps/front-office/design-system/atoms/wishlistAtom";
import { useEffect } from "react";
import WishlistList from "./sections/WishlistList";
import WishlistTable from "./sections/WishlistTable";

export default function WishlistPage() {
  // const { loading, loadingItem, wishlist } = wishlistAtom.useValue();
  const { wishlist } = wishlistAtom.useValue();

  useEffect(() => {
    wishlistAtom.loadWishlistItems();
  }, []);

  return (
    <div className="container py-10 sm:py-20">
      <div className="hidden lg:block">
        <WishlistTable products={wishlist.products} />
      </div>
      <div className="block lg:hidden">
        <WishlistList products={wishlist.products} />
      </div>
    </div>
  );
}
