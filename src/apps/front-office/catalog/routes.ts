import { guardedRoutes, publicRoutes } from "apps/front-office/utils/router";
import URLS from "../utils/urls";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import ComparePage from "./pages/ComparePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ShopPage from "./pages/ShopPage";
import TrackOrderDetailsPage from "./pages/TrackOrderDetailsPage";
import TrackOrderPage from "./pages/TrackOrderPage";
import WishlistPage from "./pages/WishlistPage";

publicRoutes([
  {
    path: URLS.product.viewRoute,
    component: ProductDetailsPage,
  },
  {
    path: URLS.pages.trackOrder.root,
    component: TrackOrderPage,
  },
  {
    path: URLS.shop.root,
    component: ShopPage,
  },
]);

guardedRoutes([
  {
    path: URLS.wishlist,
    component: WishlistPage,
  },
  {
    path: URLS.cart,
    component: CartPage,
  },
  {
    path: URLS.checkout.root,
    component: CheckoutPage,
  },
  {
    path: URLS.checkout.success,
    component: CheckoutSuccessPage,
  },
  {
    path: URLS.compare,
    component: ComparePage,
  },
  {
    path: URLS.pages.trackOrder.viewRoute,
    component: TrackOrderDetailsPage,
  },
]);
