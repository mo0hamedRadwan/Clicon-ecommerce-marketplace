import { trans } from "@mongez/localization";
import { twMerge } from "tailwind-merge";
import { badgeStyles } from "../styles/badgeStyles";

type BadgeType = {
  title: string;
};

export default function Badge({ title }: BadgeType) {
  return (
    <p
      className={twMerge(
        "py-1 px-3 rounded font-semibold",
        Object.keys(badgeStyles).map(
          key => title.includes(key) && badgeStyles[key],
        ),
      )}>
      {title.split(" ").map(key => trans(key).toUpperCase() + " ")}
    </p>
  );
}
