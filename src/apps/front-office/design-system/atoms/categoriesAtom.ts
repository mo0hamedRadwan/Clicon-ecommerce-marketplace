import { atom } from "@mongez/react-atom";
import { getCategories } from "apps/front-office/home/services/home-service";
import { Category, PaginationInfo } from "design-system/types";
import toast from "react-hot-toast";

type categoriesDataType = {
  loading: boolean;
  paginationInfo: PaginationInfo;
  parentCategories: (Category & {
    subCategories: Category[];
  })[];
  error: string;
};

type categoriesActionsType = {
  loadCategories: () => void;
};

export const categoriesAtom = atom<categoriesDataType, categoriesActionsType>({
  key: "categories",
  default: {
    loading: false,
    paginationInfo: {
      limit: 0,
      page: 1,
      pages: 1,
      result: 0,
      total: 0,
    },
    parentCategories: [],
    error: "",
  },
  actions: {
    loadCategories: () => {
      categoriesAtom.change("loading", true);
      getCategories({
        hasParent: false,
      })
        .then(response => {
          // console.log(response);
          categoriesAtom.change("paginationInfo", response.data.paginationInfo);
          categoriesAtom.change("parentCategories", response.data.categories);
          categoriesAtom.get("parentCategories").forEach(parentCategory => {
            getCategories({
              parent: parentCategory.id,
            })
              .then(childResponse => {
                parentCategory.subCategories = childResponse.data.categories;
              })
              .catch(error => {
                console.error("Error fetching children categories:", error);
                toast.error("Failed to load categories");
                categoriesAtom.change("error", "Failed to load categories");
                categoriesAtom.change("loading", false);
              });
          });
          categoriesAtom.change("loading", false);
        })
        .catch(error => {
          console.error("Error fetching parent categories:", error);
          toast.error("Failed to load categories");
          categoriesAtom.change("error", "Failed to load categories");
          categoriesAtom.change("loading", false);
        });
    },
  },
});
