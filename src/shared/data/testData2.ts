import { ProductType } from "apps/front-office/design-system/types";
import { productsImage } from "./images2";

export const product1: ProductType = {
  id: 1,
  name: "Xbox Consoles",
  price: 299,
  imageUrl: productsImage.product1,
  bannerImageUrl: productsImage.product1,
  caption: "THE BEST PLACE TO PLAY",
  shortDescription:
    "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
};

export const product2: ProductType = {
  id: 2,
  name: "New Google Pixel 6 Pro",
  price: 399,
  imageUrl: productsImage.product2,
  caption: "Summer Sales",
  badges: ["29% off"],
};

export const product3: ProductType = {
  id: 3,
  name: "Xiaomi FlipBuds Pro",
  shortDescription:
    "Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.",
  price: 299,
  imageUrl: productsImage.product3,
};

export const product4: ProductType = {
  id: 4,
  name: "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versiobla bla bla bla",
  shortDescription:
    "Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
  price: 442.12,
  oldPrice: 865.99,
  imageUrl: productsImage.product4,
  badges: ["32% off", "hot"],
  rating: 5,
  numOfReviews: 52677,
};

export const product5: ProductType = {
  id: 5,
  name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear",
  price: 2300,
  imageUrl: productsImage.product5,
  badges: ["SOLD OUT"],
};

export const product6: ProductType = {
  id: 6,
  name: "Simple Mobile 4G LTE Prepaid Smartphone",
  price: 220,
  imageUrl: productsImage.product6,
};

export const product7: ProductType = {
  id: 7,
  name: "4K UHD LED Smart TV with Chromecast Built-in",
  oldPrice: 865,
  price: 150,
  imageUrl: productsImage.product7,
  badges: ["19% off"],
};

export const product8: ProductType = {
  id: 8,
  name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
  price: 1200,
  imageUrl: productsImage.product8,
};

export const product9: ProductType = {
  id: 9,
  name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
  price: 299,
  imageUrl: productsImage.product9,
};

export const product10: ProductType = {
  id: 10,
  name: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",
  oldPrice: 865,
  price: 70,
  imageUrl: productsImage.product10,
};

export const product11: ProductType = {
  id: 11,
  name: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
  price: 160,
  imageUrl: productsImage.product11,
  badges: ["hot"],
};

export const product12: ProductType = {
  id: 12,
  name: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black",
  oldPrice: 360,
  price: 250,
  imageUrl: productsImage.product12,
  badges: ["32% off"],
};

export const product13: ProductType = {
  id: 13,
  name: "New Apple Homepod Mini",
  shortDescription:
    "Jam-packed with innovation, HomePod mini delivers unexpectedly.",
  price: 289,
  imageUrl: productsImage.product13,
  badges: ["INTRODUCING"],
};

export const product14: ProductType = {
  id: 14,
  name: "Xiaomi Mi 11 Ultra 12GB+256GB",
  shortDescription:
    "*Data provided by internal laboratories. Industry measurment.",
  price: 590,
  imageUrl: productsImage.product14,
  badges: ["INTRODUCING NEW"],
};
