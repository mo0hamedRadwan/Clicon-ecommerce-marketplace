import { navigateTo } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { useEffect } from "react";
import user from "../../user";

export default function LogoutTab() {
  if (user.isGuest) navigateTo(URLS.home);

  useEffect(() => {
    console.log("Logged out");
    user.logout();
    navigateTo(URLS.home);
  }, []);

  return <></>;
}
