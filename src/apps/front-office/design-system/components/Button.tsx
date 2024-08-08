import { Link } from "@mongez/react-router";

type ButtonPropsType = {
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  href?: string;
  startIcon?: string;
  endIcon?: string;
  className?: string;
  onClick?: (e) => void;
  children?: any;
};

export default function Button({
  variant = "contained",
  size = "medium",
  href,
  startIcon,
  endIcon,
  className = "",
  onClick,
  children,
}: ButtonPropsType) {
  const variantClass =
    variant === "text"
      ? "hover:bg-orange-200 text-orange-500"
      : variant === "contained"
        ? "bg-orange-500 hover:bg-orange-600 text-white"
        : variant === "outlined"
          ? "border border-orange-500 hover:bg-orange-100 text-orange-500"
          : "";
  const sizeClass =
    size === "small"
      ? "py-1 px-2 text-base"
      : size === "medium"
        ? "py-2 px-5 text-lg"
        : size === "large"
          ? "py-3 px-8 text-xl"
          : "";
  const handleClick = e => {
    e.preventDefault();
    onClick?.(e);
  };
  return (
    <>
      {href ? (
        <Link
          className={`${variantClass} ${sizeClass} flex-center gap-x-2 rounded duration-200 ${className}`}
          onClick={handleClick}
          href={href}>
          {startIcon && <i className={`bx ${startIcon}`}></i>}
          {children}
          {endIcon && <i className={`bx ${endIcon}`}></i>}
        </Link>
      ) : (
        <button
          className={`${variantClass} ${sizeClass} flex-center gap-x-2 rounded duration-200 ${className}`}
          onClick={handleClick}>
          {startIcon && <i className={`bx ${startIcon}`}></i>}
          {children}
          {endIcon && <i className={`bx ${endIcon}`}></i>}
        </button>
      )}
    </>
  );
}
