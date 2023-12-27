import navbarData from "@/data/NavbarData";
import Link from "next/link";
import * as React from "react";

export function BottomNav() {
  return (
    <div className="absolute w-full">
      <div className="btm-nav btm-nav-sm mb-5 bg-transparent">
        <div className="grid justify-content-center grid-flow-col gap-4 max-w-60 backdrop-filter backdrop-blur-lg bg-neutral bg-opacity-60 text-white rounded-3xl">
          {navbarData.map((data) => (
            <Link key={data.title} href={data.href}>
              <div className="flex flex-col items-center link-hover">
                {/* Add grid and items-center */}
                <data.Icon className="h-6 w-6" />
                <p className="text-xs select-none  ">{data.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
