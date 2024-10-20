import WishlistList from "apps/front-office/catalog/pages/WishlistPage/sections/WishlistList";
import WishlistTable from "apps/front-office/catalog/pages/WishlistPage/sections/WishlistTable";
import { wishlistAtom } from "apps/front-office/design-system/atoms/wishlistAtom";
import { useEffect } from "react";

export default function WishlistTab() {
  const { wishlist } = wishlistAtom.useValue();

  useEffect(() => {
    wishlistAtom.loadWishlistItems();
  }, []);

  return (
    <>
      <div className="hidden xl:block">
        <WishlistTable products={wishlist.products} />
      </div>
      <div className="block xl:hidden">
        <WishlistList products={wishlist.products} />
      </div>
    </>
  );
}
