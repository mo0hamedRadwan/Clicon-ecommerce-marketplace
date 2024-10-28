import { RunTimeDriver } from "@mongez/cache";
import Endpoint, { setCurrentEndpoint } from "@mongez/http";
import { getCurrentLocaleCode } from "@mongez/localization";
import { navigateTo } from "@mongez/react-router";
import user from "apps/front-office/account/user";
import URLS from "apps/front-office/utils/urls";
import { AxiosResponse } from "axios";
import { userAtom } from "../apps/front-office/account/atoms";
import { User } from "../apps/front-office/design-system/types";
import { apiBaseUrl, clientId } from "./flags";

const endpoint = new Endpoint({
  putToPost: false,
  baseURL: apiBaseUrl,
  cache: false,
  cacheOptions: {
    driver: new RunTimeDriver(),
    expiresAfter: 60 * 60 * 24 * 7, // 1 week, but because it is a runtime driver, it will be cleared when the page is refreshed
  },
  setAuthorizationHeader: () => {
    if (user.isLoggedIn()) {
      return `Bearer ${user.getAccessToken()}`;
    }
  },
});

const endpointEvents = endpoint.events;

endpointEvents.beforeSending(config => {
  const headers: any = config.headers;
  headers["locale"] = getCurrentLocaleCode();
  headers["client-id"] = clientId;
});

endpointEvents.onSuccess((response: AxiosResponse) => {
  if (response.data.data) {
    response.data = response.data.data;
  }

  if (response.data.user) {
    user.login(response.data.user);
    userAtom.update(user.all() as User);
  }
});

endpointEvents.onError(response => {
  if (response.data?.data) {
    response.data = response.data.data;
  }

  if (response.status === 401) {
    user.logout();
    navigateTo(URLS.auth.signin.root);
  }
});

setCurrentEndpoint(endpoint);

export default endpoint;
