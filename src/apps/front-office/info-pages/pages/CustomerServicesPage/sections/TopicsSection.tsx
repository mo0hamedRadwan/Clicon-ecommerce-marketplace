import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { useState } from "react";
import { popularTopics, topics } from "shared/data/homeData";

export default function TopicsSection() {
  const [activeTopic, setActiveTopic] = useState(0);
  return (
    <div className="py-10 flex flex-col gap-y-10">
      <h2 className="text-4xl text-center font-semibold">
        {trans("assistYou")}
      </h2>
      <ul className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {topics.map((topic, index) => (
          <li
            key={index}
            className={`p-5 center-y gap-x-5 border ${activeTopic === index ? "border-orange-450" : "border-orange-150"} rounded cursor-pointer`}
            onClick={() => setActiveTopic(index)}>
            <span className="text-4xl text-orange-450">
              <i className={`bx ${topic.icon}`}></i>
            </span>
            <span className="text-xl font-medium">{topic.name}</span>
          </li>
        ))}
      </ul>
      <hr className="my-5" />
      <div className="container flex flex-col gap-y-10">
        <h2 className="text-2xl text-center font-semibold">
          {trans("popularTopics")}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 list-disc">
          {popularTopics.map(topic => (
            <li key={topic} className="font-medium hover:text-orange-450">
              <Link to="/">{topic}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
