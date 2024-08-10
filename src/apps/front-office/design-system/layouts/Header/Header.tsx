import BottomHeader from "./BottomHeader";
import MiddleHeader from "./MiddleHeader";
import OfferNotification from "./OfferNotification";
import TopHeader from "./TopHeader";

export default function Header() {
  return (
    <>
      <OfferNotification />
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </>
  );
}
