"use client";

import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Link from "next/link";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Herosection() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="w-full relative grid min-h-screen place-content-center overflow-hidden bg-gray-900 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <motion.button
          whileHover={{
            scale: 1.015,
            transform: "translate-y-2px",
          }}
          whileTap={{
            scale: 0.985,
          }}
          className=" animate-slidein300  mb-1.5 inline-block rounded-full bg-gray-600/50  px-3 py-1.5 text-sm overflow-hidden cursor-default"
        >
          Try Demo
        </motion.button>
        <h1
          className={`animate-slidein700  max-w-3xl font-bold  bg-gradient-to-tr from-white to-[${color}] bg-clip-text text-center text-6xl  leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight`}
        >
          <span className="animate-text"> A place for your links</span>
        </h1>
        <p className=" animate-slidein500 my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Effortlessly share and connect with our link sharing app. Instantly
          share articles, videos, and ideas, fostering engaging discussions.{" "}
          Join us to reshape how you connect and share in the digital age.
        </p>
        <Link href={"/auth/signup"}>
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            children={
              <span className="flex items-center gap-2">
                Sign up{" "}
                <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />{" "}
              </span>
            }
            className="animate-slidein500  group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
          />
        </Link>
      </div>
    </motion.section>
  );
}
