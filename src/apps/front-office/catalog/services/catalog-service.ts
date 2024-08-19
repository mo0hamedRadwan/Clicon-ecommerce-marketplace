import endpoint from "shared/endpoint";

/**
 * Get Catalogs list
 */
export function getCatalogsList(params: any = {}) {
  return endpoint.get("/catalog", {
    params,
  });
}

/**
 * Get catalog details
 */
export function getCatalog(id: string | number) {
  return endpoint.get("/catalog/" + id);
}
