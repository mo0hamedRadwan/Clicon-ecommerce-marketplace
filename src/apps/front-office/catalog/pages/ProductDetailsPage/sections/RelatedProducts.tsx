import ColumnProducts from "apps/front-office/design-system/components/ColumnProducts";
import { relatedProducts } from "shared/data/homeData";

export default function RelatedProducts() {
  return (
    <ul className="container py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {relatedProducts.map(column => (
        <li key={column.title}>
          <ColumnProducts
            title={column.title}
            products={column.products}
            className="mt-5"
          />
        </li>
      ))}
    </ul>
  );
}
