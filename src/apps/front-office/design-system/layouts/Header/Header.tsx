import { useOnce } from "@mongez/react-hooks";
import { categoriesAtom } from "../../atoms/categoriesAtom";
import BottomHeader from "./BottomHeader";
import MiddleHeader from "./MiddleHeader";
import OfferNotification from "./OfferNotification";
import TopHeader from "./TopHeader";

export default function Header() {
  useOnce(() => {
    categoriesAtom.loadCategories();
  });

  return (
    <>
      <OfferNotification />
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </>
  );
}
