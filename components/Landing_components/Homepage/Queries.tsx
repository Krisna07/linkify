"use client";
import React from "react";
import { FaCloudscale, FaPenSquare, FaSync, FaUserAlt } from "react-icons/fa";
import Button from "../../Global_components/Button";
import { motion } from "framer-motion";

const Queries = () => {
  const queries = [
    {
      name: "Carefully Crafted",
      icon: <FaPenSquare />,
      des: "Meticulously designed to deliver a superior experience.",
    },
    {
      name: "User-Centric",
      icon: <FaUserAlt />,
      des: "Empowering with intuitive and interactive features.",
    },
    {
      name: "Seamless Sync",
      icon: <FaSync />,
      des: "Effortlessly stay in sync across all your devices.",
    },
    {
      name: "Interactive APIs",
      icon: <FaCloudscale />,
      des: "Explore a world of possibilities with our interactive APIs.",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center py-8">
      <div className=" mx-auto px-8 lg:px-4">
        <div className="grid grid-cols-1 laptop:grid-cols-[60%_40%] laptop:w-[1000px] gap-4 lg:gap-20">
          <motion.div
            className=""
            initial={{ opacity: "0", y: 50 }}
            whileInView={{
              y: 0,
              opacity: "1",
            }}
            transition={{
              type: "bounce",
              damping: 10,
              stiffness: 100,
            }}
            viewport={{ once: true }}
          >
            <h3 className=" text-silver/75 text-xl font-bold mb-4">
              Unlock Your Social Media Potential
            </h3>
            <h2 className="animate-slidein500 text-4xl lg:text-5xl font-bold  mb-6 leading-tight">
              Take Control with Our Social Media Handler
            </h2>
            <p className="animate-slidein700 text-lg lg:text-xl mb-8">
              Manage, engage, and grow your social media presence seamlessly
              with our advanced handler app. Let's revolutionize the way you
              connect with your audience!
            </p>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 pb-8">
              {queries.map((query) => (
                <motion.div
                  initial={{ opacity: "0", y: 50 }}
                  whileInView={{
                    y: 0,
                    opacity: "1",
                  }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  key={query.name}
                  className="bg-dark/50 rounded-lg grid shadow-bs overflow-hidden"
                >
                  <div className="w-full h-[100px] bg-gradient-to-br from-[indigo] to-[white]"></div>
                  <div className="relative grid place-items-center">
                    <div className="absolute -top-10   rounded-full p-4 grid place-items-center bg-accent text-4xl text-silver">
                      {query.icon}
                    </div>
                  </div>
                  <div className="w-full text-white/50 grid place-items-center pt-10  p-2 text-center bg-dark/25">
                    <h2 className="font-semibold text-white">{query.name}</h2>
                    <p>{query.des}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Button
              variant={"default"}
              size={"lg"}
              children={"Learn More"}
              icon={true}
            />
          </motion.div>
          <div className="laptop:grid place-items-center hidden">
            <div className="relative mx-auto border-white dark:border-dark bg-white border-[14px] rounded-[2.5rem] h-[600px] w-[300px] ">
              <div className="h-[32px] w-[3px] bg-white dark:bg-dark absolute -start-[17px] top-[72px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-white dark:bg-dark absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-white dark:bg-dark absolute -start-[17px] top-[178px] rounded-s-lg"></div>
              <div className="h-[64px] w-[3px] bg-white dark:bg-dark absolute -end-[17px] top-[142px] rounded-e-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-dark">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
                  className="dark:hidden w-[272px] h-[572px]"
                  alt=""
                />
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
                  className="hidden dark:block w-[272px] h-[572px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queries;
