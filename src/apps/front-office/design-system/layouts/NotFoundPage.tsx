import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { Link, previousRoute } from "@mongez/react-router";
import error404 from "assets/images/Error404.png";

export default function NotFoundPage() {
  return (
    <>
      <Helmet title={trans("notFoundPage")} />
      <div className="py-20 container center-y flex-col">
        <div className="max-w-[500px] h-[500px]">
          <img
            src={error404}
            alt="Error Page Not Found Image"
            className="w-full h-full"
          />
        </div>
        <div className="max-w-[500px] text-center">
          <h2 className="text-3xl font-bold">404, {trans("pageNotFound")}</h2>
          <p className="my-5">{trans("error404Message")}</p>
          <div className="flex-center gap-x-5">
            <Link
              to={previousRoute()}
              className="py-2 px-6 font-semibold bg-orange-500 hover:bg-white text-white hover:text-orange-500 border border-orange-500 duration-200">
              <span className="mr-3">
                <i className="bx bx-left-arrow-alt"></i>
              </span>
              <span>{trans("goBack").toUpperCase()}</span>
            </Link>
            <Link
              to="/"
              className="py-2 px-6 font-semibold hover:bg-orange-500 text-orange-500 hover:text-white border border-orange-500 duration-200">
              <span className="mr-3">
                <i className="bx bx-home"></i>
              </span>
              <span>{trans("goToHome").toUpperCase()}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
