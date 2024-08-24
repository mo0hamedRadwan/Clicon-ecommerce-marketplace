import paypalIcon from "assets/images/paypal.png";
import amazonIcon from "assets/images/SVGs/Amazon.svg";
import creditCardIcon from "assets/images/SVGs/CreditCard.svg";
import creditCardIcon2 from "assets/images/SVGs/CreditCard2.svg";
import cashIcon from "assets/images/SVGs/CurrencyDollar.svg";
import headphonesIcon from "assets/images/SVGs/Headphones.svg";
import packageIcon from "assets/images/SVGs/Package.svg";
import trophyIcon from "assets/images/SVGs/Trophy.svg";
import venmoIcon from "assets/images/venmo.png";

import { products } from "./testData";

export const features = [
  {
    // icon: "bx-package",
    icon: packageIcon,
    title: "fastestDelivery",
    subtitle: "deliveryIn24",
  },
  {
    // icon: "bx-trophy",
    icon: trophyIcon,
    title: "24HoursReturn",
    subtitle: "100%MoneyBackGuarantee",
  },
  {
    // icon: "bx-credit-card",
    icon: creditCardIcon,
    title: "securePayment",
    subtitle: "yourMoneyIsSafe",
  },
  {
    // icon: "bx-headphone",
    icon: headphonesIcon,
    title: "support",
    subtitle: "liveContact",
  },
];

export const topProducts = [
  { title: "flashSalesToday", products: products },
  { title: "bestSellers", products: products },
  { title: "topRated", products: products },
  { title: "newArrival", products: products },
];

export const relatedProducts = [
  { title: "relatedProducts", products: products },
  { title: "productAccessories", products: products },
  { title: "appleProducts", products: products },
  { title: "featuredProducts", products: products },
];

export const paymentMethods = [
  { name: "cash", icon: cashIcon, label: "cashOnDelivery" },
  { name: "venmo", icon: venmoIcon, label: "venmo" },
  { name: "paypal", icon: paypalIcon, label: "paypal" },
  { name: "amazon", icon: amazonIcon, label: "amazonPay" },
  { name: "creditcard", icon: creditCardIcon2, label: "debitCreditcard" },
];
