import React from "react";

type Skills = {
  Icon: React.ElementType;
  title: string;
  proficiencyPercent: number;
};

const SkillsContainer = (props: Skills) => {
  return (
    <div className="px-3 group text-center  ">
      <div className="flex items-center justify-center">
        <figure className="h-16 w-16 select-none flex items-center justify-center">
          {props.Icon && (
            <props.Icon className="  h-16 w-16  group-hover:text-base-100" />
          )}
        </figure>
      </div>
      <div className="py-2 text-center opacity-100 sm:opacity-0 group-hover:opacity-100  ">
        <h2 className="text-xl font-bold text-white">{props.title}</h2>
        <progress
          className="progress w-full progress-info"
          value={props.proficiencyPercent}
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default SkillsContainer;
