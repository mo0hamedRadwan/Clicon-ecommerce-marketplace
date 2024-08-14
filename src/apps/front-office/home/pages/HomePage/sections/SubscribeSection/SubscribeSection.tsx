import { trans } from "@mongez/localization";
import { companyLogos } from "shared/data/footerData";
import SubscribeForm from "./SubscribeForm";

export default function SubscribeSection() {
  return (
    <div className="py-20 bg-sky-750 text-white ">
      <div className="container w-[550px] flex-center flex-col gap-y-5 text-center">
        <h3 className="text-3xl">{trans("subscribeToOurNewsletter")}</h3>
        <p className="text-slate-350">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
          perferendis ab obcaecati repellendus maiores debitis doloribus libero
          sapiente.
        </p>

        <SubscribeForm />

        <hr className="w-[425px] h-[1px] border-[rgba(255,255,255,0.1)]" />
        <ul className="space-between-center gap-x-10">
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
