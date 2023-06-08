"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
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
import { GiAutoRepair, GiDiploma } from "react-icons/gi";
import { BsTriangleFill } from "react-icons/bs";
import profile from "./Images/profile.png";

const Profilecard = ({ cardStyle, icon, key }: any) => {
  return (
    <div
      className={`w-60 h-60 ${cardStyle} rounded-[10px] p-4 flex justify-between absolute left-0 bottom-0 transition:all`}
      key={key}
    >
      <div className="w-20 h-20 rounded-full bg-rose-200 overflow-hidden">
        <img
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1LzUwNC1meC0xMy1qb2IxNzU4XzEucG5n.png"
          alt=""
        />
      </div>
      <div>{icon}</div>
    </div>
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
    title: "Automatic Link Repair",
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

  useEffect(() => {
    const randomNumbers = [];
    let randomNumber, randomReq, donwRandom;

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

  return (
    <section className="w-full flex items-center justify-center bg-sky-900 py-12 -skew-y-3 text-sky-100">
      <div className="md:w-[80%] p-4  grid  gap-16  box-border  skew-y-3">
        <div className="flex items-center justify-between box-border gap-8 ">
          <div className="md:w-3/5 h-full flex flex-col items-start justify-center gap-8">
            <h3 className="font-bold">Worry less</h3>
            <h2 className="text-xl w-full md:w-3/4 sm:text-2xl font-bold leading-tight text-white mb-8 text-gray-700">
              Let Linkify deliver you the most awsome user experience
            </h2>
            <p className="w-4/5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto magnam nostrum enim quod maxime! Nemo similique optio
              veniam sunt ex. Lorem, ipsum dolor sit amet consectetur
            </p>
          </div>
          <div className="w-2/5 max-h-full box-border rounded flex hidden md:flex relative h-80">
            {profiles.map((card: any, count: any) => (
              <Profilecard
                key={count}
                cardStyle={card.cardStyle}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {features.map((features) => (
            <div
              className="min-h-fit p-6 box-border bg-sky-100 text-slate-900 rounded hover:scale-[1.1] transition hover:shadow-lg"
              key={features.id}
            >
              <h3 className="text-lg font-bold mb-2 flex items-center w-full relaxed justify-between">
                {features.title}{" "}
                <span className="text-2xl">{features.icon}</span>
              </h3>
              <p className="text-slate-800 font-600">{features.description}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4 text-white">
          <div className=" bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black box-border p-4 rounded">
            <h3 className="text-lg font-bold mb-2 flex items-center w-full relaxed justify-between">
              Users
            </h3>
            <h3 className=" text-xl font-bold mb-2 flex items-center gap-4 text-gray-400">
              {count}{" "}
              <span>
                <FaUser />
              </span>
            </h3>
          </div>
          <div className=" bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black box-border p-4 rounded">
            <h3 className="text-lg font-bold mb-2 flex items-center w-full relaxed justify-between">
              Request
            </h3>
            <h3 className=" text-xl font-bold mb-2 flex items-center gap-4 text-gray-400">
              {req}
              <span>
                {" "}
                <BiGitPullRequest />
              </span>
            </h3>
          </div>
          <div className=" bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black box-border p-4 rounded">
            <h3 className="text-lg font-bold mb-2 flex items-center w-full relaxed justify-between">
              Downloads
            </h3>
            <h3 className=" text-xl font-bold mb-2 flex items-center gap-4 text-gray-400">
              {download}
              <span>
                <BsTriangleFill />
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
