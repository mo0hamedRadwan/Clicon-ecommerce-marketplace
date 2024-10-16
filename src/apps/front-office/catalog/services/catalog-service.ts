import { AddressType } from "apps/front-office/design-system/types";
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

export function getShippingCities() {
  return endpoint.get("/cities/shipping");
}

export function createAddress(address: AddressType) {
  return endpoint.post("/addresses", address);
}

export function updateAddress(addressId: string, address: AddressType) {
  return endpoint.put(`/addresses/${addressId}`, address);
}

export function deleteAddress(addressId: string) {
  return endpoint.delete(`/addresses/${addressId}`);
}

export function setPaymentMethod(paymentMethod: string = "cashOnDelivery") {
  return endpoint.patch("/checkout/set-payment-method", { paymentMethod });
}

export function setShippingMethod(type: string = "standard") {
  return endpoint.post("/checkout/set-shipping-method", { type });
}

export function createCheckout(notes: string = "") {
  return endpoint.post("/checkout", { notes });
}

export function getOrders() {
  return endpoint.get("/orders");
}

export function getOrderDetails(orderId: string) {
  return endpoint.get(`/orders/${orderId}`);
}

export function cancelOrder(orderId: string) {
  return endpoint.post(`/orders/${orderId}/cancel`);
}
