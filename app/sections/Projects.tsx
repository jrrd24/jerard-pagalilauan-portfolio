import { ProjectContainer } from "@/components/ProjectContainer";
import projectsData from "@/data/ProjectsData";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section
      id="projects"
      className="hero min-h-screen items-center justify-items-center  bg-main-dirty-white   text-main-dark-blue "
    >
      <div className="max-w-7xl p-5 my-5 lg:my-10">
        <h1 className="my-8 text-4xl  font-bold tracking-normal  lg:tracking-wide text-center pb-5">
          My Projects ⚒️
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {projectsData.map((data) => (
            <ProjectContainer
              key={data.id}
              id={data.id}
              image={data.image}
              title={data.title}
              tags={data.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
