import { Product } from "apps/front-office/design-system/types";
import BottomCompareTableRow from "../components/BottomCompareTableRow";
import UpperCompareTableRow from "../components/UpperCompareTableRow";

type CompareTable2ColsPropsType = {
  products: Product[];
};

export default function CompareTable2Cols({
  products,
}: CompareTable2ColsPropsType) {
  const numOfTables = Math.ceil(products.length / 2);
  console.log("2 col => ", numOfTables);
  // Array.from(Array(numOfTables).keys()) OR [... Array(numOfTables).keys()]
  // [0, ..., numOfTables]

  return (
    <div className="flex flex-col gap-y-5">
      {Array.from(Array(numOfTables).keys()).map(tableNumber => (
        <table className="w-full border border-gray-150" key={tableNumber}>
          <tbody>
            <tr className="w-full border-b border-gray-150">
              <td className="w-1/4 border-r border-gray-150"></td>
              {[0, 1].map(idx => {
                const index = tableNumber * 2 + idx;
                if (index >= products.length) {
                  return (
                    <td
                      className="w-1/4 border-r border-gray-150"
                      key={index}></td>
                  );
                }
                const product = products[index];

                return (
                  <td className="w-1/4 border-r border-gray-150" key={index}>
                    <UpperCompareTableRow product={product} />
                  </td>
                );
              })}
            </tr>
            {[
              { title: "customerFeedback", productKey: "price" },
              { title: "price", productKey: "salePrice" },
              { title: "soldBy", productKey: "price" },
              { title: "brand", productKey: "price" },
              { title: "stockStatus", productKey: "inStock" },
              { title: "size", productKey: "price" },
              { title: "weight", productKey: "price" },
            ].map((row, idx) => (
              <tr
                key={row.title}
                className={`${idx % 2 === 0 ? "bg-gray-200" : ""}`}>
                <td className="w-1/4 p-2 border-r border-gray-150">
                  {row.title}
                </td>
                {[0, 1].map(idx => {
                  const index = tableNumber * 2 + idx;
                  if (index >= products.length) {
                    return (
                      <td
                        className="w-1/4 border-r border-gray-150"
                        key={index}></td>
                    );
                  }
                  // const productValue = products[index][row.productKey];

                  return (
                    <td
                      className="w-1/4 p-2 border-r border-gray-150"
                      key={index}>
                      <BottomCompareTableRow key={index} row={row} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}
