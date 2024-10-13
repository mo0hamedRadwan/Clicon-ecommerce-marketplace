import { isRTL } from "apps/front-office/utils/helpers";

type PaginationPropsType = {
  activePage: number;
  totalPages: number;
  handleChangePage: (page: number) => void;
};

export default function Pagination({
  activePage = 1,
  totalPages = 5,
  handleChangePage,
}: PaginationPropsType) {
  if (totalPages <= 1) return;

  return (
    <div className="py-5 w-full flex-center">
      <ul className="w-[300px] sm:w-[500px] space-between gap-x-1 sm:gap-x-3">
        <li>
          <button
            disabled={activePage <= 1}
            onClick={() => handleChangePage(activePage - 1)}
            className="w-8 h-8 sm:w-12 sm:h-12 flex-center text-3xl text-orange-450 border border-orange-450 rounded-full hover:bg-orange-450 hover:text-white duration-150 cursor-pointer disabled:text-gray-450 disabled:border-gray-450 disabled:cursor-not-allowed hover:disabled:bg-transparent">
            {isRTL() ? (
              <i className="bx bx-right-arrow-alt"></i>
            ) : (
              <i className="bx bx-left-arrow-alt"></i>
            )}
          </button>
        </li>
        {[...Array(totalPages).keys()].map(page => {
          page = page + 1;
          return (
            <li
              key={page}
              onClick={() => handleChangePage(page)}
              className={`w-8 h-8 sm:w-12 sm:h-12 flex-center gap-2 border ${
                page === activePage
                  ? "font-semibold bg-orange-450 border-orange-450 text-white"
                  : "bg-white border-gray-150 hover:bg-orange-300 cursor-pointer"
              } rounded-full`}>
              {page > 9 ? page : "0" + page}
            </li>
          );
        })}
        <li>
          <button
            disabled={activePage >= totalPages}
            onClick={() => handleChangePage(activePage + 1)}
            className="w-8 h-8 sm:w-12 sm:h-12 flex-center text-3xl text-orange-450 border border-orange-450 rounded-full hover:bg-orange-450 hover:text-white duration-150 cursor-pointer disabled:text-gray-450 disabled:border-gray-450 disabled:cursor-not-allowed hover:disabled:bg-transparent">
            {isRTL() ? (
              <i className="bx bx-left-arrow-alt"></i>
            ) : (
              <i className="bx bx-right-arrow-alt"></i>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
}
