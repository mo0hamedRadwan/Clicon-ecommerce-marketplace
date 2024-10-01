import { categoriesAtom } from "apps/front-office/design-system/atoms/categoriesAtom";
import { useClickOutside } from "apps/front-office/design-system/hooks/use-click-outside";
import { isRTL } from "apps/front-office/utils/helpers";
import SubCategoryMenu from "./SubCategoryMenu";

type AllCategoriesMenuPropsType = {
  setOpenCategoriesMenu: (open: boolean) => void;
};

export default function AllCategoriesMenu({
  setOpenCategoriesMenu,
}: AllCategoriesMenuPropsType) {
  const categories = categoriesAtom.use("parentCategories");
  const refMenu = useClickOutside(() => setOpenCategoriesMenu(false));

  return (
    <div
      ref={refMenu}
      className={`z-20 absolute top-16 ${isRTL() ? "right-0" : "left-0"} w-60 py-2 bg-white rounded shadow-2`}>
      <ul className=" text-sm flex flex-col text-black rounded">
        {categories.map(category => (
          <li
            key={category.id}
            className="space-between-center py-2 px-4 hover:bg-gray-100 duration-200 group">
            <span className="group-hover:font-bold">{category.name}</span>
            <span className="hidden group-hover:block">&gt;</span>

            <SubCategoryMenu
              subcategories={category.subCategories}
              // categoryTopProducts={category.topProducts}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
