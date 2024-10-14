import endpoint from "shared/endpoint";

export function getCompare() {
  return endpoint.get("/compare");
}

export function addToCompare(productId: string) {
  return endpoint.post(`/compare/${productId}`);
}

export function removeFromCompare(productId: string) {
  return endpoint.delete(`/compare/${productId}`);
}
