import cache, {
  PlainLocalStorageDriver,
  setCacheConfigurations,
} from "@mongez/cache";
import { atom } from "@mongez/react-atom";
import { HistoryType, Product } from "../types";

setCacheConfigurations({
  driver: new PlainLocalStorageDriver(),
});

type BrowseHistoryDataType = {
  productsHistory: HistoryType;
};

type BrowseHistoryActionsType = {
  addProductToHistory: (product: Product) => void;
  removeProductFromHistory: (product: Product) => void;
};

export const browseHistoryAtom = atom<
  BrowseHistoryDataType,
  BrowseHistoryActionsType
>({
  key: "browseHistory",
  default: {
    productsHistory: cache.get("history", {}),
  },
  beforeUpdate(newHistory: BrowseHistoryDataType) {
    cache.set("history", newHistory.productsHistory);
    return newHistory;
  },
  actions: {
    addProductToHistory: (product: Product) => {
      const history = browseHistoryAtom.get("productsHistory");
      const date = new Date().toLocaleDateString("en-Us", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      if (date in history) {
        const products = history[date];
        const productExist = products.find(p => p.id === product.id);
        if (!productExist) {
          products.push(product);
          browseHistoryAtom.update(prev => ({
            productsHistory: {
              ...prev.productsHistory,
              [date]: products,
            },
          }));
        }
      } else {
        browseHistoryAtom.update(prev => ({
          productsHistory: { ...prev.productsHistory, [date]: [product] },
        }));
      }
    },
    removeProductFromHistory: (product: Product, date: string) => {
      const history = browseHistoryAtom.get("productsHistory");
      const products = history[date];
      browseHistoryAtom.update(prev => ({
        productsHistory: {
          ...prev.productsHistory,
          [date]: products.filter(p => p.id !== product.id),
        },
      }));
    },
  },
});
