import { twMerge } from "tailwind-merge";

type QuantityInputPropsType = {
  value: number;
  setValue(value: number): void;
  className?: string;
};

export default function QuantityInput({
  value,
  setValue,
  className = "",
}: QuantityInputPropsType) {
  const handleQuantityChange = e => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) return;
    setValue(value);
  };

  if (value < 1) throw new Error("quantity value must be greater than zero");

  return (
    <div
      className={twMerge(
        "w-[100px] sm:w-[170px] p-1 md:p-3 space-between-center border border-gray-200",
        className,
      )}>
      <button
        type="button"
        onClick={() => value > 1 && setValue(value - 1)}
        className="text-black text-xl">
        <i className="bx bx-minus"></i>
      </button>
      <input
        type="text"
        value={value <= 9 ? "0" + value : value}
        onChange={e => handleQuantityChange(e)}
        className="w-[50px] sm:w-[80px] text-center focus:outline-none"
      />
      <button
        type="button"
        onClick={() => setValue(value + 1)}
        className="text-black text-xl">
        <i className="bx bx-plus"></i>
      </button>
    </div>
  );
}
