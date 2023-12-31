import React from "react";
import { MotionDiv } from "./client/MotionDiv";

type Skills = {
  id: number;
  Icon: React.ElementType;
  title: string;
  proficiencyPercent: number;
};

const SkillsContainer = (props: Skills) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.75 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        damping: 10,
        mass: 0.75,
        stiffness: 100,
      }}
    >
      <MotionDiv
        initial={{ scale: 1 }}
        transition={{ type: "spring", damping: 10, mass: 0.75, stiffness: 100 }}
        whileHover={{ scale: 1.15 }}
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
    </MotionDiv>
  );
};

export default SkillsContainer;
