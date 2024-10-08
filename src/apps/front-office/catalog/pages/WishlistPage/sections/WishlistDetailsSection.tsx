import { wishlistAtom } from "apps/front-office/design-system/atoms/wishlistAtom";
import { useEffect } from "react";
import WishlistList from "./WishlistList";
import WishlistTable from "./WishlistTable";

export default function WishlistDetailsSection() {
  // const { loading, wishlist } = wishlistAtom.useValue();
  const { wishlist } = wishlistAtom.useValue();

  useEffect(() => {
    wishlistAtom.loadWishlistItems();
  }, []);

  return (
    <>
      <div className="hidden lg:block">
        <WishlistTable products={wishlist.products} />
      </div>
      <div className="block lg:hidden">
        <WishlistList products={wishlist.products} />
      </div>
    </>
  );
}
