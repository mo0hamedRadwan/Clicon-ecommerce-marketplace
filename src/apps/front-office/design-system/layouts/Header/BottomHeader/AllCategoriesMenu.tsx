import { isRTL } from "apps/front-office/utils/helpers";
import { categories } from "shared/data/testData";
import SubCategoryMenu from "./SubCategoryMenu";

export default function AllCategoriesMenu() {
  return (
    <div
      className={`z-20 absolute top-16 ${isRTL() ? "right-0" : "left-0"} w-60 py-2 bg-white rounded shadow-2`}>
      <ul className=" text-sm flex flex-col text-black rounded">
        {categories.map(category => (
          <li
            key={category.id}
            className="space-between-center py-2 px-4 hover:font-bold hover:bg-gray-100 duration-200 group">
            <span>{category.name}</span>
            <span className="hidden group-hover:block">&gt;</span>

            <SubCategoryMenu
              subcategories={category.subCategories}
              categoryTopProducts={category.topProducts}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
