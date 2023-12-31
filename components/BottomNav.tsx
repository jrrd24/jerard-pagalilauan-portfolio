import navbarData from "@/data/NavbarData";
import Link from "next/link";
import * as React from "react";
import { MotionDiv } from "./client/MotionDiv";

export function BottomNav() {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        damping: 10,
        mass: 0.75,
        stiffness: 100,
        delay: 0.5,
      }}
    >
      <div className="absolute w-full">
        <div className="btm-nav btm-nav-sm mb-5 bg-transparent">
          <div className="grid justify-content-center grid-flow-col gap-6 max-w-60 backdrop-filter backdrop-blur-lg bg-neutral bg-opacity-60 text-white rounded-3xl">
            {navbarData.map((data) => (
              <Link key={data.id} href={data.href}>
                <MotionDiv
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    mass: 0.75,
                    stiffness: 100,
                    delay: 0.5 + 0.3 * data.id,
                  }}
                >
                  <div className="flex flex-col items-center">
                    {/* Add grid and items-center */}

                    <data.Icon className="h-6 w-6" />
                    <p className="text-xs select-none  ">{data.title}</p>
                  </div>
                </MotionDiv>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
