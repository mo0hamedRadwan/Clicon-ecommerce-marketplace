import { trans } from "@mongez/localization";
import { twMerge } from "tailwind-merge";
import { badgeStyles } from "../styles/badgeStyles";

type BadgeType = {
  title: string;
  className?: string;
};

export default function Badge({ title, className }: BadgeType) {
  const key = Object.keys(badgeStyles).filter(key => title.includes(key))[0];
  return (
    <p
      className={twMerge(
        "py-1 px-3 rounded font-semibold bg-amber-350 text-zinc-950",
        badgeStyles[key],
        className,
      )}>
      {title
        .replace("up to", "upTo")
        .split(" ")
        .map(key => trans(key).toUpperCase() + " ")}
    </p>
  );
}
