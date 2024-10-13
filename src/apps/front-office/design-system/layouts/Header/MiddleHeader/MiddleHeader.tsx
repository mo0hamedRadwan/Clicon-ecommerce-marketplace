import { Link } from "@mongez/react-router";
import user from "apps/front-office/account/user";
import { cartAtom } from "apps/front-office/design-system/atoms/cartAtom";
import { compareAtom } from "apps/front-office/design-system/atoms/compareAtom";
import { wishlistAtom } from "apps/front-office/design-system/atoms/wishlistAtom";
import URLS from "apps/front-office/utils/urls";
import headerLogo from "assets/images/HeaderLogo.png";
import AccountMenu from "./AccountMenu";
import CartMenu from "./CartMenu";
import MyAccountMenu from "./MyAccountMenu";
import NumOfItems from "./NumOfItems";
import SearchForm from "./SearchForm";
import WishlistMenu from "./WishlistMenu";

export default function MiddleHeader() {
  const cartTotalProducts = cartAtom.use("totalProducts");
  const wishlistTotalProducts = wishlistAtom.use("totalProducts");
  const compareTotalProducts = compareAtom.use("products").length;

  return (
    <div className="h-[44px] sm:h-[88px] bg-sky-750 text-white">
      <div className="container h-full space-between-center">
        <div className="w-[85px] h-6 sm:w-[177px] sm:h-12">
          <Link to={URLS.home}>
            <img
              src={headerLogo}
              alt="Clicon Logo image"
              className="w-full h-full"
            />
          </Link>
        </div>

        <SearchForm />

        <ul className="h-full center-y gap-x-7">
          {/* Compare Icon (hidden md:block) */}
          <li className="block md:hidden relative md:pb-3 group">
            <Link to={URLS.compare} className="text-2xl md:text-4xl">
              <i className="bx bx-git-compare"></i>
            </Link>
            <NumOfItems number={compareTotalProducts} />
          </li>
          <li className="relative md:pb-3 group">
            <Link to={URLS.cart} className="text-2xl md:text-4xl">
              <i className="bx bx-cart"></i>
            </Link>
            <NumOfItems number={cartTotalProducts} />
            {cartTotalProducts > 0 && <CartMenu />}
          </li>
          <li className="relative md:pb-3 group">
            <Link to={URLS.wishlist} className="text-2xl md:text-4xl">
              <i className="bx bx-heart"></i>
            </Link>
            <NumOfItems number={wishlistTotalProducts} />
            {wishlistTotalProducts > 0 && <WishlistMenu />}
          </li>
          <li className="relative md:pb-3 group">
            <Link
              to={URLS.userAccount.dashboard}
              className="text-2xl md:text-4xl">
              <i className="bx bx-user"></i>
            </Link>
            {user.isLoggedIn() ? <MyAccountMenu /> : <AccountMenu />}
          </li>

          {/* {middleHeaderIcons.map(icon => (
            <li key={icon.name} className="relative pb-3 group">
              {icon.name === "cart" ? (
                <CartMenu />
              ) : icon.name === "wishlist" ? (
                <WishlistMenu />
              ) : (
                <AccountMenu />
              )}
              <Link to={`/${icon.name}`} className="">
                <i className={`bx ${icon.icon}`}></i>
              </Link>
              {icon.numOfItems !== 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 flex-center bg-white rounded-full text-sm text-black">
                  {icon.numOfItems}
                </span>
              )}
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}
