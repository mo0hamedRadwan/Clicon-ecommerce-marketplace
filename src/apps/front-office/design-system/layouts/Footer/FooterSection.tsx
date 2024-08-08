import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import appStoreImg from "assets/images/appStore.png";
import footerLogo from "assets/images/FooterLogo.png";
import googlePlayImg from "assets/images/googlePlay.png";
import { popularTags, quickLinks, topCategories } from "shared/data/footerData";
import Button from "../../components/Button";

export default function FooterSection() {
  return (
    <div className="container py-20 flex justify-between md:justify-evenly xl:justify-between items-start gap-10 md:gap-5 flex-wrap xl:flex-nowrap ">
      <div className="max-w-60 flex flex-col gap-y-2">
        <div className="w-[177px] h-12 mb-5">
          <img
            src={footerLogo}
            alt="Clicon Logo image"
            className="w-full h-full"
          />
        </div>
        <p>
          <span className="text-sm text-gray-500">
            {trans("customerSupports")}
          </span>
          <br />
          <span className="text-lg">(629) 555-0129</span>
        </p>
        <p className="text-gray-500">
          4517 Washington Ave. Manchester, Kentucky 39495
        </p>
        <p>info@kinbo.com</p>
      </div>
      <div className="xl:w-80 space-between-center gap-x-5">
        <div>
          <h3 className="mb-4">{trans("topCategories").toUpperCase()}</h3>
          <ul className="text-gray-500 flex flex-col gap-y-2">
            {topCategories.map(category => (
              <li
                key={category.name}
                className="hover:text-white hover:underline duration-300">
                <Link to={category.link}>{category.name}</Link>
              </li>
            ))}
          </ul>
          <Button
            href="/shop"
            variant="text"
            size="small"
            endIcon="bx-right-arrow-alt"
            className="px-0 hover:px-1">
            {trans("browseAllProducts")}
          </Button>
        </div>
        <div>
          <h3 className="mb-4">{trans("quickLinks").toUpperCase()}</h3>
          <ul className="text-gray-500 flex flex-col gap-y-2">
            {quickLinks.map(quickLink => (
              <li
                key={quickLink.name}
                className="hover:text-white hover:underline duration-300">
                <Link to={quickLink.link}>{trans(quickLink.name)}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-between gap-x-10">
        <div>
          <h3 className="mb-4">{trans("downloadApp").toUpperCase()}</h3>
          <div className="flex flex-col gap-y-3">
            <Link to="" className="w-[176px] h-[70px] cursor-pointer">
              <img src={googlePlayImg} alt="" />
            </Link>
            <Link to="" className="w-[176px] h-[70px] cursor-pointer">
              <img src={appStoreImg} alt="" />
            </Link>
          </div>
        </div>
        <div className="max-w-[450px] xl:w-[300px]">
          <h3 className="mb-4">{trans("popularTags").toUpperCase()}</h3>
          <ul className="flex flex-row flex-wrap gap-2">
            {popularTags.map(popularTag => (
              <li key={popularTag.name} className="p-1 border border-gray-800">
                <Link to={popularTag.link}>{popularTag.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
