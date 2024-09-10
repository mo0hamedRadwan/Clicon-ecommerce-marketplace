import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import Banner from "apps/front-office/design-system/components/Banner";
import CheckboxInput from "apps/front-office/design-system/components/form/CheckboxInput";
import Select from "apps/front-office/design-system/components/form/Select";
import TextInput from "apps/front-office/design-system/components/form/TextInput";
import { isRTL } from "apps/front-office/utils/helpers";
import { useState } from "react";
import { popularTags } from "shared/data/footerData";
import { sortByOptions } from "shared/data/shopData";
import { product2 } from "shared/data/testData2";

export default function ShopPage() {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [sortBy, setSortBy] = useState("mostPopular");
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="py-10 container">
      <div className="flex flex-wrap xl:flex-nowrap gap-5">
        <div className="min-w-[300px] max-w-[300px] flex flex-col gap-y-5">
          <h2 className="text-xl">{trans("category").toUpperCase()}</h2>
          {/* <ul className="flex flex-col gap-y-2">
            {categories.map(category => (
              <li key={category.id} className="flex items-start">
                <RatioInput
                  name="category"
                  value={category.id}
                  label={category.name}
                  className="center-y flex-row-reverse gap-x-3"
                />
              </li>
            ))}
          </ul> */}
          <hr className="bg-gray-150" />
          <h2 className="text-xl">{trans("priceRange").toUpperCase()}</h2>
          <div className="">multiRangePrice</div>
          <hr className="bg-gray-150" />
          <h2 className="text-xl">{trans("popularBrands").toUpperCase()}</h2>
          <ul className="grid grid-cols-2">
            <li>
              <CheckboxInput label={"brand1"} />
            </li>
            <li>
              <CheckboxInput label={"brand2"} />
            </li>
            <li>
              <CheckboxInput label={"brand3"} />
            </li>
            <li>
              <CheckboxInput label={"brand4"} />
            </li>
            <li>
              <CheckboxInput label={"brand5"} />
            </li>
            <li>
              <CheckboxInput label={"brand6"} />
            </li>
            <li>
              <CheckboxInput label={"brand7"} />
            </li>
            <li>
              <CheckboxInput label={"brand8"} />
            </li>
            <li>
              <CheckboxInput label={"brand9"} />
            </li>
          </ul>
          <h2 className="text-xl">{trans("popularTags").toUpperCase()}</h2>
          <ul className="flex flex-row flex-wrap gap-2">
            {popularTags.map(popularTag => (
              <li
                key={popularTag.name}
                className="py-1 px-2 text-sm text border border-gray-150 rounded-sm hover:bg-orange-150 hover:text-orange-450 hover:border-orange-450 duration-200">
                <Link to={popularTag.link}>{popularTag.name}</Link>
              </li>
            ))}
          </ul>

          <Banner
            product={product2}
            showTitle
            className="bg-transparent border border-orange-450 rounded-sm"
          />
        </div>

        <div className="w-full flex flex-col gap-y-5">
          <div className="w-full space-between flex-wrap gap-5">
            <div className="relative w-96 border border-gray-150">
              <TextInput
                placeholder={`${trans("searchFor")} ${trans("products")}`}
              />
              <span
                className={`absolute top-2 ${isRTL() ? "left-6" : "right-6"} text-3xl`}>
                <i className="bx bx-search"></i>
              </span>
            </div>
            <div className="center-y gap-x-5">
              <p>{trans("sortBy")}</p>
              <Select
                triggerValue={sortBy}
                options={sortByOptions}
                className="w-[200px] border border-gray-150"
              />
            </div>
          </div>
          <div className="w-full px-5 py-2 bg-gray-150 space-between flex-wrap gap-5">
            <div className="center-y gap-2">
              <span>{trans("activeFilters")}</span>
              <ul className="center-y gap-2 font-semibold">
                <li>Electronic Devices</li>
                <li>5 star rating</li>
              </ul>
            </div>
            <div className="center-y gap-x-2">
              <span className="font-semibold">9191</span>
              <span>{trans("resultsFound")}</span>
            </div>
          </div>

          {/* <div className="flex flex-col gap-y-10">
            <ProductsGrid
              showRating
              products={[
                product2,
                product3,
                product5,
                product6,
                product7,
                product8,
                product9,
                product10,
                product2,
                product3,
                product5,
                product6,
                product7,
                product8,
                product9,
                product10,
                product2,
                product3,
                product5,
                product6,
                product7,
                product8,
                product9,
                product10,
              ]}
              className="lg:gap-3"
            />
            <div className="w-full flex-center">
              <ul className="w-[300px] sm:w-[500px] space-between gap-x-1 sm:gap-x-3">
                <li
                  onClick={() => setActivePage(Math.max(1, activePage - 1))}
                  className="w-8 h-8 sm:w-12 sm:h-12 flex-center text-3xl text-orange-450 border border-orange-450 rounded-full hover:bg-orange-450 hover:text-white duration-150 cursor-pointer">
                  {isRTL() ? (
                    <i className="bx bx-right-arrow-alt"></i>
                  ) : (
                    <i className="bx bx-left-arrow-alt"></i>
                  )}
                </li>
                {[1, 2, 3, 4, 5, 6].map(page => (
                  <li
                    key={page}
                    onClick={() => setActivePage(page)}
                    className={`w-8 h-8 sm:w-12 sm:h-12 flex-center gap-2 border ${
                      page === activePage
                        ? "font-semibold bg-orange-450 border-orange-450 text-white"
                        : "bg-white border-gray-150 hover:bg-orange-300 cursor-pointer"
                    } rounded-full`}>
                    {page > 9 ? page : "0" + page}
                  </li>
                ))}
                <li
                  onClick={() => setActivePage(Math.min(6, activePage + 1))}
                  className="w-8 h-8 sm:w-12 sm:h-12 flex-center text-3xl text-orange-450 border border-orange-450 rounded-full hover:bg-orange-450 hover:text-white duration-150 cursor-pointer">
                  {isRTL() ? (
                    <i className="bx bx-left-arrow-alt"></i>
                  ) : (
                    <i className="bx bx-right-arrow-alt"></i>
                  )}
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
