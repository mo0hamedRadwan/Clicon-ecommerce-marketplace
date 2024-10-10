import endpoint from "shared/endpoint";

export function getCartItems() {
  return endpoint.get("/cart");
}

export function addToCart(data: any) {
  return endpoint.post("/cart", data);
}

export function removeFromCart(itemId: string) {
  return endpoint.delete(`/cart/${itemId}`);
}

export function updateCartItem(itemId: string, data: any) {
  return endpoint.put(`/cart/${itemId}`, data);
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

export function applyCoupon(code: string) {
  return endpoint.post(`/checkout/apply-coupon`, { code });
}
