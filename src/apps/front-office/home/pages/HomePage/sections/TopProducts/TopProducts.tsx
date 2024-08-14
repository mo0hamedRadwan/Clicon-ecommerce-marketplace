import ColumnProducts from "components/ColumnProducts";
import { topProducts } from "shared/data/homeData";

export default function TopProducts() {
  return (
    <ul className="container py-10 flex-center gap-5 flex-wrap">
      {topProducts.map(column => (
        <li key={column.title}>
          <ColumnProducts
            title={column.title}
            products={column.products}
            className="min-w-[320px] max-w-[500px]"
          />
        </li>
      ))}
    </ul>
  );
}
