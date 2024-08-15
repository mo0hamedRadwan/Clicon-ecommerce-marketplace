import { trans } from "@mongez/localization";

export default function LatestNews() {
  return (
    <div className="p-10 container bg-gray-150">
      <h2>{`${trans("latest")} ${trans("news")}`}</h2>
      <ul className=""></ul>

      <i className="bx bx-user-circle"></i>
      <i className="bx bx-calendar-alt"></i>
      <i className="bx bx-message-rounded-dots"></i>
    </div>
  );
}
