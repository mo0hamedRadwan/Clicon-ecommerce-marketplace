import { getCurrentLocaleCode, trans } from "@mongez/localization";
import { Link, changeLocaleCode } from "@mongez/react-router";
import Select from "apps/front-office/design-system/components/Select";
import { SelectOption } from "apps/front-office/design-system/types";
import { localeCodesList } from "apps/front-office/utils/localization";
import { socialMediaIcons } from "shared/data/headerData";

export default function TopHeader() {
  const languageOptions: SelectOption[] = Object.keys(localeCodesList).map(
    code => ({
      value: code,
      label: localeCodesList[code].name,
    }),
  );
  return (
    <div className="h-10 bg-sky-700 text-white border-b border-white border-opacity-15">
      <div className="container h-full space-between-center">
        <p className="hidden md:block">{`${trans("welcomeTo")} CLICON ${trans("onlineStore")}`}</p>
        <div className="flex-grow md:flex-grow-0 space-between-center gap-x-3">
          <ul className="center-y gap-x-2">
            <li>{trans("followUs")}:</li>
            {socialMediaIcons.map(social => (
              <li key={social.name} className="hover:text-sky-400 duration-200">
                <Link to={social.link}>
                  <i className={`bx ${social.icon}`}></i>
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-[1px] h-6 bg-white bg-opacity-15"></div>
          <Select
            placeholder={localeCodesList[getCurrentLocaleCode()].name}
            options={languageOptions}
            onValueChange={(value: string) =>
              getCurrentLocaleCode() !== value && changeLocaleCode(value)
            }
            itemClassName="bg-sky-700"></Select>
        </div>
      </div>
    </div>
  );
}
