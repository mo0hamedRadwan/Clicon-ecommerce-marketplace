import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import appStoreImg from "assets/images/appStore.png";
import footerLogo from "assets/images/FooterLogo.png";
import googlePlayImg from "assets/images/googlePlay.png";
import { popularTags, quickLinks, topCategories } from "shared/data/footerData";

export default function FooterSection() {
  return (
    <div className="container py-20 flex justify-between md:justify-evenly xl:justify-between items-start gap-10 md:gap-5 flex-wrap xl:flex-nowrap ">
      <div className="max-w-60 flex flex-col gap-y-2">
        <div className="w-[177px] h-12 mb-5">
          <Link to={URLS.home}>
            <img
              src={footerLogo}
              alt="Clicon Logo image"
              className="w-full h-full"
            />
          </Link>
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
      <div className="xl:w-96 center-y gap-x-10">
        <div className="w-44">
          <h3 className="mb-4">{trans("topCategories").toUpperCase()}</h3>
          <ul className="text-gray-500 flex flex-col gap-y-2">
            {topCategories.map(category => (
              <li key={category.name} className="group center-y gap-x-1">
                <p className="w-0 group-hover:w-[20px] h-[2px] bg-yellow-450 rounded duration-500"></p>
                <Link to={category.link}>{category.name}</Link>
              </li>
            ))}
          </ul>
          <Link className="mt-2 center-y hover:bg-neutral-750 text-yellow-450 rounded cursor-pointer">
            <span>{trans("browseAllProducts")}</span>
            <span className="relative top-[2px] ml-1">
              <i className="bx bx-right-arrow-alt"></i>
            </span>
          </Link>
        </div>
        <div className="w-44">
          <h3 className="mb-4">{trans("quickLinks").toUpperCase()}</h3>
          <ul className="text-gray-500 flex flex-col gap-y-2">
            {quickLinks.map(quickLink => (
              <li key={quickLink.name} className="group center-y gap-x-1">
                <p className="w-0 group-hover:w-[20px] h-[2px] bg-yellow-450 rounded duration-500"></p>
                <Link to={quickLink.link}>{trans(quickLink.name)}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-between gap-x-10">
        <div className="hidden sm:block">
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
              <li
                key={popularTag.name}
                className="p-1 border border-gray-800 rounded-sm hover:bg-neutral-750 hover:border-white duration-200">
                <Link to={popularTag.link}>{popularTag.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
