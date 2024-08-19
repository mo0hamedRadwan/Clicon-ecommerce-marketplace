import { PublicApp } from "@mongez/react-router";
import URLS from "./utils/urls";

export const frontOfficeApp: PublicApp = {
  path: "/",
  name: "front-office",
  modules: [
    {
      entry: [
        URLS.auth.signin.root,
        URLS.auth.signin.forgetPassword,
        URLS.auth.signin.resetPassword,
        URLS.auth.signup.root,
        URLS.auth.signup.emailVerification,
      ],
      name: "auth",
    },
    {
      entry: [URLS.home, URLS.notFound],
      name: "home",
    },
    {
      entry: [URLS.product],
      name: "catalog",
    },
    {
      entry: [
        URLS.faq,
        URLS.pages.aboutUs,
        URLS.pages.privacyPolicy,
        URLS.pages.termsConditions,
      ],
      name: "informative-pages",
    },
  ],
};
