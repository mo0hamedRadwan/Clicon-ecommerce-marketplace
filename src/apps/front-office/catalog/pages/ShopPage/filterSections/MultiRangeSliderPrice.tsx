import { useCallback, useEffect, useRef } from "react";

type PriceRangePropsType = {
  minPrice: number;
  maxPrice: number;
  minValue: number;
  maxValue: number;
  setMinValue: (value: number) => void;
  setMaxValue: (value: number) => void;
  handleChange: (e: React.ChangeEvent) => void;
};

export default function MultiRangeSliderPrice({
  minPrice,
  maxPrice,
  minValue,
  maxValue,
  handleChange,
}: PriceRangePropsType) {
  const minValueRef = useRef<HTMLInputElement | null>(null);
  const maxValueRef = useRef<HTMLInputElement | null>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) =>
      Math.round(((value - minPrice) / (maxPrice - minPrice)) * 100),
    [minPrice, maxPrice],
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValueRef.current) {
      const minPercent = getPercent(minValue);
      const maxPercent = getPercent(+maxValueRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minValue, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValueRef.current) {
      const minPercent = getPercent(+minValueRef.current.value);
      const maxPercent = getPercent(maxValue);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxValue, getPercent]);

  return (
    <div className="relative w-full">
      <input
        type="range"
        name="min_price"
        id="min_price"
        min={minPrice}
        max={maxPrice}
        value={minValue}
        ref={minValueRef}
        onChange={handleChange}
      />
      <input
        type="range"
        name="max_price"
        id="max_price"
        min={minPrice}
        max={maxPrice}
        value={maxValue}
        ref={maxValueRef}
        onChange={handleChange}
      />

      <div className="relative h-2">
        <div className="absolute w-full h-full bg-gray-150 rounded"></div>
        <div
          className="absolute h-full left-1/4 right-1/4 bg-orange-450 rounded"
          ref={range}></div>
        {/* <div className="absolute -top-1.5 w-5 h-5 bg-white border border-orange-450 rounded-full left-1/4 -translate-x-2.5 opacity-20"></div> */}
        {/* <div className="absolute -top-1.5 w-5 h-5 bg-white border border-orange-450 rounded-full right-1/4 translate-x-2.5 opacity-20"></div> */}
      </div>
    </div>
  );
}
