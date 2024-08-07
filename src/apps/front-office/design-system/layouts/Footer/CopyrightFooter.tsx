import { trans } from "@mongez/localization";

export default function CopyrightFooter() {
  return (
    <div className="py-6 border-t border-gray-800">
      <div className="container flex-center">
        <p>{`${trans("clicon")} - ${trans("ecommerceTemplate")} &copy; ${new Date().getFullYear()}. ${trans("designBy")} ${trans("mohamedRadwan")}`}</p>
      </div>
    </div>
  );
}
