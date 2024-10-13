import { trans } from "@mongez/localization";
import { currentRoute, Link } from "@mongez/react-router";

export default function CustomBreadcrumb() {
  const paths = currentRoute().split("/").slice(1);
  let lastRoute = paths.pop();

  if (!paths.find(path => path === "products")) {
    lastRoute = lastRoute?.replace("-", "");
  }

  // Hidden breadcrump from home page
  if (paths.length === 0 && !lastRoute) return;

  return (
    <div className="py-5 bg-gray-150 text-gray-550">
      <ul className="container center-y gap-x-2">
        <li>
          <Link to="/" className="center-y gap-x-2">
            <span className="text-2xl">
              <i className="bx bx-home"></i>
            </span>
            <span>{trans("home")}</span>
            <span>&gt;</span>
          </Link>
        </li>
        {paths.map((path, index) => (
          <li key={index} className="">
            <Link to={`/${path}`} className="center-y gap-x-2">
              <span>{trans(path.replace("-", ""))}</span>
              <span>&gt;</span>
            </Link>
          </li>
        ))}

        <li className="text-sky-550">{trans(lastRoute!)}</li>
      </ul>
    </div>
  );
}
