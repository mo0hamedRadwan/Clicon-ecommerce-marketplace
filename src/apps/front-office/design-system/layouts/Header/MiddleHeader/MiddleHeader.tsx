import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import user from "apps/front-office/account/user";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import headerLogo from "assets/images/HeaderLogo.png";
import AccountMenu from "./AccountMenu";
import CartMenu from "./CartMenu";
import MyAccountMenu from "./MyAccountMenu";
import NumOfItems from "./NumOfItems";
import WishlistMenu from "./WishlistMenu";

export default function MiddleHeader() {
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
        <div className="relative hidden sm:block sm:w-[320px] lg:w-[500px] xl:w-[650px] text-xl text-black">
          <input
            type="text"
            className="w-full py-3 px-5 rounded outline-none "
            placeholder={`${trans("searchFor")} ${trans("products")}`}
          />
          <span
            className={`absolute top-2 ${isRTL() ? "left-6" : "right-6"} text-3xl`}>
            <i className="bx bx-search"></i>
          </span>
        </div>
        <ul className="h-full center-y gap-x-7">
          <li className="relative md:pb-3 group">
            <Link to={URLS.cart} className="text-2xl md:text-4xl">
              <i className="bx bx-cart"></i>
            </Link>
            <NumOfItems number={3} />
            <CartMenu />
          </li>
          <li className="relative md:pb-3 group">
            <Link to={URLS.wishlist} className="text-2xl md:text-4xl">
              <i className="bx bx-heart"></i>
            </Link>
            <NumOfItems number={2} />
            <WishlistMenu />
          </li>
          <li className="relative md:pb-3 group">
            <Link to={URLS.account} className="text-2xl md:text-4xl">
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
