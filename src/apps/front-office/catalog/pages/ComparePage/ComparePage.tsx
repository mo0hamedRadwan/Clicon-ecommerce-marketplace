import CompareList from "./sections/CompareList";
import CompareTable from "./sections/CompareTable";

export default function ComparePage() {
  return (
    <div className="py-20 container">
      <div className="hidden sm:block">
        <CompareTable />
      </div>
      <div className="block sm:hidden">
        <CompareList />
      </div>
    </div>
  );
}
