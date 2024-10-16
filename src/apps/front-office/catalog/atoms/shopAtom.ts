import { atom } from "@mongez/react-atom";
import { PaginationInfo, Product } from "apps/front-office/design-system/types";
import { getProducts } from "apps/front-office/home/services/home-service";

export const minPrice = 1;
export const maxPrice = 10000;
export const priceGap = 0;

type shopDataType = {
  loading: boolean;
  products: Product[];
  paginationInfo: PaginationInfo;
  error: string;
  filter: {
    name?: string;
    sortByOption?: string;
    category?: string;
    brand?: string;
    tag?: string;
    minPrice?: number;
    maxPrice?: number;
    limit?: number;
  };
};

type shopActionsType = {
  loadProducts: (params?: any) => void;
  updateFilter: (key: string, value: number | string) => void;
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
    filter: {
      minPrice: minPrice,
      maxPrice: maxPrice,
      // change limit to 2 products to see pagination
      limit: 16,
    },
  },
  actions: {
    loadProducts: (params?: any) => {
      shopAtom.update(state => ({
        loading: true,
        products: state.products,
        paginationInfo: {
          limit: 0,
          page: 1,
          pages: 1,
          result: 0,
          total: 0,
        },
        error: "",
        filter: {
          name:
            params?.name ||
            (params?.name === "" ? undefined : state.filter.name),
          sortByOption: params?.sortByOption || state.filter.sortByOption,
          category:
            params?.category ||
            (params?.category === "" ? undefined : state.filter.category),
          brand: params?.brand || state.filter.brand,
          tag: params?.tag || state.filter.tag,
          minPrice: params?.minPrice || state.filter.minPrice,
          maxPrice: params?.maxPrice || state.filter.maxPrice,
          limit: params?.limit || state.filter.limit,
        },
      }));

      getProducts({
        ...shopAtom.get("filter"),
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

    updateFilter: (key: string, value: number | string) => {
      shopAtom.change("filter", {
        ...shopAtom.get("filter"),
        [key]: value,
      });
      shopAtom.loadProducts();
    },
  },
});
