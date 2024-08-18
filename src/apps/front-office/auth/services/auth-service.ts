import endpoint from "shared/endpoint";

/**
 * Get Auths list
 */
export function getAuthsList(params: any = {}) {
  return endpoint.get("/auth", {
    params,
  });
}

/**
 * Get auth details
 */
export function getAuth(id: string | number) {
  return endpoint.get("/auth/" + id);
}
