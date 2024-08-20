import { twMerge } from "tailwind-merge";
import { sizeClass, variantClass } from "../styles/buttonStyles";

export type ButtonPropsType = {
  type?: "button" | "submit" | "reset";
  variant?: "text" | "contained" | "outlined";
  size?: "sm" | "md" | "lg";
  startIcon?: string;
  endIcon?: string;
  className?: string;
  iconClassName?: string;
  onClick: (e) => void;
  children: any;
};

export default function Button({
  type = "button",
  variant = "contained",
  size = "md",
  startIcon,
  endIcon,
  className = "",
  iconClassName,
  onClick,
  children,
}: ButtonPropsType) {
  return (
    <button
      type={type}
      className={twMerge(
        variantClass[variant],
        sizeClass[size],
        "flex-center gap-x-2 rounded duration-200 text-xs",
        className,
      )}
      onClick={e => onClick(e)}>
      {startIcon && <i className={`bx ${startIcon} ${iconClassName}`}></i>}
      {children}
      {endIcon && <i className={`bx ${endIcon} ${iconClassName}`}></i>}
    </button>
  );
}
