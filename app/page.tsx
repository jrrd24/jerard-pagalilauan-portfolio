import SkillsContainer from "@/components/SkillsContainer";
import { Metadata } from "next";
import educationData from "@/data/EducationData";
import skillsData from "@/data/SkillsData";
import eligibilityData from "@/data/EligibilityData";
import { AchievementContainer } from "@/components/AchievementContainer";
import projectsData from "@/data/ProjectsData";
import { ProjectContainer } from "@/components/ProjectContainer";
import Image from "next/image";
import { MdMail } from "react-icons/md";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BottomNav } from "@/components/BottomNav";
import React from "react";
import ProfilePic from "@/components/ProfilePic";
import { MotionDiv } from "@/components/MotionDiv";

export const metadata: Metadata = {
  title: "Jerard Pagalilauan | Home",
};

export default function Home() {
  return (
    <main
      className="select-text  bg-neutral scroll-smooth relative "
      style={{
        backgroundImage: `
        radial-gradient(at 40% 20%, hsla(183,56%,51%,1) 0px, transparent 50%),
        radial-gradient(at 98% 0%, hsla(189,0%,96%,1) 0px, transparent 50%),
        radial-gradient(at 18% 92%, hsla(341,96%,65%,1) 0px, transparent 50%)
      `,
      }}
    >
      {/**HERO */}
      <section
        className="hero min-h-screen  items-center justify-items-center  bg-main-dark-blue   "
        style={{
          backgroundImage: `
        radial-gradient(at 40% 20%, hsla(183,56%,51%,1) 0px, transparent 50%),
        radial-gradient(at 98% 0%, hsla(189,0%,96%,1) 0px, transparent 50%),
        radial-gradient(at 18% 92%, hsla(341,96%,65%,1) 0px, transparent 50%)
      `,
        }}
      >
        <div className="hero-content flex-col lg:flex-row   text-center tracking-wide text-5xl font-bold text-main-dirty-white  items-center justify-items-center ">
          <h1> Hello I&apos;m</h1>
          <section className="animation text-2xl md:text-5xl">
            <div className="first">
              <h1>Jerard Pagalilauan</h1>
            </div>
            <div className="second">
              {" "}
              <h1>A Web Developer</h1>
            </div>
            <div className="third">
              {" "}
              <h1>Happy To See You</h1>
            </div>
          </section>
        </div>
      </section>

      {/**WHO AM I  */}
      <section
        id="me"
        className="hero  min-h-screen items-center justify-items-center  bg-base-100  text-main-dark-blue "
      >
        <div className="hero-content flex-col lg:flex-row">
          <ProfilePic />
          <MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ stiffness: 0, delay: 0.3 }}
          >
            <div className="max-w-lg  text-center lg:text-left">
              <h1 className="mb-5 text-4xl lg:text-5xl font-bold tracking-normal  lg:tracking-wide snap-start">
                Who Am I?
              </h1>

              <p className="mb-5 text-justify  ">
                I am <b>Jerard Philiip P. Pagalilauan. </b>A hardworking and
                passionate Bachelor of Science in Information Technology
                undergraduate with minimal experience in developing web and
                desktop apps, who’s dedicated in bringing creative and
                functional web designs to life through programming.
              </p>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/**Educ */}
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

      {/**Eligibility and Awards  */}
      <section className="hero  min-h-screen  items-center justify-items-center  bg-base-100   text-main-dark-blue ">
        {" "}
        <div className="max-w-7xl p-5 my-5 lg:my-10">
          <h1 className="my-8 text-4xl  font-bold tracking-normal  lg:tracking-wide text-center pb-5">
            My Achievements🏆
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
            {eligibilityData.map((data) => (
              <AchievementContainer
                key={data.id}
                image={data.image}
                title={data.title}
                isCompetition={data.isCompetition}
                startYear={data.startYear}
                endYear={data.endYear}
              />
            ))}
          </div>
        </div>
      </section>

      {/**Skills */}
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
                  Icon={data.Icon}
                  title={data.title}
                  proficiencyPercent={data.proficiencyPercent}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/**My Projects  */}
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
                image={data.image}
                title={data.title}
                tags={data.tags}
              />
            ))}
          </div>
        </div>
      </section>

      <BottomNav />

      <footer
        id="footer"
        className=" absolute footer items-center p-4 min-h-20 text-main-dirty-white z-10 md:z-0"
        style={{
          background: "linear-gradient(to right, #FC5185, #364F6B)",
        }}
      >
        <aside className="items-center grid-flow-col">
          <p>
            <b>Jerard Pagalilauan&apos;s</b> Web Portfolio
          </p>
        </aside>

        <nav className="grid-flow-row md:grid-flow-col gap-0 md:gap-4 md:place-self-center md:justify-self-end items-center">
          <header className="footer-title">Contact Me</header>
          <div className="grid grid-flow-col gap-4">
            <a href="tel:+639663672973" target="_blank">
              <FaPhoneAlt className="w-6 h-6" />
            </a>
            <a href="mailto:jerardpagalilauan@gmail.com" target="_blank">
              <MdMail className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/Jrrdprz" target="_blank">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="https://github.com/jrrd24" target="_blank">
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </footer>
    </main>
  );
}
