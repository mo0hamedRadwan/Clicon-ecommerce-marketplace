import ColumnProducts from "components/ColumnProducts";
import { topProducts } from "shared/data/homeData";

export default function TopProducts() {
  return (
    <ul className="container py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {topProducts.map(column => (
        <li key={column.title}>
          <ColumnProducts title={column.title} products={column.products} />
        </li>
      ))}
    </ul>
  );
}
