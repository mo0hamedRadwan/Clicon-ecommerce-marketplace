import { Link } from "@mongez/react-router";
import { twMerge } from "tailwind-merge";
import { sizeClass, variantClass } from "./styles/buttonStyles";

export type ButtonPropsType = {
  variant?: "text" | "contained" | "outlined";
  size?: "sm" | "md" | "lg";
  startIcon?: string;
  endIcon?: string;
  className?: string;
  href: string;
  children: any;
};

export default function LinkAsButton({
  variant = "contained",
  size = "md",
  startIcon,
  endIcon,
  className = "",
  href,
  children,
}: ButtonPropsType) {
  return (
    <Link
      to={href}
      className={twMerge(
        variantClass[variant],
        sizeClass[size],
        "flex-center gap-x-2 rounded duration-200",
        className,
      )}>
      {startIcon && <i className={`bx ${startIcon}`}></i>}
      {children}
      {endIcon && <i className={`bx ${endIcon}`}></i>}
    </Link>
  );
}
