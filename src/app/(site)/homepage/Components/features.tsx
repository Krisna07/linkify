"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaExpandAlt,
  FaFacebook,
  FaInstagram,
  FaLink,
  FaShareSquare,
  FaSnapchat,
  FaTiktok,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { BiGitPullRequest, BiShapeTriangle, BiUpArrow } from "react-icons/bi";
import { GiAutoRepair } from "react-icons/gi";
import { BsTriangleFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Profilecard = ({ cardStyle, icon }: any) => {
  return (
    <motion.div
      className={`laptop:w-60 laptop:h-60 tablet:w-40 tablet:h-40  ${cardStyle} rounded-[10px] p-4 flex justify-between absolute left-0 bottom-0 transition:all`}
    >
      <div className="w-20 h-20 rounded-full bg-rose-200 overflow-hidden">
        <img
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1LzUwNC1meC0xMy1qb2IxNzU4XzEucG5n.png"
          alt=""
        />
      </div>
      <div>{icon}</div>
    </motion.div>
  );
};
const features = [
  {
    id: 1,
    icon: <FaExpandAlt className=" text-gray-800" />,
    title: "Scalable",
    description: "Linkify can handle any number of links you throw at it. ",
  },
  {
    id: 2,
    icon: <FaLink className=" text-gray-800" />,
    title: "Easy to Use",
    description: "Linkify has a simple and intuitive interface t",
  },
  {
    id: 3,
    icon: <GiAutoRepair className=" text-gray-800" />,
    title: "Automatic ",
    description:
      "Linkify automatically detects broken links and removes them from your list.",
  },
  {
    id: 4,
    icon: <FaShareSquare className=" text-gray-800" />,
    title: "Share Everywhere",
    description:
      "Linkify provides you with a single link that you can share on all platforms.",
  },
];

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

  const profiles = [
    {
      cardStyle: "bg-red-600 z-50 bottom-0 left-0",
      icon: <FaTiktok size={32} />,
    },
    {
      cardStyle:
        "bg-sky-600 z-40 bottom-12 left-12 z-40 hover:translate-y-[-40px] transition-all",
      icon: <FaFacebook size={32} />,
    },
    {
      cardStyle:
        "bg-yellow-400 bottom-24 left-24 z-30 hover:translate-y-[-40px] transition-all",
      icon: <FaSnapchat size={32} />,
    },
    {
      cardStyle:
        "bg-sky-400 bottom-36 left-36 z-20 hover:translate-y-[-40px] transition-all",
      icon: <FaTwitter size={32} />,
    },
    {
      cardStyle:
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bottom-48 left-48 z-10 hover:translate-y-[-40px] transition-all",
      icon: <FaInstagram size={32} />,
    },
  ];

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  return (
    <div className="w-full min-h-screen grid place-items-center relative text-white/75 px-4">
      <div className="laptop:w-[1024px] w-full grid  gap-8  box-border  ">
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
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
            viewport={{ once: true }}
            className=" h-full flex flex-col items-start justify-center gap-2 relative overflow-hidden"
          >
            <h3 className="font-bold">Seamless</h3>
            <h2 className="text-4xl w-full tablet:w-3/4 sm:text-2xl font-bold text-white mb-8 text-gray-700">
              Connect all your social media from single place
            </h2>
            <p className="w-4/5">
              Add all your social media at a place seamlessly. Post several
              contents to different accounts with ease. Check and evaluate your
              traffic, create and post ads.
            </p>
          </motion.div>
          <div className=" max-h-full box-border rounded flex hidden laptop:flex relative h-80">
            {profiles.map((card: any, x) => (
              <Profilecard
                key={x}
                cardStyle={card.cardStyle}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
        <div className=" grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-8 relative">
          {features.map((feature) => (
            <motion.div
              initial={{ left: -100 }}
              whileInView={{ left: 0 }}
              transition={{
                type: "bounce",
                damping: 10,
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className=" relative min-h-fit p-4 box-border bg-gray-800/50 text-light rounded  hover:-skew-y-3 transition hover:shadow-lg"
              key={feature.id}
            >
              <h3 className="w-fit text-lg font-bold mb-2 flex items-center w-full relaxed justify-between">
                {feature.title}{" "}
                {/* <span className="text-2xl text-white">{feature.icon}</span> */}
              </h3>
              <p className="text-slate-200 font-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="w-full grid grid-cols-3 gap-4 text-white ">
          <div className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-800 to-black box-border p-4 rounded">
            <h3 className="text-lg font-bold mb-2 flex items-center w-full relaxed justify-between">
              Users
            </h3>
            <h3 className=" text-xl font-bold mb-2 flex items-center gap-4 text-gray-400">
              {count}
              <span>
                <FaUser className="animate-pulse" />
              </span>
            </h3>
          </div>
          <div className=" bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-800 to-black box-border p-4 rounded">
            <h3 className="text-lg font-bold mb-2 flex items-center w-full relaxed justify-between">
              Accounts
            </h3>
            <h3 className=" text-xl font-bold mb-2 flex items-center gap-4 text-gray-400">
              {req}
              <span>
                <BiGitPullRequest className="animate" />
              </span>
            </h3>
          </div>
          <div className=" bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-800 to-black box-border p-4 rounded">
            <h3 className="text-lg font-bold mb-2 flex items-center w-full relaxed justify-between">
              Shares
            </h3>
            <h3 className=" text-xl font-bold mb-2 flex items-center gap-4 text-gray-400">
              {download}
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
