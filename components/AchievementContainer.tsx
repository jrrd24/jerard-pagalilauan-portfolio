import Image from "next/image";
import * as React from "react";
import { FaTrophy } from "react-icons/fa6";
import { MotionDiv } from "./client/MotionDiv";

type Card = {
  image: string;
  title: string;
  isCompetition: boolean;
  startYear: number;
  endYear?: number;
};

export function AchievementContainer(props: Card) {
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
      <div
        className={`card card-compact hover:bg-neutral hover:bg-opacity-5 transition-colors `}
      >
        {/**Image */}
        <figure className={`h-60 bg-gray-300 select-none`}>
          <Image
            src={props.image || "/assets/no_image.svg"}
            alt={props.title}
            width="0"
            height="0"
            sizes="100vw"
            className="object-cover w-auto h-auto"
          />
        </figure>
        <div className="card-body">
          <MotionDiv
            initial={{ opacity: 0, y: "15%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{ delay: 0.5 }}
          >
            {/**Award Badge*/}
            {props.isCompetition ? (
              <div className="badge badge-accent text-main-dirty-white h-7 select-none mb-2">
                <FaTrophy /> &nbsp; Competition
              </div>
            ) : (
              ""
            )}
            <h2 className="card-title font-bold">{props.title}</h2>

            <p className=" font-medium">
              {props.startYear === props.endYear
                ? props.endYear
                : `${props.startYear} - ${props.endYear}`}
            </p>
          </MotionDiv>
        </div>
      </div>
    </MotionDiv>
  );
}
