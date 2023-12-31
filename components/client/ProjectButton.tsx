import React from "react";
import { MotionDiv } from "./MotionDiv";
import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  title: string;
  id: number;
};

const ProjectButton = (props: Props) => {
  return (
    <Link href={`/project/${props.id}`}>
      <MotionDiv
        initial={{ scale: 0.95 }}
        whileHover={{ scale: 1 }}
        transition={{
          type: "tween",
          damping: 10,
          mass: 0.75,
          stiffness: 100,
        }}
      >
        <Image
          src={props.image || "/assets/no_image.svg"}
          alt={props.title}
          width="40"
          height="40"
          sizes="100vw"
          className="w-full h-auto object-cover  aspect-video   rounded-3xl"
        />
      </MotionDiv>
    </Link>
  );
};

export default ProjectButton;
