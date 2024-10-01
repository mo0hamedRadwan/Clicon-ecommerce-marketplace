import { isRTL } from "apps/front-office/utils/helpers";
import { useState } from "react";

export default function PaginationList() {
  const [activePage, setActivePage] = useState(1);

  return (
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
  );
}
