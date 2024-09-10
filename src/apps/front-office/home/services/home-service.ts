import endpoint from "shared/endpoint";

// for dummy purpose only
export function getHome() {
  return endpoint.get("/home");
}

export function getCategories(params?: any) {
  return endpoint.get("/categories", {
    params,
  });
}

export function getProducts(params?: any) {
  return endpoint.get("/products", {
    params,
  });
}

export function subscribeNewLetters(data: any) {
  return endpoint.post("/newsletter/subscribe", data);
}

export function getCartItems() {
  return endpoint.get("/cart");
}

export function addToCart(data: any) {
  return endpoint.post("/cart", data);
}

export function removeFromCart(productId: string) {
  return endpoint.delete(`/cart/${productId}`);
}

export function getWishlistItems() {
  return endpoint.get("/wishlist");
}

export function addToWishlist(productId: string) {
  return endpoint.post(`/wishlist/${productId}`);
}

export function removeFromWishlist(productId: string) {
  return endpoint.delete(`/wishlist/${productId}`);
}

// export function getCartItems() {
//   // return endpoint.get("/cart");
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(cartProducts);
//     }, 2000);
//   });
// }
