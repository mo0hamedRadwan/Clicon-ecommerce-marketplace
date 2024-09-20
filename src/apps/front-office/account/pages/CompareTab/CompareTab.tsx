import CompareList from "apps/front-office/catalog/pages/ComparePage/sections/CompareList";
import CompareTable from "apps/front-office/catalog/pages/ComparePage/sections/CompareTable";

export default function CompareTab() {
  return (
    <>
      <div className="hidden sm:block md:hidden lg:block">
        <CompareTable />
      </div>
      <div className="block sm:hidden md:block lg:hidden">
        <CompareList />
      </div>
    </>
  );
}
