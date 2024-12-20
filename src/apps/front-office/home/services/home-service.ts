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
  // return endpoint.get("/products?wf=1", {
  //   params,
  // });
  return endpoint.get("/products", {
    params,
  });
}

export function getProduct(productId: string) {
  return endpoint.get(`/products/${productId}`);
}

export function subscribeNewLetters(data: any) {
  return endpoint.post("/newsletter/subscribe", data);
}
