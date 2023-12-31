import { MotionDiv } from "@/components/client/MotionDiv";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
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
      <MotionDiv
        initial={{ opacity: 0, y: "50%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        transition={{
          type: "spring",
          damping: 10,
          mass: 0.75,
          stiffness: 100,
          delay: 0.2,
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
      </MotionDiv>
    </section>
  );
};

export default Hero;
