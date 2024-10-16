import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";

export default function TermsConditionsPage() {
  return (
    <>
      <Helmet title={trans("termsAndConditionPage")} />
      <h1>TermsConditionsPage</h1>
    </>
  );
}
