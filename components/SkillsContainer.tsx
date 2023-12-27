import React from "react";
import { MotionDiv } from "./MotionDiv";

type Skills = {
  Icon: React.ElementType;
  title: string;
  proficiencyPercent: number;
};

const SkillsContainer = (props: Skills) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ stiffness: 0 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.2 }}
    >
      <div className="px-3  text-center select-none  ">
        <div className="flex items-center justify-center">
          <figure className="h-16 w-16 select-none flex items-center justify-center">
            {props.Icon && (
              <props.Icon className="  h-16 w-16  group-hover:text-base-100" />
            )}
          </figure>
        </div>
        <div className="py-2 text-center opacity-100   ">
          <p className="text-md font-light text-white ">{props.title}</p>
        </div>
      </div>
    </MotionDiv>
  );
};

export default SkillsContainer;
