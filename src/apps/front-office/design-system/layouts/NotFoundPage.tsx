import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { previousRoute } from "@mongez/react-router";
import error404 from "assets/images/Error404.png";
import LinkAsButton from "../components/LinkAsButton";

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
            {/* I Will Merge Buttons props to list and use map function */}
            <LinkAsButton
              variant="contained"
              size="lg"
              startIcon="bx-left-arrow-alt"
              href={previousRoute()}
              className="font-bold">
              {trans("goBack").toUpperCase()}
            </LinkAsButton>
            <LinkAsButton
              variant="outlined"
              size="lg"
              startIcon="bx-home"
              href="/"
              className="font-bold">
              {trans("goToHome").toUpperCase()}
            </LinkAsButton>
          </div>
        </div>
      </div>
    </>
  );
}
