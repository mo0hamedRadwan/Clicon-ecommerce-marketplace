import Breadcrumb from "components/ui/Breadcrumb";
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
      <Breadcrumb />
      <main>{children}</main>
      <Footer />
    </>
  );
}
