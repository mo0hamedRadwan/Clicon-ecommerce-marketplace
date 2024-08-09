import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useClickOutside } from "../../hooks/use-click-outside";
import { SelectOption } from "../../types";

type SelectPropsType = {
  placeholder: string;
  options: SelectOption[];
  optionsImg?: string[];
  className?: string;
  menuClassName?: string;
  itemClassName?: string;
  onValueChange?: (value: string) => void;
};

export default function Select({
  placeholder,
  options,
  optionsImg,
  className,
  menuClassName,
  itemClassName,
  onValueChange,
}: SelectPropsType) {
  const [selectedValue, setSelectedValue] = useState(placeholder);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const menuRef = useClickOutside(() => setOpenMenu(false));

  const handleValueChange = (value: string, label: string) => {
    setSelectedValue(label);
    setOpenMenu(false);
    onValueChange?.(value);
  };

  return (
    <div className="relative ml-20" ref={menuRef}>
      <button
        className={twMerge("center-y", className)}
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
        <div className="z-[999] absolute top-10 right-0">
          <ul
            className={twMerge(
              "min-w-[100px] max-w-[200px] max-h-[200px] overflow-y-auto bg-white rounded shadow-2",
              menuClassName,
            )}>
            {options.map((option, index) => (
              <li
                key={option.value}
                className={twMerge(
                  "text-black py-1 px-2 center-y gap-x-2 cursor-pointer hover:bg-yellow-450 hover:text-white duration-200 break-words ",
                  itemClassName,
                )}
                onClick={() => handleValueChange(option.value, option.label)}>
                {optionsImg && (
                  <img src={optionsImg[index]} className="w-6 h-6" />
                )}
                <span className="">{option.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
