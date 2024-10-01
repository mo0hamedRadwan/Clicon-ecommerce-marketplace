import { twMerge } from "tailwind-merge";

export default function Loader2({ className = "" }: { className?: string }) {
  return (
    <div className="w-full h-full flex-center">
      <div className={twMerge("loader", className)}></div>
    </div>
  );
}
