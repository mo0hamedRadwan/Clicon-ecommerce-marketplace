import { trans } from "@mongez/localization";
import { FormControlChangeOptions } from "@mongez/react-form";
import { useOnce } from "@mongez/react-hooks";
import { queryString } from "@mongez/react-router";
import {
  maxPrice,
  minPrice,
  priceGap,
  shopAtom,
} from "apps/front-office/catalog/atoms/shopAtom";
import { useDebounce } from "apps/front-office/design-system/hooks/use-debounce";
import NumberInput from "components/form/NumberInput";
import RadioInput from "components/form/RadioInput";
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

export default function PriceRangeFilter() {
  const filter = shopAtom.use("filter");
  const [minValue, setMinValue] = useState<number>(filter.minPrice!);
  const [maxValue, setMaxValue] = useState<number>(filter.maxPrice!);

  // To delay requests
  const debouncedMinPrice = useDebounce(minValue.toString(), 1000);
  const debouncedMaxPrice = useDebounce(maxValue.toString(), 1000);

  // Load initial values from query string if exists
  useOnce(() => {
    const query = queryString.all();

    if (query.minPrice) {
      const e = {
        target: {
          name: "min_price",
          value: query.minPrice,
        },
      };
      handleRangeSliderChange(e);
    }
    if (query.maxPrice) {
      const e = {
        target: {
          name: "min_price",
          value: query.minPrice,
        },
      };
      handleRangeSliderChange(e);
    }
  });

  useEffect(() => {
    shopAtom.loadProducts({
      minPrice: debouncedMinPrice,
      maxPrice: debouncedMaxPrice,
    });
  }, [debouncedMinPrice, debouncedMaxPrice]);

  const handleRangeSliderChange = e => {
    const query = queryString.all();

    console.log("Slider range change");
    const { name, value } = e.target;
    console.log("name: " + name + " value: " + value);

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
    const query = queryString.all();

    const [min, max] = value.split("-");
    setMinValue(Number(min));
    setMaxValue(Number(max));

    query.minPrice = min;
    query.maxPrice = max;

    queryString.update(query);
  };

  return (
    <div className="w-full md:w-[330px] xl:w-full flex flex-col gap-3">
      <h2 className="text-xl">{trans("priceRange").toUpperCase()}</h2>
      <div className="flex flex-col gap-y-5">
        <div className="min-w-[310px] max-w-[310px]">
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
            min={minPrice}
            max={maxPrice}
            value={minValue}
            onChange={(value: any, options?: FormControlChangeOptions) => {
              handleRangeSliderChange(options?.event);
            }}
          />
          <NumberInput
            name="max_price"
            placeholder={trans("maxPrice")}
            min={minPrice}
            max={maxPrice}
            value={maxValue}
            onChange={(value: any, options?: FormControlChangeOptions) => {
              handleRangeSliderChange(options?.event);
            }}
          />
        </div>
        <ul className="flex flex-col gap-y-2">
          {pricesOptions.map(option => (
            <li key={option.min} className="flex items-start">
              <RadioInput
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
    </div>
  );
}
