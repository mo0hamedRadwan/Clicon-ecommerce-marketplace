import { trans } from "@mongez/localization";
import Button from "apps/front-office/design-system/components/form/Button";
import productImg from "assets/images/productImg/mainImage.png";

export default function CompareListItem() {
  return (
    <table className="w-full border border-gray-150">
      <tr className="w-full border-b border-gray-150">
        <td colSpan={2} className="">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col items-center gap-y-5">
              <button
                onClick={() => console.log("remove product from comapre page")}
                className="w-10 h-10 rounded-full border border-gray-150 hover:border-red-500 text-gray-450 hover:text-red-500 duration-200 flex-center">
                x
              </button>
              <img
                src={productImg}
                alt="product image"
                className="w-[270px]h-[270px]"
              />
            </div>
            <p className="text-sm xl:text-base font-medium line-clamp-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              tempora sed, temporibus necessitatibus ipsum nemo quod fuga
              voluptatem. Commodi dignissimos officiis vero. Iusto quibusdam
              cumque recusandae eius in fuga autem.
            </p>
            <div className="center-y gap-x-2">
              <Button
                variant="contained"
                onClick={() => console.log("add to cart")}
                endIcon="bx-cart"
                className="w-full text-lg">
                {trans("addToCart")}
              </Button>
              <Button
                variant="outlined"
                onClick={() => console.log("add to wishlist")}
                className="text-2xl md:text-2xl h-[44px]">
                <i className="bx bx-heart"></i>
              </Button>
            </div>
          </div>
        </td>
      </tr>
      {[
        { title: "customerFeedback", productKey: "" },
        { title: "price", productKey: "" },
        { title: "soldBy", productKey: "" },
        { title: "brand", productKey: "" },
        { title: "stockStatus", productKey: "" },
        { title: "size", productKey: "" },
        { title: "weight", productKey: "" },
      ].map((row, idx) => (
        <tr
          key={row.title}
          className={`${idx % 2 === 0 ? "bg-gray-200" : ""} text-xs sm:text-base`}>
          <td className="w-1/4 p-2 border-r border-gray-150">{row.title}</td>
          <td className="w-3/4 p-2 border-r border-gray-150">data</td>
          {/* <td className="w-1/4 p-2 border-r border-gray-150">data</td> */}
          {/* <td className="w-1/4 p-2 border-r border-gray-150">data</td> */}
        </tr>
      ))}
    </table>
  );
}
