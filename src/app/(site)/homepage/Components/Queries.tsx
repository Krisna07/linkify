import React from "react";
import { FaCloudscale, FaPenSquare, FaSync, FaUserAlt } from "react-icons/fa";
import Button from "../../../g_components/Button";
import { motion } from "framer-motion";
import classNames from "classnames";
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
    <div className="w-full flex items-center justify-center py-8 bg-gradient-to-b from-blue-900/25 to-blue-800/25">
      <div className=" mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 laptop:grid-cols-[60%_40%] laptop:w-[1000px] gap-12 lg:gap-20">
          <div className="text-white/50">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                },
              }}
              viewport={{ once: true, amount: 0.8 }}
              className=" text-xl font-bold mb-4"
            >
              Unlock Your Social Media Potential
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                },
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="animate-slidein500 text-4xl lg:text-5xl font-bold text-white/75 mb-6 leading-tight"
            >
              Take Control with Our Social Media Handler
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                },
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="animate-slidein700 text-lg lg:text-xl mb-8"
            >
              Manage, engage, and grow your social media presence seamlessly
              with our advanced handler app. Let's revolutionize the way you
              connect with your audience!
            </motion.p>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 pb-8">
              {queries.map((query) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.4,
                      duration: 0.8,
                    },
                  }}
                  viewport={{ once: true, amount: 0.8 }}
                  key={query.name}
                  className="bg-white/50 rounded-lg grid place-items-center"
                >
                  <div className="w-full h-[100px] bg-gradient-to-t from-blue-400/50 to-indigo-800/50"></div>
                  <div className="relative grid place-items-center">
                    <div className="absolute -top-5  bg-green-200 rounded-full p-2 grid place-items-center text-4xl text-black">
                      {query.icon}
                    </div>
                  </div>
                  <div className="w-full text-white/50 grid place-items-center pt-10  p-2 text-center bg-black/50">
                    <h2 className="font-semibold text-white">{query.name}</h2>
                    <p>{query.des}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Button
              variant={"primary"}
              size={"default"}
              children={"Learn More"}
            />
          </div>
          <div className="laptop:grid place-items-center hidden">
            <motion.div
              initial={{ y: 100 }}
              whileInView={{
                y: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                },
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]"
            >
              <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
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
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queries;
