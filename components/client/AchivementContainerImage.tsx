"use client";
import Image from "next/image";
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type Props = { image: string; title: string };

const AchivementContainerImage = (props: Props) => {
  return (
    <Zoom>
      <figure className={`bg-gray-300 select-none rounded-2xl max-h-60`}>
        <Image
          src={props.image || "/assets/no_image.svg"}
          alt={props.title}
          width="0"
          height="0"
          sizes="100vw"
          className="object-contain w-auto h-auto "
        />
      </figure>
    </Zoom>
  );
};

export default AchivementContainerImage;
