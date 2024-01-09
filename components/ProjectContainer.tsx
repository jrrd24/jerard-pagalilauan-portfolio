import Image from "next/image";
import * as React from "react";
import { MotionDiv } from "./client/MotionDiv";
import ProjectButton from "./client/ProjectButton";

type Tag = {
  id: number;
  Icon: React.ElementType;
  title: string;
};
type Card = {
  id: number;
  image: string;
  title: string;
  tags: Tag[];
};

export function ProjectContainer(props: Card) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: "15%" }}
      whileInView={{ opacity: 1, y: "0%" }}
      transition={{
        type: "tween",
        damping: 10,
        mass: 0.75,
        stiffness: 100,
        delay: 0.3,
        duration: 0.5,
      }}
    >
      <div className={`card card-compact `}>
        <ProjectButton image={props.image} title={props.title} id={props.id} />
        <div className="card-body">
          <div className="card-actions justify-end">
            {props?.tags?.map((data) => (
              <MotionDiv
                key={data.title}
                initial={{ opacity: 0, y: "50%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{
                  type: "spring",
                  damping: 10,
                  mass: 0.75,
                  stiffness: 100,
                  delay: 0.3 + 0.3 * data.id,
                }}
              >
                <MotionDiv
                  initial={{ scale: 1 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ stiffness: 0 }}
                >
                  <div className="badge badge-secondary text-main-dirty-white h-7 select-none">
                    {data.Icon && <data.Icon className="  h-5 w-5" />}
                    &nbsp;
                    {data.title}
                  </div>
                </MotionDiv>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
