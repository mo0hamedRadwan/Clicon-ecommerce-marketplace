import { isRTL } from "apps/front-office/utils/helpers";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useClickOutside } from "../../hooks/use-click-outside";
import { SelectOption } from "../../types";

type SelectPropsType = {
  triggerValue: string;
  options: SelectOption[];
  optionsImg?: string[];
  className?: string;
  menuClassName?: string;
  itemClassName?: string;
  onValueChange?: (value: string) => void;
};

export default function Select({
  triggerValue,
  options,
  className,
  menuClassName,
  itemClassName,
  onValueChange,
}: SelectPropsType) {
  const [selectedValue, setSelectedValue] = useState(triggerValue);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const menuRef = useClickOutside(() => setOpenMenu(false));

  const handleValueChange = (value: string, label: string) => {
    setSelectedValue(label);
    setOpenMenu(false);
    onValueChange?.(value);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        className={twMerge("space-between-center p-2", className)}
        onClick={() => setOpenMenu(!openMenu)}>
        <span>{selectedValue}</span>
        <span>
          {openMenu ? (
            <i className="bx bx-chevron-up"></i>
          ) : (
            <i className="bx bx-chevron-down"></i>
          )}
        </span>
      </button>
      {openMenu && (
        <div
          className={`z-[999] w-full absolute top-10 ${isRTL() ? "right-0" : "left-0"}`}>
          <ul
            className={twMerge(
              "w-full max-h-[200px] overflow-x-hidden overflow-y-auto bg-white rounded shadow-2",
              menuClassName,
            )}>
            {options.map(option => (
              <li
                key={option.value}
                className={twMerge(
                  "text-black py-1 px-2 center-y gap-x-2 cursor-pointer duration-200 break-words",
                  itemClassName,
                )}
                onClick={() => handleValueChange(option.value, option.label)}>
                {option.img && <img src={option.img} className="w-6 h-6" />}
                <span className="">{option.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
