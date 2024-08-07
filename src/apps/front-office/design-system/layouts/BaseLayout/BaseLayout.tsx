import Footer from "../Footer";
import Header from "../Header";

export type BaseLayoutProps = {
  children: React.ReactNode;
};

/**
 * Base layout can be used to wrap all pages
 */
export default function BaseLayout({ children }: BaseLayoutProps) {
  // const paths = currentRoute().split("/");
  return (
    <>
      <Header />
      {/* <Breadcrump paths={path} /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
