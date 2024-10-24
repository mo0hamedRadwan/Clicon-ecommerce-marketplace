import { trans } from "@mongez/localization";
import { queryString } from "@mongez/react-router";
import CheckboxInput from "components/form/CheckboxInput";

const brands = [
  "brand1",
  "brand2",
  "brand3",
  "brand4",
  "brand5",
  "brand6",
  "brand7",
  "brand8",
  "brand9",
];

export default function PopularBrandsFilter() {
  const handleBrandFilter = (brand: string) => {
    const brands = queryString.get("brands", []);
    if (!brands.find(b => b === brand)) {
      brands.push(brand);
    }
    const query = queryString.toQueryString({
      ...queryString.all(),
      brands: brands,
    });
    queryString.update(query);
  };

  return (
    <>
      <h2 className="text-xl">{trans("popularBrands").toUpperCase()}</h2>
      <ul className="grid grid-cols-2">
        {brands.map(brand => (
          <li key={brand} className="flex items-center gap-x-2">
            <CheckboxInput
              name="brand-name"
              label={brand}
              value={brand}
              id={brand}
              onChange={handleBrandFilter}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
