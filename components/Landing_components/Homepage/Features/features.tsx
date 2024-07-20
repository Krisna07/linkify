"use client";

import { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import { BiGitPullRequest, BiShapeTriangle, BiUpArrow } from "react-icons/bi";

import { BsTriangleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Profilecard from "./Profilecard";
import Featurecards from "./Featurecards";
import Counter from "./Counter";

const FeaturesSection = () => {
  const [count, setCount] = useState(0);
  const [req, setReq] = useState(0);
  const [download, setDownload] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const randomNumbers: any = [];
    let randomNumber: any, randomReq: any, donwRandom: any;

    while (randomNumbers.length < 3) {
      randomNumber = Math.floor(Math.random() * 1000) + 332342;
      randomReq = Math.floor(Math.random() * 1000) + 234234;
      donwRandom = Math.floor(Math.random() * 1000) + 576765;

      if (
        !randomNumbers.includes(randomNumber) &&
        !randomNumbers.includes(randomReq) &&
        !randomNumbers.includes(donwRandom)
      ) {
        randomNumbers.push(randomNumber, randomReq, donwRandom);
      }
    }

    const interval = setInterval(() => {
      if (count < randomNumbers[0]) {
        setCount((prevNumber) => Math.floor(prevNumber + randomNumber / 100));
      } else {
        clearInterval(interval);
      }
      if (req < randomNumbers[1]) {
        setReq((prevNumber) => Math.floor(prevNumber + randomReq / 100));
      } else {
        clearInterval(interval);
      }
      if (download < randomNumbers[2]) {
        setDownload((prevNumber) => Math.floor(prevNumber + donwRandom / 100));
      } else {
        clearInterval(interval);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [count, req, download]);

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  return (
    <div
      className="w-full min-h-screen grid place-items-center relative  px-4"
      id="features"
    >
      <div className="laptop:w-[1024px] w-full grid  gap-8  box-border">
        <div
          ref={scrollRef}
          className="w-full grid grid-cols-1 laptop:grid-cols-[50%_40%] gap-8 box-border "
        >
          <motion.div
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
            className=" h-full flex flex-col items-start justify-center gap-2 relative overflow-hidden"
          >
            <h3 className="font-bold">Seamless</h3>
            <h2 className="text-4xl w-full tablet:w-3/4 sm:text-2xl font-bold  mb-8 text-gray-700">
              Connect all your social media from single place
            </h2>
            <p className="w-4/5">
              Add all your social media at a place seamlessly. Post several
              contents to different accounts with ease. Check and evaluate your
              traffic, create and post ads.
            </p>
          </motion.div>
          <div className=" max-h-full box-border rounded  hidden laptop:flex relative h-80">
            <Profilecard />
          </div>
        </div>
        <div className=" grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-8 relative">
          <Featurecards />
        </div>
        <div className="w-full grid grid-cols-1 tablet:grid-cols-3 gap-4 text-silver ">
          <div className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[gray] via-dark to-black box-border p-4 rounded">
            <h3 className="text-lg font-bold mb-2 flex items-center w-full relaxed justify-between">
              Users
            </h3>
            <h3 className=" text-xl font-bold mb-2 flex items-center gap-4 text-gray-400">
              <Counter number={count} />
              <span>
                <FaUser className="animate-pulse" />
              </span>
            </h3>
          </div>
          <div className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[gray] via-dark to-black box-border p-4 rounded">
            <h3 className="text-lg font-bold mb-2 flex items-center w-full relaxed justify-between">
              Accounts
            </h3>
            <h3 className=" text-xl font-bold mb-2 flex items-center gap-4 text-gray-400">
              <Counter number={req} />
              <span>
                <BiGitPullRequest className="animate" />
              </span>
            </h3>
          </div>
          <div className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[gray] via-dark to-black box-border p-4 rounded">
            <h3 className="text-lg font-bold mb-2 flex items-center w-full relaxed justify-between">
              Shares
            </h3>
            <h3 className=" text-xl font-bold mb-2 flex items-center gap-4 text-gray-400">
              <Counter number={download} />
              <span>
                <BsTriangleFill className="animate-bounce" />
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
