import URLS from "apps/front-office/utils/urls";

export const socialMediaIcons = [
  { name: "Twitter", icon: "bxl-twitter", link: "https://www.twitter.com" },
  {
    name: "Facebook",
    icon: "bxl-facebook-circle",
    link: "https://www.facebook.com",
  },
  {
    name: "Pinterest",
    icon: "bxl-pinterest-alt",
    link: "https://www.pinterest.com",
  },
  {
    name: "Reddit",
    icon: "bxl-reddit",
    link: "https://www.reddit.com",
  },
  {
    name: "Youtube",
    icon: "bx bxl-youtube",
    link: "https://www.youtube.com",
  },
  {
    name: "Instagram",
    icon: "bxl-instagram",
    link: "https://www.instagram.com",
  },
];

// export const middleHeaderIcons = [
//   { name: "cart", icon: "bx-cart", numOfItems: 2 },
//   { name: "wishlist", icon: "bx-heart", numOfItems: 2 },
//   { name: "account", icon: "bx bx-user", numOfItems: 0 },
// ];

export const navigateItems = [
  {
    name: "shop",
    icon: "bx-store-alt",
    link: URLS.shop.root,
  },
  { name: "trackOrder", icon: "bx-map", link: URLS.pages.trackOrder.root },
  { name: "compare", icon: "bx-git-compare", link: URLS.compare },
  {
    name: "customerSupport",
    icon: "bx bx-headphone",
    link: "/customer-support",
  },
  // {
  //   name: "needHelp",
  //   icon: "bx-info-circle",
  //   link: URLS.pages.customerSupport,
  // },
];

export const callUs = {
  name: "callUs",
  icon: "bx-phone-call",
  number: "(+1) 202-555-0104",
};

export const myAccountLinks = [
  { name: "myAccount", icon: "bx bx-user", link: URLS.userAccount.dashboard },
  {
    name: "trackOrder",
    icon: "bx bx-shopping-bag",
    link: URLS.userAccount.trackOrder.root,
  },
  {
    name: "browsingHistory",
    icon: "bx-history",
    link: URLS.userAccount.browsingHistory,
  },
  { name: "wishlist", icon: "bx-heart", link: URLS.userAccount.wishlist },
  { name: "settings", icon: "bx-cog", link: URLS.userAccount.settings },
  { name: "logout", icon: "bx-log-out", link: URLS.userAccount.logout },
];
