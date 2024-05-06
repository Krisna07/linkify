// import Button from "@/app/g_components/Button";
// import Link from "next/link";
// import React from "react";
// import { FaRocket } from "react-icons/fa";
// import SponsorsSection from "./Sponsers";

// export default function Herosection() {
//   return (
//     <div className="laptop:w-[1024px] min-h-[80vh] animate-text box-border  laptop:px-8 p-4 bg-white grid place-items-center tablet:grid-cols-2 gap-4 py-16 ">
//       <div className="grid place-items-center tablet:flex tablet:flex-col tablet:items-start gap-8 ">
//         <div className="grid gap-2 leading-[120%] text-center tablet:text-left">
//           <div className="animate-text  text-4xl font-extrabold text-transparent leading-relaxed bg-clip-text bg-gradient-to-t from-slate-900 to-slate-400">
//             A place for your links
//           </div>
//           <p className="tablet:w-[600px] w-full  text-slate-900 font-[500]">
//             Effortlessly share and connect with our link sharing app. Instantly
//             share articles, videos, and ideas, fostering engaging discussions.{" "}
//             Join us to reshape how you connect and share in the digital age.
//           </p>
//         </div>
//         <Link href="/auth/signup">
//           <Button
//             children={"Start"}
//             variant={"primary"}
//             icon={true}
//             size={"default"}
//           />
//         </Link>
//         <Link href="/dashboard">
//           <Button
//             children={"Try Demo"}
//             variant={"accent"}
//             icon={true}
//             size={"default"}
//           />
//         </Link>
//       </div>
//       <div>

//       </div>
//     </div>
//   );
// }

"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
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
        <motion.span
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
        </motion.span>
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
