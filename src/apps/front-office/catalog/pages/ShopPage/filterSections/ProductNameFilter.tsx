import { trans } from "@mongez/localization";
import { useOnce } from "@mongez/react-hooks";
import { queryString } from "@mongez/react-router";
import { shopAtom } from "apps/front-office/catalog/atoms/shopAtom";
import TextInput from "apps/front-office/design-system/components/form/TextInput";
import { isRTL } from "apps/front-office/utils/helpers";

export default function ProductNameFilter() {
  const handleByProductName = (productName: string) => {
    productName = productName.trim();
    const query = queryString.toQueryString({
      ...queryString.all(),
      name: productName,
    });
    queryString.update(query);
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
