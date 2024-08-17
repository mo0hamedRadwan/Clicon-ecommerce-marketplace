import { trans } from "@mongez/localization";

export default function CopyrightFooter() {
  return (
    <div className="py-6 border-t border-gray-800">
      <div className="container flex-center">
        <p className="text-center text-zinc-450">
          <span>{`CLICON - ${trans("onlineStore")}`}</span>
          <span className="mx-1">&copy;</span>
          <span>{new Date().getFullYear()}.</span>
          <span className="block md:inline">{` ${trans("designBy")} ${trans("mohamedRadwan")}`}</span>
        </p>
      </div>
    </div>
  );
}
