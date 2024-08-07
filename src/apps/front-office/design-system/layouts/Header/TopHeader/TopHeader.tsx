import { getCurrentLocaleCode, trans } from "@mongez/localization";
import { Link, changeLocaleCode } from "@mongez/react-router";
import { socialMediaIcons } from "shared/data/headerData";

export default function TopHeader() {
  return (
    <div className="h-10 bg-sky-700 text-white border-b border-white border-opacity-15">
      <div className="container h-full space-between-center">
        <p>Welcome to Clicon online eCommerce store.</p>
        {/* <p>{trans("welcome")}</p> */}
        <div className="center-y gap-x-3">
          <ul className="center-y gap-x-2">
            <li>{trans("followUs")}:</li>
            {socialMediaIcons.map(social => (
              <li key={social.name}>
                <Link to={social.link}>
                  <i className={`bx ${social.icon}`}></i>
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-[1px] h-6 bg-white bg-opacity-15"></div>
          <select
            className="bg-transparent text-white focus-visible:ring-0 outline-none"
            value={getCurrentLocaleCode()}
            onChange={e => changeLocaleCode(e.target.value)}>
            <option value="en" className="bg-sky-700">
              English
            </option>
            <option value="ar" className="bg-sky-700">
              العربية
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
