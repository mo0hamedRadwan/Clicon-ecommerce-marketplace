import { CartProduct } from "apps/front-office/design-system/types";
import { productImages } from "./images";

export const cartProducts: CartProduct[] = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    quantity: 1,
    imageUrl: productImages.productImg1,
  },
  {
    id: 2,
    name: "Product 2",
    price: 50,
    quantity: 2,
    imageUrl: productImages.productImg2,
  },
  {
    id: 3,
    name: "Product 3",
    price: 200,
    quantity: 10,
    imageUrl: productImages.productImg1,
  },
];
