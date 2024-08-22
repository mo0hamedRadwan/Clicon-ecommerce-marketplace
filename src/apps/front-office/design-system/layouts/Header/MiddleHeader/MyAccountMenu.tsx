import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";
import { myAccountLinks } from "shared/data/headerData";

export default function MyAccountMenu() {
  return (
    <div
      className={`hidden xs:group-hover:block z-20 absolute w-[220px] h-[320px] top-[50px] ${isRTL() ? "left-0" : "right-0"} py-2 bg-white text-black text-base font-semibold rounded shadow-2`}>
      <ul className="flex flex-col gap-y-2">
        {myAccountLinks.map(link => (
          <li key={link.name}>
            <Link
              to={link.link}
              className="flex gap-4 px-5 py-2 hover:bg-orange-450 hover:text-white duration-200">
              <span className="text-xl">
                <i className={`bx ${link.icon}`}></i>
              </span>
              <span>{trans(link.name)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
