import ContactUsSection from "./sections/ContactUsSection";
import HelpCenterSection from "./sections/HelpCenterSection";
import TopicsSection from "./sections/TopicsSection";

export default function CustomerServicesPage() {
  return (
    <div className="py-10">
      <HelpCenterSection />
      <hr className="bg-gray-150" />
      <TopicsSection />
      <ContactUsSection />
    </div>
  );
}
