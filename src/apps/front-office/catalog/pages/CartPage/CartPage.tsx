import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import CartDetailsSection from "./sections/CartDetailsSection";

export default function CartPage() {
  return (
    <>
      <Helmet title={trans("cartPage")} />
      <div className="py-20 container">
        <CartDetailsSection />
      </div>
    </>
  );
}
