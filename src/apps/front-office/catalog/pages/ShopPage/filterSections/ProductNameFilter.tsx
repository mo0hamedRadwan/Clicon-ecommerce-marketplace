import { trans } from "@mongez/localization";
import { useOnce } from "@mongez/react-hooks";
import { queryString } from "@mongez/react-router";
import { shopAtom } from "apps/front-office/catalog/atoms/shopAtom";
import { isRTL } from "apps/front-office/utils/helpers";
import { removeUndefinedKeys } from "apps/front-office/utils/methods";
import TextInput from "components/form/TextInput";

export default function ProductNameFilter() {
  const searchProductName = shopAtom.use("filter").name;

  const handleByProductName = (productName: string) => {
    productName = productName.trim();

    if (searchProductName === productName) return;

    const query = queryString.all();
    query.name = productName ? productName : undefined;
    const newQuery = removeUndefinedKeys(query);
    queryString.update(newQuery);
    shopAtom.loadProducts({
      name: productName,
    });
  };

  useOnce(() => {
    const query = queryString.all();
    if (query.name) handleByProductName(query.name);
  });

  return (
    <div className="relative w-96 border border-gray-150">
      <TextInput
        name="search"
        placeholder={`${trans("searchFor")} ${trans("products")}`}
        onChange={handleByProductName}
      />
      <span
        className={`absolute top-2 ${isRTL() ? "left-6" : "right-6"} text-3xl`}>
        <i className="bx bx-search"></i>
      </span>
    </div>
  );
}
