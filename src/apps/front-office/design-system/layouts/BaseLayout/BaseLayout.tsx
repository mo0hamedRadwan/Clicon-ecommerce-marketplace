import { useOnce } from "@mongez/react-hooks";
import CustomBreadcrumb from "components/ui/CustomBreadcrumb";
import { cartAtom } from "../../atoms/cartAtom";
import { categoriesAtom } from "../../atoms/categoriesAtom";
import { compareAtom } from "../../atoms/compareAtom";
import { wishlistAtom } from "../../atoms/wishlistAtom";
import Footer from "../Footer";
import Header from "../Header";

export type BaseLayoutProps = {
  children: React.ReactNode;
};

/**
 * Base layout can be used to wrap all pages
 */
export default function BaseLayout({ children }: BaseLayoutProps) {
  useOnce(() => {
    cartAtom.loadCartItems();
    wishlistAtom.loadWishlistItems();
    categoriesAtom.loadCategories();
    compareAtom.loadCompareProducts();
  });

  return (
    <>
      <Header />
      <CustomBreadcrumb />
      <main>{children}</main>
      <Footer />
    </>
  );
}
