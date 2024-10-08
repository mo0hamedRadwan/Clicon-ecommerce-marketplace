import { trans } from "@mongez/localization";
import Button from "apps/front-office/design-system/components/form/Button";
import TextInput from "apps/front-office/design-system/components/form/TextInput";
import customerServiceImg from "assets/images/customerService.jpg";

export default function HelpCenterSection() {
  return (
    <div className="py-10 container space-between-center gap-5 flex-wrap lg:flex-nowrap">
      <div className="w-full sm:w-[540px] flex flex-col items-start gap-y-5">
        <h4 className="px-2 py-1 bg-sky-550 text-white">{trans("whoWeAre")}</h4>
        <h2 className="text-2xl sm:text-4xl font-semibold">
          {`${trans("how")} ${trans("weCan")} ${trans("helpYou")}`}
        </h2>
        <div className="w-full relative px-10 py-2 border border-gray-150 ">
          <TextInput
            name="search"
            className="text-2xl border-none outline-none focus-visible:ring-0"
          />
          <span className="absolute top-4 left-2 text-4xl text-orange-450">
            <i className="bx bx-search"></i>
          </span>
          <Button
            onClick={() => console.log("search")}
            className="absolute top-2.5 right-2 text-sm">
            {trans("search")}
          </Button>
        </div>
      </div>
      <div className="w-full sm:w-[500px]">
        <img src={customerServiceImg} className="w-full h-full" />
      </div>
    </div>
  );
}
