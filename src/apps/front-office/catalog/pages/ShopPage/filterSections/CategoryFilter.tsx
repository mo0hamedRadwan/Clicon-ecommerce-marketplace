import { trans } from "@mongez/localization";
import { queryString } from "@mongez/react-router";
import { shopAtom } from "apps/front-office/catalog/atoms/shopAtom";
import { categoriesAtom } from "apps/front-office/design-system/atoms/categoriesAtom";
import { removeUndefinedKeys } from "apps/front-office/utils/methods";
import RadioInput from "components/form/RadioInput";
import { useEffect, useState } from "react";

export default function CategoryFilter() {
  const categories = categoriesAtom.use("parentCategories");
  const [currentCategory, setCurrentCategory] = useState<
    string | null | undefined
  >(queryString.get("category", null));

  const handleCategoryFilter = (id?: string) => {
    const query = queryString.all();
    const categoryName = categories.find(c => c.id == id)?.name;

    if (currentCategory === categoryName) return;

    query.category = categoryName;
    const newQuery = removeUndefinedKeys(query);
    queryString.update(newQuery);
    setCurrentCategory(categoryName);

    console.log(queryString.all());
    shopAtom.loadProducts({
      category: id ? id : "",
    });
  };

  useEffect(() => {
    const categoryName = queryString.get("category", "");
    if (categories.length === 0 || !categoryName) return;

    const category = categories.find(
      c => c.name.toLowerCase() === categoryName.toLowerCase(),
    );

    if (!category) return;

    shopAtom.loadProducts({
      category: category.id,
    });
  }, [categories]);

  return (
    <>
      <h2 className="text-xl">{trans("category").toUpperCase()}</h2>
      <ul className="flex flex-col gap-y-2">
        <li className="flex items-start">
          <RadioInput
            name="category"
            id="all"
            value={null}
            label="all"
            checked={currentCategory === null || currentCategory === undefined}
            className="center-y flex-row-reverse gap-x-3"
            onChange={handleCategoryFilter}
          />
        </li>
        {categories.map(category => (
          <li key={category.id} className="flex items-start">
            <RadioInput
              name="category"
              id={category.id}
              value={category.id}
              label={category.name}
              checked={category.name === currentCategory}
              className="center-y flex-row-reverse gap-x-3"
              onChange={handleCategoryFilter}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
