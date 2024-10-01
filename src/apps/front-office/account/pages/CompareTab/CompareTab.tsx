import CompareList from "apps/front-office/catalog/pages/ComparePage/sections/CompareList";
import CompareTable2Cols from "apps/front-office/catalog/pages/ComparePage/sections/CompareTable2Cols";
import CompareTable3Cols from "apps/front-office/catalog/pages/ComparePage/sections/CompareTable3Cols";

export default function CompareTab() {
  return (
    <>
      <div className="hidden xl:block">
        <CompareTable3Cols />
      </div>
      <div className="hidden sm:block md:hidden lg:block xl:hidden">
        <CompareTable2Cols />
      </div>
      <div className="block sm:hidden md:block lg:hidden">
        <CompareList />
      </div>
    </>
  );
}
