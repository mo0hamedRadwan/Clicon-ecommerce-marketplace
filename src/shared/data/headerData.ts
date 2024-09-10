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
  { name: "trackOrder", icon: "bx-map", link: URLS.pages.trackOrder.root },
  { name: "compare", icon: "bx-git-compare", link: URLS.compare },
  {
    name: "customerSupport",
    icon: "bx bx-headphone",
    link: "/customer-support",
  },
  {
    name: "needHelp",
    icon: "bx-info-circle",
    link: URLS.pages.customerSupport,
  },
];

export const callUs = {
  name: "callUs",
  icon: "bx-phone-call",
  number: "(+1) 202-555-0104",
};

export const myAccountLinks = [
  { name: "myAccount", icon: "bx bx-user", link: "/user-account/dashboard" },
  {
    name: "trackOrder",
    icon: "bx bx-shopping-bag",
    link: "/user-account/track-order",
  },
  {
    name: "browsingHistory",
    icon: "bx-history",
    link: "/user-account/browser-history",
  },
  { name: "wishlist", icon: "bx-heart", link: "/user-account/wishlist" },
  { name: "settings", icon: "bx-cog", link: "/user-account/settings" },
  { name: "logout", icon: "bx-log-out", link: "/user-account/logout" },
];
