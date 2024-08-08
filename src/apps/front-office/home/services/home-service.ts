import { cartProducts } from "shared/data/testData";
import endpoint from "shared/endpoint";

// for dummy purpose only
export function getHome() {
  return endpoint.get("/home");
}

export function getCartItems() {
  // return endpoint.get("/cart");
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cartProducts);
    }, 2000);
  });
}
