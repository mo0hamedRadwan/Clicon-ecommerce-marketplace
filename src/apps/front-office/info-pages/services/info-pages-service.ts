import endpoint from "shared/endpoint";

/**
 * Get InfoPages list
 */
export function getInfoPagesList(params: any = {}) {
  return endpoint.get("/info-pages", {
    params,
  });
}

/**
 * Get info-pages details
 */
export function getInfoPage(id: string | number) {
  return endpoint.get("/info-pages/" + id);
}
