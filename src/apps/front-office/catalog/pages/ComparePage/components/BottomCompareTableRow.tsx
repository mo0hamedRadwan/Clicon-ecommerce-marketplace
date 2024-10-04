type BottomCompareTableRowPropsType = {
  row: { title: string; productKey: string };
};

export default function BottomCompareTableRow({
  row,
}: BottomCompareTableRowPropsType) {
  return (
    <div className="">
      <span
        className={`${row.productKey === "salePrice" ? "text-xl text-sky-550" : ""} ${
          row.productKey === "inStock" ? "text-green-500" : "text-red-500"
        }`}>
        data
        {/* {productValue === true
          ? trans("inStock")
          : productValue === false
            ? trans("outStock")
            : !productValue
              ? "notFound"
              : productValue} */}
      </span>
    </div>
  );
}
