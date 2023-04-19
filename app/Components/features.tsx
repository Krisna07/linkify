"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaExpandAlt, FaLink, FaShareSquare, FaUser } from "react-icons/fa";
import { BiGitPullRequest, BiShapeTriangle, BiUpArrow } from "react-icons/bi";
import { GiAutoRepair, GiDiploma } from "react-icons/gi";
import { BsTriangleFill } from "react-icons/bs";

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

  return (
    <section className="w-full flex items-center justify-center bg-gray-200 py-8">
      <div className="container sm:px-6 lg:px-8 gap-16  box-border p-4">
        <div className="flex items-center justify-between box-border gap-16 ">
          <div className="w-3/5 h-full flex flex-col justify-between gap-8 ">
            <h3 className="font-bold">Worry less</h3>
            <h2 className="text-xl w-3/4 sm:text-2xl font-bold leading-tight text-gray-900 mb-8 text-gray-700">
              Let Linkify deliver you the most awsome user experience
            </h2>
            <p className="w-4/5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto magnam nostrum enim quod maxime! Nemo similique optio
              veniam sunt ex. Lorem, ipsum dolor sit amet consectetur
            </p>
          </div>
          <div className="w-2/5 box-border rounded flex">
            <img
              src={
                "https://cdn.dribbble.com/users/239075/screenshots/6128789/media/9419c0a3cba0175c78dcb3c339160427.gif"
              }
              width={"100%"}
              className="box-border  rounded"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((features) => (
            <div
              className="min-h-fit p-6 box-border bg-red-100/50 rounded hover:scale-[1.1] transition hover:shadow-lg"
              key={features.id}
            >
              <h3 className="text-lg font-bold mb-2 flex items-center w-full relaxed justify-between">
                {features.title} {features.icon}
              </h3>
              <p className="text-gray-600">{features.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 text-white">
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
