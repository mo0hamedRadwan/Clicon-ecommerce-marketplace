import creditCardIcon from "assets/images/SVGs/CreditCard.svg";
import headphonesIcon from "assets/images/SVGs/Headphones.svg";
import packageIcon from "assets/images/SVGs/Package.svg";
import trophyIcon from "assets/images/SVGs/Trophy.svg";
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
