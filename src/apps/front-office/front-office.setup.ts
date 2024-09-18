import { PublicApp } from "@mongez/react-router";
import URLS from "./utils/urls";

export const frontOfficeApp: PublicApp = {
  path: "/",
  name: "front-office",
  modules: [
    {
      entry: [
        URLS.auth.signin.root,
        // URLS.auth.signin.forgetPassword,
        // URLS.auth.signin.resetPassword,
        URLS.auth.signup.root,
        // URLS.auth.signup.emailVerification,
      ],
      name: "auth",
    },
    {
      entry: [URLS.userAccount.root],
      name: "account",
    },
    {
      entry: [URLS.home, URLS.notFound],
      name: "home",
    },
    {
      entry: [
        URLS.product.root,
        URLS.shop.root,
        URLS.checkout.root,
        URLS.pages.trackOrder.root,
        URLS.wishlist,
        URLS.cart,
        URLS.compare,
      ],
      name: "catalog",
    },
    {
      entry: [
        URLS.faq,
        URLS.pages.aboutUs,
        URLS.pages.customerSupport,
        URLS.pages.privacyPolicy,
        URLS.pages.termsConditions,
      ],
      name: "info-pages",
    },
  ],
};
