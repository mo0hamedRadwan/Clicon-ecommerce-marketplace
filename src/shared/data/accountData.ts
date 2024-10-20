import URLS from "apps/front-office/utils/urls";

export const accountNavItems = [
  { name: "dashboard", icon: "bx-layer", link: URLS.userAccount.dashboard },
  {
    name: "orderHistory",
    icon: "bx-store-alt",
    link: URLS.userAccount.orderHistory.root,
  },
  {
    name: "trackOrder",
    icon: "bx-map",
    link: URLS.userAccount.trackOrder.root,
  },
  { name: "shoppingCart", icon: "bx-cart", link: URLS.userAccount.cart },
  { name: "wishlist", icon: "bx-heart", link: URLS.userAccount.wishlist },
  {
    name: "compare",
    icon: "bx-git-compare",
    link: URLS.userAccount.compare,
  },
  {
    name: "cardsAndAddresses",
    icon: "bx-credit-card-front",
    link: URLS.userAccount.cardsAndAddresses,
  },
  {
    name: "browsingHistory",
    icon: "bx-history",
    link: URLS.userAccount.browsingHistory,
  },
  {
    name: "settings",
    icon: "bx-cog",
    link: URLS.userAccount.settings,
  },
  {
    name: "logout",
    icon: "bx-log-out rotate-180",
    link: URLS.userAccount.logout,
  },
];

export const paymentOptionsItems = [
  {
    cardNumber: "1223 3445 5667 7889",
    balance: 100,
    paymentTypeImg: "visa",
    className: "bg-sky-950",
  },
  {
    cardNumber: "1233 3455 5677 7899",
    balance: 100,
    paymentTypeImg: "mastercard",
    className: "bg-green-650",
  },
  {
    cardNumber: "1233 3455 5677 7899",
    balance: 100,
    paymentTypeImg: "mastercard",
    className: "bg-zinc-950",
  },
];

export const ordersData = [
  {
    id: 95214362,
    status: "inProgress",
    date: new Date(2021, 9, 10),
    total: 1000,
  },
  {
    id: 95214365,
    status: "completed",
    date: new Date(2021, 7, 22),
    total: 1000,
  },
  {
    id: 90114362,
    status: "completed",
    date: new Date(2021, 5, 15),
    total: 1000,
  },
  { id: 95204369, status: "canceled", date: new Date(2021, 1, 1), total: 1000 },
  { id: 95204368, status: "canceled", date: new Date(2021, 1, 1), total: 1000 },
  { id: 95204367, status: "canceled", date: new Date(2021, 1, 1), total: 1000 },
];
