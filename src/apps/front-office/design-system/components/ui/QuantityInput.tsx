import { useState } from "react";

export default function QuantityInput() {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = e => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) return;
    setQuantity(value);
  };

  return (
    <div className="w-[170px] p-3 space-between-center border border-gray-200">
      <button
        type="button"
        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
        className="text-black text-xl">
        <i className="bx bx-minus"></i>
      </button>
      <input
        type="text"
        value={quantity <= 9 ? "0" + quantity : quantity}
        onChange={e => handleQuantityChange(e)}
        className="w-[80px] text-center focus:outline-none"
      />
      <button
        type="button"
        onClick={() => setQuantity(quantity + 1)}
        className="text-black text-xl">
        <i className="bx bx-plus"></i>
      </button>
    </div>
  );
}
