import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import headerLogo from "assets/images/HeaderLogo.png";
import { middleHeaderIcons } from "shared/data/headerData";

export default function MiddleHeader() {
  return (
    <div className="h-[88px] bg-sky-700 text-white">
      <div className="container h-full space-between-center">
        <div className="w-[177px] h-12">
          <img
            src={headerLogo}
            alt="Clicon Logo image"
            className="w-full h-full"
          />
        </div>
        <div className="relative w-[650px] text-xl text-black">
          <input
            type="text"
            className="w-full py-3 px-5 rounded outline-none "
            placeholder={`${trans("searchFor")} ${trans("products")}`}
          />
          <span className="absolute top-2 right-6 text-3xl">
            <i className="bx bx-search"></i>
          </span>
        </div>
        <ul className="center-y gap-x-7 text-4xl">
          {middleHeaderIcons.map(icon => (
            <li key={icon.name} className="relative">
              <Link to={`/${icon.name}`}>
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
