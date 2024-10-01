import endpoint from "shared/endpoint";

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
