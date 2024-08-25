// append urls here, DO NOT remove this line

const URLS = {
  catalog: "/catalog",
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
      resetPasswordVerification:
        "/sign-in/forget-password/verify-reset-password",
    },
    signup: {
      root: "/sign-up",
      emailVerification: "/sign-up/email-verification",
    },
  },
  settings: "/settings",
  contactUs: "/contact-us",
  pages: {
    aboutUs: "/about-us",
    termsConditions: "/terms-conditions",
    privacyPolicy: "/privacy-policy",
    customerServices: "/customer-services",
    trackOrder: {
      root: "/track-order",
      details: "/track-order/order-details",
      // viewRoute: "/track-order/details/:order-id",
      // view: (order: number) => `/track-order/details/${order}`,
    },
    viewRoute: "/pages/:slug",
    view: (page: any) => `/pages/${page.id}/${page.slug}`,
  },
  cart: "/cart",
  checkout: {
    root: "/checkout",
    success: "/checkout/success",
  },
  wishlist: "/wishlist",
  compare: "/compare",
  shop: "/shop",
  deals: "/deals",
  // I will delete it in future
  account: "/account",
  product: "/product",
};

export default URLS;
