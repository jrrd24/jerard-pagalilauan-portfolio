"use client";
import { useTransform, useScroll, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ProfilePic = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 2], [0.7, 3]);

  return (
    <motion.div style={{ scale }}>
      <div className="avatar m-5">
        <div className="w-40 lg:w-60 rounded-xl">
          <Image
            src="/assets/profile_pic.jpg"
            alt="profile"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePic;
