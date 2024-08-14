import { getCurrentLocaleCode, trans } from "@mongez/localization";
import { Link, changeLocaleCode } from "@mongez/react-router";
import { SelectOption } from "apps/front-office/design-system/types";
import { isRTL } from "apps/front-office/utils/helpers";
import { localeCodesList } from "apps/front-office/utils/localization";
import arabicFlag from "assets/images/flags/sa.png";
import englishFlag from "assets/images/flags/uke.png";
import Select from "components/form/Select";
import { socialMediaIcons } from "shared/data/headerData";

export default function TopHeader() {
  const languageOptions: SelectOption[] = Object.keys(localeCodesList).map(
    code => ({
      img: code === "en" ? englishFlag : arabicFlag,
      value: code,
      label: localeCodesList[code].name,
    }),
  );

  return (
    <div className="h-10 bg-sky-750 text-white border-b border-white border-opacity-15">
      <div className="container h-full space-between-center">
        <p className="hidden md:block">{`${trans("welcomeTo")} CLICON ${trans("onlineStore")}`}</p>
        <div className="flex-grow md:flex-grow-0 space-between-center gap-x-3">
          <ul className="center-y gap-x-2">
            <li>{trans("followUs")}:</li>
            {socialMediaIcons.map(social => (
              <li
                key={social.name}
                className="hover:text-orange-450 duration-200">
                <Link to={social.link}>
                  <i className={`bx ${social.icon}`}></i>
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-[1px] h-6 bg-white bg-opacity-15"></div>
          <div className={`${isRTL() ? "mr-10" : "ml-10"}`}>
            <Select
              triggerValue={localeCodesList[getCurrentLocaleCode()].name}
              options={languageOptions}
              onValueChange={(value: string) =>
                getCurrentLocaleCode() !== value && changeLocaleCode(value)
              }
              className="w-[100px]"
              itemClassName="bg-sky-750 text-white  hover:bg-yellow-450 hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
