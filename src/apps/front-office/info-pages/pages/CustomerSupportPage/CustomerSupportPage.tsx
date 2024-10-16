import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import ContactUsSection from "./sections/ContactUsSection";
import HelpCenterSection from "./sections/HelpCenterSection";
import TopicsSection from "./sections/TopicsSection";

export default function CustomerSupportPage() {
  return (
    <>
      <Helmet title={trans("customerSupportPage")} />
      <div className="py-10">
        <HelpCenterSection />
        <hr className="bg-gray-150" />
        <TopicsSection />
        <ContactUsSection />
      </div>
    </>
  );
}
