import CustomBreadcrumb from "apps/front-office/design-system/components/ui/CustomBreadcrumb";
import Footer from "../Footer";
import Header from "../Header";

export type BaseLayoutProps = {
  children: React.ReactNode;
};

/**
 * Base layout can be used to wrap all pages
 */
export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Header />
      <CustomBreadcrumb />
      <main>{children}</main>
      <Footer />
    </>
  );
}
