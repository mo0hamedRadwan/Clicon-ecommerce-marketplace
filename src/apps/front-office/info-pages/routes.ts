import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import AboutUsPage from "./pages/AboutUsPage";
import CustomerSupportPage from "./pages/CustomerSupportPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";

publicRoutes([
  {
    path: URLS.faq,
    component: AboutUsPage,
  },
  {
    path: URLS.pages.aboutUs,
    component: AboutUsPage,
  },
  {
    path: URLS.pages.customerSupport,
    component: CustomerSupportPage,
  },
  {
    path: URLS.pages.privacyPolicy,
    component: PrivacyPolicyPage,
  },
  {
    path: URLS.pages.termsConditions,
    component: TermsConditionsPage,
  },
]);
