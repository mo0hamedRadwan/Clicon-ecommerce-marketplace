import BottomHeader from "./BottomHeader";
import MiddleHeader from "./MiddleHeader";
import OfferNotification from "./OfferNotification";
import TopHeader from "./TopHeader";

export default function Header() {
  return (
    <div className="mb-5">
      <OfferNotification />
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </div>
  );
}
