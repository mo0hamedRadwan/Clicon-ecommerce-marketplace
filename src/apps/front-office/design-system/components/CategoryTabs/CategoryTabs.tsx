import { trans } from "@mongez/localization";
import LinkAsButton from "apps/front-office/design-system/components/ui/LinkAsButton";
import { getProducts } from "apps/front-office/home/services/home-service";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Category, Product } from "../../types";
import ProductsGrid from "../ProductsGrid";
import Loader1 from "../loaders/Loader1";

type CategoryTabsPropsType = {
  heading: string;
  categories: Category[];
};

export default function CategoryTabs({
  heading,
  categories,
}: CategoryTabsPropsType) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);
    getProducts({
      category: activeCategory === "all" ? undefined : activeCategory,
    })
      .then(response => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        toast.error("Error fetching products");
        setLoading(false);
      });
  }, [activeCategory]);

  return (
    <div className="w-full flex flex-col gap-y-5">
      <div className="space-between flex-wrap gap-5">
        <h2 className="text-2xl font-semibold">{heading}</h2>
        <div className="center-y gap-x-3">
          <ul className="hidden sm:center-y gap-x-2">
            {[{ id: "all", name: trans("All") }, ...categories]
              .slice(0, 5) // 5 categories just for theme design
              .map(category => (
                <li
                  key={category.id}
                  className={`text-sm cursor-pointer hover:text-orange-450 border-b-2 ${
                    activeCategory === category.id
                      ? "font-semibold border-orange-450"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveCategory(category.id)}>
                  {category.name}
                </li>
              ))}
          </ul>
          <LinkAsButton
            variant="text"
            href={URLS.deals}
            endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
            className="p-0 text-orange-450">{`${trans("browse")} ${trans("all")} ${trans("products")}`}</LinkAsButton>
        </div>
      </div>

      {loading ? (
        <div className="w-full h-[692px] flex center">
          <Loader1 />
        </div>
      ) : (
        <ProductsGrid
          products={products.slice(0, 8)}
          className="gap-5 lg:gap-5"
          showRating
        />
      )}
    </div>
  );
}
