import Helmet from "@mongez/react-helmet";
import WishlistDetailsSection from "./sections/WishlistDetailsSection";

export default function WishlistPage() {
  return (
    <>
      <Helmet title={"wishlistPage"} />
      <div className="container py-10 sm:py-20">
        <WishlistDetailsSection />
      </div>
    </>
  );
}
