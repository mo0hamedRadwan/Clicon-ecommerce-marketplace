import { trans } from "@mongez/localization";
import { queryString } from "@mongez/react-router";
import { shopAtom } from "apps/front-office/catalog/atoms/shopAtom";
import { categoriesAtom } from "apps/front-office/design-system/atoms/categoriesAtom";
import RatioInput from "apps/front-office/design-system/components/form/RatioInput";

export default function CategoryFilter() {
  const categories = categoriesAtom.use("parentCategories");

  const handleCategoryFilter = (id: string) => {
    const query = queryString.toQueryString({
      ...queryString.all(),
      category: id ? categories.find(c => c.id == id)!.name : "",
    });
    queryString.update(query);
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
