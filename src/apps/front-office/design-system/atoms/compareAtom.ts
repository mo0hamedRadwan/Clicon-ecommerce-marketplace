import cache, {
  PlainLocalStorageDriver,
  setCacheConfigurations,
} from "@mongez/cache";
import { atom } from "@mongez/react-atom";
import { Product } from "../types";

setCacheConfigurations({
  driver: new PlainLocalStorageDriver(),
});

type CompareDataType = {
  products: Product[];
};

type CompareActionsType = {
  addProductToCompare: (product: Product) => void;
  removeProductFromCompare: (product: Product) => void;
  toggleCompareProduct: (product: Product) => void;
};

export const compareAtom = atom<CompareDataType, CompareActionsType>({
  key: "compare",
  default: {
    products: cache.get("cmp-products", []),
  },
  beforeUpdate(newProducts: CompareDataType) {
    cache.set("cmp-products", newProducts.products);
    return newProducts;
  },
  actions: {
    addProductToCompare: (product: Product) => {
      compareAtom.update(state => ({
        ...state,
        products: [...state.products, product],
      }));
    },
    removeProductFromCompare: (product: Product) => {
      compareAtom.update(state => ({
        ...state,
        products: state.products.filter(p => p.id !== product.id),
      }));
    },
    toggleCompareProduct: (product: Product) => {
      const productExists = compareAtom
        .get("products")
        .find(p => p.id === product.id);

      if (productExists) {
        compareAtom.removeProductFromCompare(product);
      } else {
        compareAtom.addProductToCompare(product);
      }
    },
  },
});
