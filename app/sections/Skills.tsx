import SkillsContainer from "@/components/SkillsContainer";
import skillsData from "@/data/SkillsData";
import React from "react";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section className="hero   min-h-screen items-center justify-items-center  text-main-dirty-white   bg-main-dark-blue py-20  px-5">
      <div className="max-w-7xl py-y">
        <h1 className="pb-16 text-4xl  font-bold tracking-normal  lg:tracking-wide text-center ">
          My Tech Skills 🎯
        </h1>

        <div className=" flex items-center justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-3  gap-8">
            {skillsData.map((data) => (
              <SkillsContainer
                key={data.id}
                id={data.id}
                Icon={data.Icon}
                title={data.title}
                proficiencyPercent={data.proficiencyPercent}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
