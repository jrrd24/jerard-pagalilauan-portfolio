import * as React from "react";
import { FaTrophy } from "react-icons/fa6";

type Card = {
  image: string;
  title: string;
  isCompetition: boolean;
  startYear: number;
  endYear?: number;
};

export function AchievementContainer(props: Card) {
  return (
    <div
      className={`card card-compact hover:bg-neutral hover:bg-opacity-5 transition-colors `}
    >
      {/**Image */}
      <figure className={`h-60 bg-gray-300 select-none`}>
        <img
          src={props.image || "/assets/no_image.svg"}
          alt={props.title}
          className="object-cover"
        />
      </figure>
      <div className="card-body">
        {/**Award Badge*/}
        {props.isCompetition ? (
          <div className="badge badge-accent text-main-dirty-white h-7">
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
      </div>
    </div>
  );
}
