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
import Button from "../../Global_components/Button";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Hero() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.section className="w-full relative grid py-16 place-items-center overflow-hidden text-white    border-box">
      <div className="relative z-10 flex flex-col items-center">
        <button className=" animate-slidein300 scale-1  mb-1.5 inline-block rounded-full bg-white/50 text-dark  px-3 py-1.5  text-sm overflow-hidden cursor-default">
          Try Demo
        </button>
        <h1
          className={`animate-slidein700  max-w-3xl font-bold  bg-gradient-to-tr from-white to-[${color}] bg-clip-text text-center text-6xl  leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight`}
        >
          <span className="animate-text"> A place for your Ideas</span>
        </h1>
        <p className="text-silver animate-slidein500 my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Create boards with your ideas and share them with friends and the
          internet. Unlock your creativity and bring your ideas to life.
        </p>
        <Link href={"/auth/signup"}>
          <motion.button
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            children={
              <Button
                children="SIGN UP"
                variant={"accent"}
                size={"default"}
                icon={true}
              />
            }
            className="animate-slidein500  group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
          />
        </Link>
      </div>
    </motion.section>
  );
}
