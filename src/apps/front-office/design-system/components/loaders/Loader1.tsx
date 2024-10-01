import { twMerge } from "tailwind-merge";

export default function Loader1({ className = "" }: { className?: string }) {
  return (
    <div className="w-full flex-center">
      <ul className="flex">
        {[1, 2, 3, 4, 5].map(item => (
          <li
            key={item}
            className={twMerge("loader-item", className)}
            style={{ "--i": item } as React.CSSProperties}></li>
        ))}
      </ul>
    </div>
  );
}
