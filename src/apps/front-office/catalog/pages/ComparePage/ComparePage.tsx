import CompareList from "./sections/CompareList";
import CompareTable2Cols from "./sections/CompareTable2Cols";
import CompareTable3Cols from "./sections/CompareTable3Cols";

export default function ComparePage() {
  return (
    <div className="py-20 container">
      <div className="hidden lg:block">
        <CompareTable3Cols />
      </div>
      <div className="hidden sm:block lg:hidden">
        <CompareTable2Cols />
      </div>
      <div className="block sm:hidden">
        <CompareList />
      </div>
    </div>
  );
}
