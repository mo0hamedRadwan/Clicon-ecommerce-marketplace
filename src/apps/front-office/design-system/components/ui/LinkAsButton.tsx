import router, { Link } from "@mongez/react-router";
import { twMerge } from "tailwind-merge";
import { sizeClass, variantClass } from "../styles/buttonStyles";

export type ButtonPropsType = {
  variant?: "text" | "contained" | "outlined";
  size?: "sm" | "md" | "lg";
  startIcon?: string;
  endIcon?: string;
  className?: string;
  iconClassName?: string;
  href: string;
  disabled?: boolean;
  children: any;
};

export default function LinkAsButton({
  variant = "contained",
  size = "md",
  startIcon,
  endIcon,
  className = "",
  iconClassName,
  href,
  disabled = false,
  children,
}: ButtonPropsType) {
  return (
    <Link
      to={disabled ? router.getCurrentRoute() : href}
      className={twMerge(
        variantClass[variant],
        sizeClass[size],
        "flex-center gap-x-2 rounded duration-200 text-xs",
        className,
        disabled && "bg-gray-450 hover:bg-gray-450 cursor-not-allowed",
      )}>
      {startIcon && <i className={`bx ${startIcon} ${iconClassName}`}></i>}
      {children}
      {endIcon && <i className={`bx ${endIcon} ${iconClassName}`}></i>}
    </Link>
  );
}
