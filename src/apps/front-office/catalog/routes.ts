import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "../utils/urls";
import CartPage from "./pages/CartPage";
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
  {
    path: URLS.cart,
    component: CartPage,
  },
]);
