import { accountRoutes } from "../utils/router";
import URLS from "../utils/urls";
import AccountDashboardTab from "./pages/AccountDashboardTab";
import BrowsingHistoryTab from "./pages/BrowsingHistoryTab";
import CardsAndAddressesTab from "./pages/CardsAndAddressesTab";
import CartTab from "./pages/CartTab";
import CompareTab from "./pages/CompareTab";
import LogoutTab from "./pages/LogoutTab";
import OrderHistoryTab from "./pages/OrderHistoryTab";
import SettingsTab from "./pages/SettingsTab";
import TrackOrderDetailsTab from "./pages/TrackOrderDetailsTab";
import TrackOrderTab from "./pages/TrackOrderTab";
import WishlistTab from "./pages/WishlistTab";

accountRoutes([
  {
    path: URLS.userAccount.dashboard,
    component: AccountDashboardTab,
  },
  {
    path: URLS.userAccount.orderHistory.root,
    component: OrderHistoryTab,
  },
  {
    path: URLS.userAccount.orderHistory.viewRoute,
    component: TrackOrderDetailsTab,
  },
  {
    path: URLS.userAccount.trackOrder.root,
    component: TrackOrderTab,
  },
  {
    path: URLS.userAccount.trackOrder.viewRoute,
    component: TrackOrderDetailsTab,
  },
  {
    path: URLS.userAccount.cart,
    component: CartTab,
  },
  {
    path: URLS.userAccount.wishlist,
    component: WishlistTab,
  },
  {
    path: URLS.userAccount.compare,
    component: CompareTab,
  },
  {
    path: URLS.userAccount.cardsAndAddresses,
    component: CardsAndAddressesTab,
  },
  {
    path: URLS.userAccount.browsingHistory,
    component: BrowsingHistoryTab,
  },
  {
    path: URLS.userAccount.settings,
    component: SettingsTab,
  },
  {
    path: URLS.userAccount.logout,
    component: LogoutTab,
  },
  // {
  //   path: URLS.userAccount.root,
  //   redirect: URLS.userAccount.dashboard,
  // },
]);
