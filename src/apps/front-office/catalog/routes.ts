import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "../utils/urls";
import ProductDetailsPage from "./pages/ProductDetailsPage";

publicRoutes([
  {
    path: URLS.product,
    component: ProductDetailsPage,
  },
]);
