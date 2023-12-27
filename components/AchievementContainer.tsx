import Image from "next/image";
import * as React from "react";
import { FaTrophy } from "react-icons/fa6";
import { MotionDiv } from "./MotionDiv";

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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ stiffness: 0 }}
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/**Award Badge*/}
            {props.isCompetition ? (
              <div className="badge badge-accent text-main-dirty-white h-7 select-none">
                <FaTrophy /> &nbsp; Competition
              </div>
            ) : (
              ""
            )}
            <h2 className="card-title">{props.title}</h2>

            <p>
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
