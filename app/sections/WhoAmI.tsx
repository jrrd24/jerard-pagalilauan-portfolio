import { MotionDiv } from "@/components/client/MotionDiv";
import Image from "next/image";
import React from "react";

type Props = {};

const WhoAmI = (props: Props) => {
  return (
    <section
      id="me"
      className="hero  min-h-screen items-center justify-items-center  bg-base-100  text-main-dark-blue "
    >
      <div className="hero-content flex-col lg:flex-row">
        <MotionDiv
          initial={{ opacity: 0, y: "20%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{
            type: "spring",
            damping: 10,
            mass: 0.75,
            stiffness: 100,
            delay: 0.3,
          }}
        >
          <div className="avatar m-5 z-10">
            <div className="w-40 lg:w-60 relative">
              <Image
                src="/assets/profile_pic.webp"
                alt="profile"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-xl"
              />
            </div>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, x: "-20%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          transition={{
            type: "spring",
            damping: 10,
            mass: 0.75,
            stiffness: 100,
            delay: 0.8,
          }}
        >
          <div className="max-w-lg  text-center lg:text-left z-0">
            <h1 className="mb-5 text-4xl lg:text-5xl font-bold tracking-normal  lg:tracking-wide snap-start">
              Who Am I?
            </h1>

            <p className="mb-5 text-justify  ">
              I am <b>Jerard Philiip P. Pagalilauan. </b>A hardworking and
              passionate Bachelor of Science in Information Technology
              undergraduate with minimal experience in developing web and
              desktop apps, who’s dedicated in bringing creative and functional
              web designs to life through programming.
            </p>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default WhoAmI;
