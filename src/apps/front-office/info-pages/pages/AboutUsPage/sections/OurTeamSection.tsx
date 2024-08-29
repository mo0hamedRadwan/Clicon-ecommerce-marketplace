import { trans } from "@mongez/localization";
import { isRTL } from "apps/front-office/utils/helpers";
import { ourTeam } from "shared/data/homeData";

export default function OurTeamSection() {
  return (
    <div className="container py-10 flex flex-col gap-y-10">
      <h2 className="text-2xl font-medium text-center">
        {trans("ourCoreTeamMembers")}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {ourTeam.map((member, index) => (
          <li
            key={index}
            className="p-10 center-y gap-5 justify-center xs:justify-normal flex-wrap xs:flex-nowrap border border-gray-150">
            <img
              src={member.image}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div
              className={`w-[180px] flex flex-col gap-y-3 text-center ${isRTL() ? "xs:text-right" : "xs:text-left"}`}>
              <h4 className="text-lg font-medium">{member.name}</h4>
              <h5 className="text-gray-550">{member.position}</h5>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
