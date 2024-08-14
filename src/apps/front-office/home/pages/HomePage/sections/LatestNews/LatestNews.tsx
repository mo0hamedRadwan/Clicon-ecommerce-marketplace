import { trans } from "@mongez/localization";

export default function LatestNews() {
  return (
    <div className="p-10 container bg-gray-150">
      <h2>{`${trans("latest")} ${trans("news")}`}</h2>
      <ul className=""></ul>
    </div>
  );
}
