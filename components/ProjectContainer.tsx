import Image from "next/image";
import * as React from "react";

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
        <div className="card-actions justify-end">
          {props.tags.map((data) => (
            <div
              key={data.title}
              className="badge badge-secondary text-main-dirty-white h-7"
            >
              {data.Icon && <data.Icon className="  h-5 w-5" />}
              &nbsp;
              {data.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
