import Image from "next/image";
import * as React from "react";
import { MotionDiv } from "./MotionDiv";

type Tag = {
  Icon: React.ElementType;
  title: string;
};
type Card = {
  image: string;
  title: string;
  tags: Tag[];
};

export function ProjectContainer(props: Card) {
  return (
    <MotionDiv initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div
        className={`card card-compact hover:bg-neutral hover:bg-opacity-5 transition-colors `}
      >
        {/**Image */}{" "}
        <Image
          src={props.image || "/assets/no_image.svg"}
          alt={props.title}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto object-cover  aspect-video   rounded-3xl"
        />
        <div className="card-body">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="card-actions justify-end">
              {props.tags.map((data) => (
                <MotionDiv
                  key={data.title}
                  initial={{ scale: 1 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.2 }}
                  transition={{ stiffness: 0 }}
                >
                  <div className="badge badge-secondary text-main-dirty-white h-7 select-none">
                    {data.Icon && <data.Icon className="  h-5 w-5" />}
                    &nbsp;
                    {data.title}
                  </div>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </MotionDiv>
  );
}
