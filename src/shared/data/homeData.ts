import paypalIcon from "assets/images/paypal.png";
import profileImg from "assets/images/profileImg/profile.jpg";
import amazonIcon from "assets/images/SVGs/Amazon.svg";
import creditCardIcon from "assets/images/SVGs/CreditCard.svg";
import creditCardIcon2 from "assets/images/SVGs/CreditCard2.svg";
import cashIcon from "assets/images/SVGs/CurrencyDollar.svg";
import headphonesIcon from "assets/images/SVGs/Headphones.svg";
import packageIcon from "assets/images/SVGs/Package.svg";
import trophyIcon from "assets/images/SVGs/Trophy.svg";
import venmoIcon from "assets/images/venmo.png";

import { OrderType } from "apps/front-office/design-system/types";
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

export const orderStatus = [
  { label: "orderPlaced", icon: "bx-notepad" },
  { label: "packaging", icon: "bx-package" },
  { label: "onTheRoad", icon: "bxs-truck" },
  { label: "delivered", icon: "bxs-like" },
];

export const order: OrderType = {
  id: 96459761,
  productsNum: products.length,
  totalPrice: 1199.99,
  statusNumber: 1,
  orderDate: new Date("2024-8-15"),
  expectedDate: new Date("2024-8-30"),
  orderActivities: [
    {
      icon: "bx-notepad",
      iconColor: "text-blue-400",
      iconBgColor: "bg-blue-50",
      description: "Your order has been confirmed.",
      date: new Date(""),
    },
    {
      icon: "bx-check-circle",
      iconColor: "text-green-400",
      iconBgColor: "bg-green-50",
      description: "Your order is successfully verified.",
      date: new Date(""),
    },
    {
      icon: "bx-map-alt",
      iconColor: "text-blue-400",
      iconBgColor: "bg-blue-50",
      description: "Your order on the way to (last mile) hub.",
      date: new Date(""),
    },
    {
      icon: "bx-map",
      iconColor: "text-blue-400",
      iconBgColor: "bg-blue-50",
      description: "Your order has reached at last mile hub.",
      date: new Date(""),
    },
    {
      icon: "bx-user",
      iconColor: "text-blue-400",
      iconBgColor: "bg-blue-50",
      description:
        "Our delivery man (John Wick) Has picked-up your order for delvery. ",
      date: new Date(""),
    },
    {
      icon: "bx-check-double",
      iconColor: "text-green-400",
      iconBgColor: "bg-green-50",
      description:
        "Your order has been delivered. Thank you for shopping at Clicon!",
      date: new Date(""),
    },
  ],
};

export const aboutFeatures = [
  "Great 24/7 customer services.",
  "600+ Dedicated employe.",
  "50+ Branches all over the world.",
  "Over 1 Million Electronics Products",
];

export const ourTeam = [
  {
    name: "Kevin Gilbert",
    image: profileImg,
    position: "Chief Executive Officer",
  },
  { name: "Kevin Gilbert", image: profileImg, position: "Assistant of CEO" },
  { name: "Kevin Gilbert", image: profileImg, position: "Head of Designer" },
  { name: "Kevin Gilbert", image: profileImg, position: "UX Designer" },
  { name: "Kevin Gilbert", image: profileImg, position: "Product Designer" },
  { name: "Kevin Gilbert", image: profileImg, position: "Head of Development" },
  { name: "Kevin Gilbert", image: profileImg, position: "Design Engineer" },
  { name: "Kevin Gilbert", image: profileImg, position: "UI Designer" },
];

export const topics = [
  { name: "Track Order", icon: "bxs-truck" },
  { name: "Reset Password", icon: "bxs-lock-open-alt" },
  { name: "Payment Option", icon: "bx-credit-card-front" },
  { name: "User & Account", icon: "bx-user" },
  { name: "Wishlist & Compare", icon: "bx bxs-layer" },
  { name: "Shipping & Billing", icon: "bx-notepad" },
  { name: "Shoping Cart & Wallet", icon: "bx-credit-card-front" },
  { name: "Sell on Clicon", icon: "bx bx-store-alt" },
];

export const popularTopics = [
  "How do I return my item?",
  "What is Clicons Returns Policy?",
  "How long is the refund process?",
  "What are the 'Delivery Timelines'?",
  "What is 'Discover Your Daraz Campaign 2022'?",
  "What is the Voucher & Gift Offer in this Campaign?",
  "How to cancel Clicon Order.",
  "Ask the Digital and Device Community",
  "How to change my shop name?",
];
