import { useOnce } from "@mongez/react-hooks";
import { accountAtom } from "apps/front-office/account/atoms/accountAtom";
import CustomBreadcrumb from "apps/front-office/design-system/components/ui/CustomBreadcrumb";
import { cartAtom } from "../../atoms/cartAtom";
import { categoriesAtom } from "../../atoms/categoriesAtom";
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
    accountAtom.loadUser();
    cartAtom.loadCartItems();
    wishlistAtom.loadWishlistItems();
    categoriesAtom.loadCategories();
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
