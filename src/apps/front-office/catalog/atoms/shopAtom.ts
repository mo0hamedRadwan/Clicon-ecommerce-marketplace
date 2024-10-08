import { atom } from "@mongez/react-atom";
import { queryString } from "@mongez/react-router";
import { PaginationInfo, Product } from "apps/front-office/design-system/types";
import { getProducts } from "apps/front-office/home/services/home-service";

type shopDataType = {
  loading: boolean;
  products: Product[];
  paginationInfo: PaginationInfo;
  error: string;
  filter: {
    productName?: string;
    sortByOption?: string;
    category?: string;
    brand?: string;
    tag?: string;
    minPrice?: number;
    maxPrice?: number;
  };
};

type shopActionsType = {
  loadProducts: (params?: any) => void;
};

export const shopAtom = atom<shopDataType, shopActionsType>({
  key: "shop",
  default: {
    loading: false,
    products: [],
    paginationInfo: {
      limit: 0,
      page: 1,
      pages: 1,
      result: 0,
      total: 0,
    },
    error: "",
    filter: {},
  },
  actions: {
    loadProducts: (params?: any) => {
      shopAtom.change("loading", true);
      shopAtom.change("filter", {
        ...params,
        ...queryString.all(),
      });
      getProducts({
        ...queryString.all(),
        ...params,
        // change limit to 2 products to see pagination
        limit: 16,
      })
        .then(response => {
          console.log(response);
          shopAtom.merge({
            loading: false,
            products: response.data.products,
            paginationInfo: response.data.paginationInfo,
            error: "",
          });
        })
        .catch(error => {
          shopAtom.change("loading", false);
          shopAtom.change("error", error.response.message);
        });
    },
  },
});
