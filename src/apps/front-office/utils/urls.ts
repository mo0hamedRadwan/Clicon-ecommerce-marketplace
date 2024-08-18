// append urls here, DO NOT remove this line

const URLS = {
  home: "/",
  notFound: "/404",
  blog: {
    root: "/blog",
    viewRoute: "/blog/:id/:slug",
    view: (post: any) => `/blog/${post.id}/${post.slug}`,
  },
  faq: "/faq",
  auth: {
    signin: {
      root: "/sign-in",
      forgetPassword: "/sign-in/forget-password",
      resetPassword: "/sign-in/forget-password/reset-password",
    },
    signup: {
      root: "/sign-up",
      verifyEmail: "/sign-up/email-verify",
    },
  },
  settings: "/settings",
  contactUs: "/contact-us",
  pages: {
    aboutUs: "/about-us",
    termsConditions: "/terms-conditions",
    privacyPolicy: "/privacy-policy",
    customerServices: "/customer-services",
    viewRoute: "/pages/:slug",
    view: (page: any) => `/pages/${page.id}/${page.slug}`,
  },
  cart: "/cart",
  checkout: "/checkout",
  wishlist: "/wishlist",
  compare: "/compare",
  shop: "/shop",
  deals: "/deals",
};

export default URLS;
