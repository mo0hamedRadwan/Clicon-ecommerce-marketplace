import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import headerLogo from "assets/images/HeaderLogo.png";
import { middleHeaderIcons } from "shared/data/headerData";
import AccountMenu from "./AccountMenu";
import CartMenu from "./CartMenu";
import WishlistMenu from "./WishlistMenu";

export default function MiddleHeader() {
  return (
    <div className="h-[88px] bg-sky-750 text-white">
      <div className="container h-full space-between-center">
        <div className="w-[177px] h-12">
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
        <ul className="center-y gap-x-7 text-4xl">
          {middleHeaderIcons.map(icon => (
            <li key={icon.name} className="relative pb-3 group">
              {/* Object for Menus */}
              {/* {NavMenu[icon.name]} */}
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
          ))}
        </ul>
      </div>
    </div>
  );
}
