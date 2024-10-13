import { trans } from "@mongez/localization";
import { useClickOutside } from "apps/front-office/design-system/hooks/use-click-outside";
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
  const debounceSearchInput = useDebounce(searchInput.trim(), 500);
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useClickOutside(() =>
    setTimeout(() => setOpenMenu(false), 1000),
  );

  useEffect(() => {
    if (!debounceSearchInput.length) return;
    setLoading(true);
    setOpenMenu(true);
    getProducts({
      name: debounceSearchInput,
    })
      .then(response => {
        console.log(response.data);
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        toast.error("Error fetching products");
        setLoading(false);
        setOpenMenu(false);
      });
  }, [debounceSearchInput]);

  return (
    <div
      className="relative hidden sm:block sm:w-[320px] lg:w-[500px] xl:w-[650px] text-xl text-black"
      ref={menuRef}>
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

      {debounceSearchInput && openMenu && products.length > 0 && (
        <SuggestProducts
          products={products}
          loading={loading}
          setOpenMenu={setOpenMenu}
        />
      )}
    </div>
  );
}
