import { trans } from "@mongez/localization";
import { twMerge } from "tailwind-merge";
import { badgeStyles } from "../styles/badgeStyles";

type BadgeType = {
  title: string;
  className?: string;
};

export default function Badge({ title, className }: BadgeType) {
  return (
    <p
      className={twMerge(
        "py-1 px-3 rounded font-semibold",
        Object.keys(badgeStyles).map(
          key => title.includes(key) && badgeStyles[key],
        ),
        className,
      )}>
      {title
        .replace("up to", "upTo")
        .split(" ")
        .map(key => trans(key).toUpperCase() + " ")}
    </p>
  );
}
