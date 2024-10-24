import { trans } from "@mongez/localization";
import { wishlistAtom } from "apps/front-office/design-system/atoms/wishlistAtom";
import URLS from "apps/front-office/utils/urls";
import Loader1 from "components/loaders/Loader1";
import LinkAsButton from "components/ui/LinkAsButton";
import WishlistList from "./WishlistList";
import WishlistTable from "./WishlistTable";

export default function WishlistDetailsSection() {
  // const { loading, wishlist } = wishlistAtom.useValue();
  const { loading, wishlist } = wishlistAtom.useValue();

  // useEffect(() => {
  //   wishlistAtom.loadWishlistItems();
  // }, []);

  if (wishlist.products.length === 0 && !loading) {
    return (
      <div className="h-60 flex flex-col gap-16">
        <h2 className="text-2xl font-medium">{trans("wishlist")}</h2>
        <div className="flex flex-col items-center gap-16">
          <p className="text-center">{trans("yourWishlistIsEmpty")}</p>
          <LinkAsButton href={URLS.shop.root}>
            {trans("continueShopping")}
          </LinkAsButton>
        </div>
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <div className="w-full h-[500px] flex justify-center">
          <Loader1 />
        </div>
      ) : (
        <>
          <div className="hidden lg:block">
            <WishlistTable products={wishlist.products} />
          </div>
          <div className="block lg:hidden">
            <WishlistList products={wishlist.products} />
          </div>
        </>
      )}
    </>
  );
}
