import { AchievementContainer } from "@/components/AchievementContainer";
import eligibilityData from "@/data/EligibilityData";
import React from "react";

type Props = {};

const AchievementsSection = (props: Props) => {
  return (
    <section className="hero  min-h-screen   bg-base-100   text-main-dark-blue ">
      {" "}
      <div className="max-w-7xl p-5 my-5 lg:my-10">
        <h1 className="my-8 text-4xl  font-bold tracking-normal  lg:tracking-wide text-center pb-5">
          My Achievements🏆
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {eligibilityData.map((data) => (
            <AchievementContainer
              key={data.id}
              image={data.image}
              title={data.title}
              isCompetition={data.isCompetition}
              startYear={data.startYear}
              endYear={data.endYear}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
