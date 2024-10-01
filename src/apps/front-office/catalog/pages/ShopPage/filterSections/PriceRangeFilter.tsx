import { trans } from "@mongez/localization";
import NumberInput from "apps/front-office/design-system/components/form/NumberInput";
import RatioInput from "apps/front-office/design-system/components/form/RatioInput";
import PriceRange from "./PriceRange";

const pricesOptions = [
  { min: 0, max: 20 },
  { min: 25, max: 100 },
  { min: 100, max: 300 },
  { min: 300, max: 500 },
  { min: 500, max: 1000 },
  { min: 1000, max: 10000 },
];

export default function PriceRangeFilter() {
  return (
    <>
      <h2 className="text-xl">{trans("priceRange").toUpperCase()}</h2>
      <div className="flex flex-col gap-y-5">
        <div>
          <PriceRange />
        </div>
        <div className="flex gap-2">
          <NumberInput
            placeholder={trans("minPrice")}
            number
            min={0}
            max={10000}
          />
          <NumberInput
            placeholder={trans("maxPrice")}
            number
            min={0}
            max={10000}
          />
        </div>
        <ul className="flex flex-col gap-y-2">
          {pricesOptions.map(option => (
            <li key={option.min} className="flex items-start">
              <RatioInput
                name="price-option"
                value={`${option.min}-`}
                label={
                  option.min === 0
                    ? `under$${option.max}`
                    : `$${option.min}to$${option.max}`
                }
                className="center-y flex-row-reverse gap-x-3"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
