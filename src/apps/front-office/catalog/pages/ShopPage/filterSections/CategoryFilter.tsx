import { trans } from "@mongez/localization";
import { queryString } from "@mongez/react-router";
import { shopAtom } from "apps/front-office/catalog/atoms/shopAtom";
import { categoriesAtom } from "apps/front-office/design-system/atoms/categoriesAtom";
import RatioInput from "apps/front-office/design-system/components/form/RatioInput";
import { removeUndefinedKeys } from "apps/front-office/utils/methods";

export default function CategoryFilter() {
  const categories = categoriesAtom.use("parentCategories");

  const handleCategoryFilter = (id?: string) => {
    console.log(id);
    const query = queryString.all();
    query.category = id ? categories.find(c => c.id == id)!.name : undefined;
    const newQuery = removeUndefinedKeys(query);
    queryString.update(newQuery);

    console.log(queryString.all());
    shopAtom.loadProducts({
      category: id,
    });
  };

  return (
    <>
      <h2 className="text-xl">{trans("category").toUpperCase()}</h2>
      <ul className="flex flex-col gap-y-2">
        <li className="flex items-start">
          <RatioInput
            name="category"
            id="all"
            checked={!queryString.get("category")}
            value={undefined}
            label="all"
            className="center-y flex-row-reverse gap-x-3"
            onChange={handleCategoryFilter}
          />
        </li>
        {categories.map(category => (
          <li key={category.id} className="flex items-start">
            <RatioInput
              name="category"
              id={category.id}
              value={category.id}
              label={category.name}
              className="center-y flex-row-reverse gap-x-3"
              onChange={handleCategoryFilter}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
