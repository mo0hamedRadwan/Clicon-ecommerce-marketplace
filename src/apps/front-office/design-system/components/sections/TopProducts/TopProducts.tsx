import { Row } from "apps/front-office/design-system/types";
import ColumnProducts from "components/ColumnProducts";

type TopProductsPropsType = {
  row: Row;
};

export default function TopProducts({ row }: TopProductsPropsType) {
  return (
    <ul className="container py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {row.columns.map(column => (
        <li key={column.module.title}>
          <ColumnProducts
            title={column.module.title}
            products={column.module.products!}
          />
        </li>
      ))}
    </ul>
  );
}
