import { trans } from "@mongez/localization";

export default function CopyrightFooter() {
  return (
    <div className="py-6 border-t border-gray-800">
      <div className="container flex-center">
        <p>
          <span>{`CLICON - ${trans("onlineStore")}`}</span>
          <span className="mx-1">&copy;</span>
          <span>{`${new Date().getFullYear()}. ${trans("designBy")} ${trans("mohamedRadwan")}`}</span>
        </p>
      </div>
    </div>
  );
}
