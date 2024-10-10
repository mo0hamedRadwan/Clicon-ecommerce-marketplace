import { trans } from "@mongez/localization";
import { useOnce } from "@mongez/react-hooks";
import { queryString } from "@mongez/react-router";
import { shopAtom } from "apps/front-office/catalog/atoms/shopAtom";
import NumberInput from "apps/front-office/design-system/components/form/NumberInput";
import RatioInput from "apps/front-office/design-system/components/form/RatioInput";
import { useDebounce } from "apps/front-office/design-system/hooks/use-debounce";
import { useEffect, useState } from "react";
import MultiRangeSliderPrice from "./MultiRangeSliderPrice";

const pricesOptions = [
  { min: 0, max: 100 },
  { min: 100, max: 500 },
  { min: 500, max: 1000 },
  { min: 1000, max: 2500 },
  { min: 2500, max: 5000 },
  { min: 5000, max: 10000 },
];

const minPrice = 0;
const maxPrice = 10000;
const priceGap = 100;

export default function PriceRangeFilter() {
  const query = queryString.all();
  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);

  // To delay requests
  const debouncedMinPrice = useDebounce(minValue.toString(), 1000);
  const debouncedMaxPrice = useDebounce(maxValue.toString(), 1000);

  // Load initial values from query string if exists
  useOnce(() => {
    if (query.minPrice) setMinValue(Number(query.minPrice));
    if (query.maxPrice) setMaxValue(Number(query.maxPrice));
  });

  useEffect(() => {
    if (!query.minPrice && !query.maxPrice) return;
    shopAtom.loadProducts({
      minPrice: debouncedMinPrice,
      maxPrice: debouncedMaxPrice,
    });
    // Query not dependencyList
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedMinPrice, debouncedMaxPrice]);

  const handleRangeSliderChange = e => {
    console.log("Slider range change");
    const { name, value } = e.target;

    if (name === "min_price") {
      if (+value + priceGap <= maxValue) {
        setMinValue(Number(value));
        query.minPrice = value;
        queryString.update(query);
      }
    } else {
      if (+value - priceGap >= minValue) {
        setMaxValue(Number(value));
        query.maxPrice = value;
        queryString.update(query);
      }
    }
  };

  const handlePricesOptionsChange = (value: string) => {
    const [min, max] = value.split("-");
    setMinValue(Number(min));
    setMaxValue(Number(max));
    // const query = queryString.toQueryString({
    //   ...queryString.all(),
    //   minPrice: min,
    //   maxPrice: max,
    // });
    query.minPrice = min;
    query.maxPrice = max;

    queryString.update(query);
  };

  return (
    <>
      <h2 className="text-xl">{trans("priceRange").toUpperCase()}</h2>
      <div className="flex flex-col gap-y-5">
        <div className="w-full">
          <MultiRangeSliderPrice
            minPrice={minPrice}
            maxPrice={maxPrice}
            minValue={minValue}
            maxValue={maxValue}
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
            handleChange={handleRangeSliderChange}
          />
        </div>
        <div className="flex gap-2">
          <NumberInput
            name="min_price"
            placeholder={trans("minPrice")}
            number
            min={minPrice}
            max={maxPrice}
            value={minValue}
            onChange={handleRangeSliderChange}
          />
          <NumberInput
            name="max_price"
            placeholder={trans("maxPrice")}
            number
            min={minPrice}
            max={maxPrice}
            value={maxValue}
            onChange={handleRangeSliderChange}
          />
        </div>
        <ul className="flex flex-col gap-y-2">
          {pricesOptions.map(option => (
            <li key={option.min} className="flex items-start">
              <RatioInput
                name="price-option"
                id={`${option.max}`}
                value={`${option.min}-${option.max}`}
                label={
                  option.min === 0
                    ? `under$${option.max}`
                    : `$${option.min}to$${option.max}`
                }
                className="center-y flex-row-reverse gap-x-3"
                onChange={handlePricesOptionsChange}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
