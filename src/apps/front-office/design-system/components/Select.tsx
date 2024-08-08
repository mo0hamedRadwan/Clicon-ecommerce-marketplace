import { useState } from "react";
import { useClickOutside } from "../hooks/use-click-outside";
import { SelectOption } from "../types";

type SelectPropsType = {
  placeholder: string;
  options: SelectOption[];
  className?: string;
  menuClassName?: string;
  itemClassName?: string;
  onValueChange?: (value: string) => void;
};

export default function Select({
  placeholder,
  options,
  className,
  menuClassName,
  itemClassName,
  onValueChange,
}: SelectPropsType) {
  const [selectPlaceholder, setSelectPlaceholder] = useState(placeholder);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const menuRef = useClickOutside(() => setOpenMenu(false));

  const handleValueChange = (value: string) => {
    setSelectPlaceholder(options.find(option => option.value === value)!.label);
    setOpenMenu(false);
    onValueChange?.(value);
  };

  return (
    <div className="relative ml-20">
      <button
        className={`center-y ${className}`}
        onClick={() => setOpenMenu(!openMenu)}>
        <span>{selectPlaceholder}</span>
        <span>
          {openMenu ? (
            <i className="bx bx-chevron-up"></i>
          ) : (
            <i className="bx bx-chevron-down"></i>
          )}
        </span>
      </button>
      {openMenu && (
        <div className={`z-[999] absolute top-10 right-0`} ref={menuRef}>
          <ul
            className={`min-w-[100px] max-w-[200px] max-h-[200px] overflow-y-auto bg-white shadow-2 ${menuClassName}`}>
            {options.map(option => (
              <li
                key={option.value}
                className={`py-1 px-2 cursor-pointer hover:bg-orange-500 hover:text-white duration-200 break-words ${itemClassName}`}
                onClick={() => handleValueChange(option.value)}>
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
