import { twMerge } from "tailwind-merge";

export type ButtonPropsType = {
  type?: "button" | "submit" | "reset";
  variant?: "text" | "contained" | "outlined";
  size?: "sm" | "md" | "lg";
  startIcon?: string;
  endIcon?: string;
  className?: string;
  onClick: (e) => void;
  children: any;
};

export const variantClass = {
  text: "hover:bg-orange-200 text-orange-450",
  contained: "bg-orange-450 hover:bg-orange-500 text-white",
  outlined: "border border-orange-450 hover:bg-orange-100 text-orange-450",
};

export const sizeClass = {
  sm: "py-1 px-2 text-base",
  md: "py-2 px-5 text-lg",
  lg: "py-3 px-8 text-xl",
};

export default function Button({
  type = "button",
  variant = "contained",
  size = "md",
  startIcon,
  endIcon,
  className = "",
  onClick,
  children,
}: ButtonPropsType) {
  return (
    <button
      type={type}
      className={twMerge(
        variantClass[variant],
        sizeClass[size],
        "flex-center gap-x-2 rounded duration-200",
        className,
      )}
      onClick={e => onClick(e)}>
      {startIcon && <i className={`bx ${startIcon}`}></i>}
      {children}
      {endIcon && <i className={`bx ${endIcon}`}></i>}
    </button>
  );
}
