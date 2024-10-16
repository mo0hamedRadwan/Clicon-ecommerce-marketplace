import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import TrackOrderSection from "apps/front-office/account/components/sections/TrackOrderSection";

export default function TrackOrderPage() {
  return (
    <>
      <Helmet title={trans("trackOrderPage")} />
      <div className="py-20 container">
        <TrackOrderSection />
      </div>
    </>
  );
}
