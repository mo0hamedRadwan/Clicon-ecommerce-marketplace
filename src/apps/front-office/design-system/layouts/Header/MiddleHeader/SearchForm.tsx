import { trans } from "@mongez/localization";
import { useDebounce } from "apps/front-office/design-system/hooks/use-debounce";
import { Product } from "apps/front-office/design-system/types";
import { getProducts } from "apps/front-office/home/services/home-service";
import { isRTL } from "apps/front-office/utils/helpers";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SuggestProducts from "./SuggestProducts";

export default function SearchForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const debounceSearchInput = useDebounce(searchInput, 500);

  useEffect(() => {
    setLoading(true);
    getProducts({
      name: debounceSearchInput,
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
  }, [debounceSearchInput]);

  return (
    <div className="relative hidden sm:block sm:w-[320px] lg:w-[500px] xl:w-[650px] text-xl text-black">
      <input
        type="text"
        className="w-full py-3 px-5 rounded outline-none "
        placeholder={`${trans("searchFor")} ${trans("products")}`}
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      <span
        className={`absolute top-2 ${isRTL() ? "left-6" : "right-6"} text-3xl`}>
        <i className="bx bx-search"></i>
      </span>

      {debounceSearchInput && (
        <SuggestProducts loading={loading} products={products} />
      )}
    </div>
  );
}
