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
    customerSupport: "/customer-support",
    trackOrder: {
      root: "/track-order",
      // details: "/track-order/order-details",
      viewRoute: "/track-order/order-details/:id",
      view: (orderId: number) => `/track-order/order-details/${orderId}`,
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
  shop: {
    root: "/shop",
    // categoryRoute: "/shop/:category",
    // categoryView: (category: any) => `/shop/${category.id}`,
  },
  deals: "/deals",
  // I will delete it in future
  userAccount: {
    root: "/user-account",
    dashboard: "/user-account/dashboard",
    orderHistory: {
      root: "/user-account/order-history",
      viewRoute: "/user-account/order-history/order-details/:id",
      view: (orderId: number) =>
        `/user-account/order-history/order-details/${orderId}`,
    },
    trackOrder: {
      root: "/user-account/track-order",
      viewRoute: "/user-account/track-order/order-details/:id",
      view: (orderId: number) => `/user-account/track-order/details/${orderId}`,
    },
    cart: "/user-account/cart",
    wishlist: "/user-account/wishlist",
    compare: "/user-account/compare",
    cardsAndAddresses: "/user-account/cards-and-addresses",
    browsingHistory: "/user-account/browsing-history",
    settings: "/user-account/settings",
    logout: "/user-account/logout",
  },
  product: {
    root: "/products",
    viewRoute: "/products/:id/:slug",
    view: (product: any) => `/products/${product.id}/${product.slug}`,
  },
};

export default URLS;
