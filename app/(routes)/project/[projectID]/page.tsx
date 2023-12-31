import Image from "next/image";
import React from "react";

type Props = {};

type Params = { projectID: number };

function page({ params }: { params: Params }) {
  return (
    <div className="hero min-h-screen flex flex-col gap-2 md:gap-5 items-center justify-center">
      {" "}
      <div>
        <Image
          src={"/assets/under_construction.svg"}
          alt={"under construction"}
          width="0"
          height="0"
          sizes="100vw"
          className="object-cover w-auto h-auto sm:h-96 p-5"
        />
      </div>
      <div className=" text-xl sm:text-2xl font-mono">
        {" "}
        Page Under Construction 🏗️
      </div>
    </div>
  );
}

export default page;
