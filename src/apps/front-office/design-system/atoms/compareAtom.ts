import { atom } from "@mongez/react-atom";
import {
  addToCompare,
  getCompare,
  removeFromCompare,
} from "../services/compare-services";
import { Product } from "../types";

type CompareDataType = {
  loading: boolean;
  products: Product[];
  error: string;
};

type CompareActionsType = {
  loadCompareProducts: () => void;
  addProductToCompare: (
    setLoading: (value: boolean) => void,
    product: Product,
  ) => void;
  removeProductFromCompare: (
    setLoading: (value: boolean) => void,
    product: Product,
  ) => void;
  toggleCompareProduct: (
    setLoading: (value: boolean) => void,
    product: Product,
  ) => void;
};

export const compareAtom = atom<CompareDataType, CompareActionsType>({
  key: "compare",
  default: {
    loading: false,
    products: [],
    error: "",
  },
  actions: {
    loadCompareProducts: () => {
      // Fetch compare products from your backend API or cache
      compareAtom.change("loading", true);
      getCompare()
        .then(response => {
          console.log(response.data);
          const products = response.data.products;
          compareAtom.merge({
            loading: false,
            products,
          });
        })
        .catch(error => {
          console.error("Error fetching compare products:", error);
          compareAtom.change("loading", false);
        });
    },
    // Add, remove, and toggle actions for comparing products to the compare list.
    addProductToCompare: (
      setLoading: (value: boolean) => void,
      product: Product,
    ) => {
      setLoading(true);
      addToCompare(product.id)
        .then(response => {
          console.log(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error adding product to compare:", error);
          setLoading(false);
        });
      compareAtom.update(state => ({
        ...state,
        products: [...state.products, product],
      }));
    },
    removeProductFromCompare: (
      setLoading: (value: boolean) => void,
      product: Product,
    ) => {
      setLoading(true);
      removeFromCompare(product.id)
        .then(response => {
          console.log(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error removing product from compare:", error);
          setLoading(false);
        });
      compareAtom.update(state => ({
        ...state,
        products: state.products.filter(p => p.id !== product.id),
      }));
    },
    toggleCompareProduct: (
      setLoading: (value: boolean) => void,
      product: Product,
    ) => {
      const productExists = compareAtom
        .get("products")
        .find(p => p.id === product.id);

      if (productExists) {
        compareAtom.removeProductFromCompare(setLoading, product);
      } else {
        compareAtom.addProductToCompare(setLoading, product);
      }
    },
  },
});
