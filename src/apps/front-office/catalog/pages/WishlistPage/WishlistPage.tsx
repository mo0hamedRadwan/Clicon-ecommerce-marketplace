import WishlistList from "./sections/WishlistList";
import WishlistTable from "./sections/WishlistTable";

export default function WishlistPage() {
  return (
    <div className="container py-10 sm:py-20">
      <div className="hidden lg:block">
        <WishlistTable />
      </div>
      <div className="block lg:hidder">
        <WishlistList />
      </div>
    </div>
  );
}
