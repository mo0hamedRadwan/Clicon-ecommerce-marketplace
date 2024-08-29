import { trans } from "@mongez/localization";
import aboutUs from "assets/images/aboutUs.png";
import { aboutFeatures } from "shared/data/homeData";

export default function AboutSection() {
  return (
    <div className="container py-10 md:py-20 space-between-center gap-5 flex-wrap lg:flex-nowrap">
      <div className="lg:w-[540px] flex flex-col items-start gap-y-5">
        <h4 className="px-2 py-1 bg-sky-550 text-white">{trans("whoWeAre")}</h4>
        <h2 className="text-2xl sm:text-4xl font-semibold">
          {trans("aboutHeader")}
        </h2>
        <p className="text-gray-550">
          Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit
          vestibulum risus, ac tincidunt diam lectus id magna. Praesent maximus
          lobortis neque sit amet rhoncus. Nullam tempus lectus a dui aliquet,
          non ultricies nibh elementum. Nulla ac nulla dolor.
        </p>
        <ul className="">
          {aboutFeatures.map(feature => (
            <li key={feature} className="center-y gap-x-2">
              <span className="text-green-650 text-2xl">
                <i className="bx bx-check-double"></i>
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:min-w-[650px] lg:h-[540px]">
        <img src={aboutUs} className="w-full h-full" />
      </div>
    </div>
  );
}
