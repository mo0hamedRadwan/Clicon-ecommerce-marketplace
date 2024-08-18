import { trans } from "@mongez/localization";
import { companyLogos } from "shared/data/footerData";
import SubscribeForm from "./SubscribeForm";

export default function SubscribeSection() {
  return (
    <div className="py-10 sm:py-20 bg-sky-750 text-white ">
      <div className="container w-full sm:w-[450px] md:w-[600px] lg:w-[750px] flex-center flex-col gap-y-5 text-center">
        <h3 className="text-lg sm:text-3xl md:text-3xl">
          {trans("subscribeToOurNewsletter")}
        </h3>
        <p className="mb-2 text-slate-350 line-clamp-2 text-xs sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
          perferendis ab obcaecati repellendus maiores debitis doloribus libero.
        </p>

        <div className="w-full">
          <SubscribeForm />
        </div>

        <hr className="mt-5 -mb-5 w-full sm:w-[425px] h-[1px] border-[rgba(255,255,255,0.1)]" />
        <ul className="space-between-center gap-x-5 md:gap-x-10">
          {companyLogos.map(logo => (
            <li key={logo}>
              {
                <img
                  src={logo}
                  alt="company logo"
                  className="opacity-50 hover:opacity-100 duration-200"
                />
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
