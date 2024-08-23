import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "../utils/urls";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import WishlistPage from "./pages/WishlistPage";

publicRoutes([
  {
    path: URLS.product,
    component: ProductDetailsPage,
  },
  {
    path: URLS.wishlist,
    component: WishlistPage,
  },
]);
