import educationData from "@/data/EducationData";
import React from "react";

type Props = {};

const Experience = (props: Props) => {
  return (
    <section className="hero  min-h-screen   items-center justify-items-center   text-main-dirty-white   bg-main-dark-blue ">
      <div className="max-w-2xl p-5">
        <h1 className="my-8 text-4xl  font-bold tracking-normal  lg:tracking-wide text-center  ">
          Education 📑
        </h1>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {educationData.map((edu) => (
            <li key={edu.id}>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div
                className={`timeline-middle mb-0 md:mb-10 ${
                  edu.id % 2 !== 0
                    ? "timeline-start  md:text-end "
                    : "timeline-end "
                } `}
              >
                <time className="font-mono italic">{edu.years}</time>
                <div className="text-lg font-black text-main-light-blue">
                  {edu.name}
                </div>
                University of Saint Louis Tuguegarao
              </div>

              <hr />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
