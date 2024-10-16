import URLS from "apps/front-office/utils/urls";
import logo2 from "assets/images/logos/amazon.png";
import logo1 from "assets/images/logos/google.png";
import logo3 from "assets/images/logos/philips.png";
import logo4 from "assets/images/logos/samsung.png";
import logo5 from "assets/images/logos/toshiba.png";

export const companyLogos = [logo1, logo2, logo3, logo4, logo5];

export const topCategories = [
  { name: "Computer & Laptop", link: "#" },
  { name: "SmartPhone", link: "#" },
  { name: "Headphone", link: "#" },
  { name: "Accessories", link: "#" },
  { name: "Camera & Photo", link: "#" },
  { name: "TV & Homes", link: "#" },
];

export const quickLinks = [
  { name: "shopProducts", link: URLS.shop.root },
  { name: "shoppingCart", link: URLS.cart },
  { name: "wishlist", link: URLS.wishlist },
  { name: "compare", link: URLS.compare },
  { name: "trackOrder", link: URLS.pages.trackOrder.root },
  { name: "customerHelp", link: URLS.pages.customerSupport },
  { name: "aboutUs", link: URLS.pages.aboutUs },
];

export const popularTags = [
  { name: "Game", link: "#" },
  { name: "iPhone", link: "#" },
  { name: "TV", link: "#" },
  { name: "Asus Laptops", link: "#" },
  { name: "Macbook", link: "#" },
  { name: "SSD", link: "#" },
  { name: "Graphics Card", link: "#" },
  { name: "Power Bank", link: "#" },
  { name: "Smart TV", link: "#" },
  { name: "Speaker", link: "#" },
  { name: "Tablet", link: "#" },
  { name: "Microwave", link: "#" },
  { name: "Samsung", link: "#" },
];
