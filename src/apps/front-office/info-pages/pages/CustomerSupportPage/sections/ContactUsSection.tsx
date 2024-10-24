import { trans } from "@mongez/localization";
import LinkAsButton from "components/ui/LinkAsButton";

export default function ContactUsSection() {
  return (
    <div className="py-10 bg-gray-150 flex-center flex-col gap-y-5">
      <div className="w-full xs:w-[350px] flex flex-col items-center gap-y-5">
        <h2 className="px-2 py-1 bg-sky-550 text-white">
          {trans("contactUs")}
        </h2>
        <h3 className="text-2xl xs:text-3xl text-center">
          <span>{`${trans("donotFind")} ${trans("yourAnswer")}.`}</span>
          <br />
          <span>{trans("contactWithUs")}</span>
        </h3>
      </div>
      <div className="w-full center-y justify-center flex-wrap lg:flex-nowrap gap-5">
        <div className="w-full sm:w-[520px] p-10 bg-white flex items-start gap-5 flex-wrap sm:flex-nowrap rounded">
          <span className="p-5 bg-sky-100 text-6xl">
            <i className="bx bx-phone-call text-sky-550"></i>
          </span>
          <div className="flex flex-col items-start gap-y-1">
            <h3 className="text-lg font-medium">{`${trans("callUs")} ${trans("now")}`}</h3>
            <p className="text-gray-550">
              we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk
              with use now
            </p>
            <h2 className="my-3 text-2xl">+1-202-555-0126</h2>
            <LinkAsButton href="" className="bg-sky-500 hover:bg-sky-650">
              {`${trans("call")} ${trans("now")}`.toUpperCase()}
            </LinkAsButton>
          </div>
        </div>
        <div className="w-full sm:w-[520px] p-10 bg-white flex items-start gap-5 flex-wrap sm:flex-nowrap rounded">
          <span className="p-5 bg-green-100 text-6xl">
            <i className="bx bx-message-rounded-dots text-green-650"></i>
          </span>
          <div className="flex flex-col items-start gap-y-1">
            <h3 className="text-lg font-medium">{`${trans("chat")} ${trans("withUs")}`}</h3>
            <p className="text-gray-550">
              we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk
              with use now
            </p>
            <h2 className="my-3 text-2xl">Support@clicon.com</h2>
            <LinkAsButton href="" className="bg-green-500 hover:bg-green-650">
              {trans("contactUs").toUpperCase()}
            </LinkAsButton>
          </div>
        </div>
      </div>
    </div>
  );
}
