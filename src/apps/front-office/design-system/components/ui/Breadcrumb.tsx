import { Link } from "@mongez/react-router";

type BreadcrumbPropsType = {
  paths: string[];
};

export default function Breadcrumb({ paths }: BreadcrumbPropsType) {
  return (
    <div className="bg-gray-500">
      <ul className="container center-y">
        {paths.map((path, index) => (
          <li key={path}>
            <Link to={`${path}`}>
              <span>{path}</span>
              {index !== paths.length - 1 && <span>/</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
