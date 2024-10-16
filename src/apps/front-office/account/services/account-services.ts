import { ChangePasswordDataType } from "apps/front-office/design-system/types";
import endpoint from "shared/endpoint";

/**
 * Get current user data
 */
export function getProfile() {
  return endpoint.get("/me");
}

/**
 * Edit user profile
 */
export function editProfile(data: any) {
  return endpoint.post("/me", data);
}

/**
 * Change password
 */
export function changePassword(data: ChangePasswordDataType) {
  return endpoint.post("/change-password", data);
}
