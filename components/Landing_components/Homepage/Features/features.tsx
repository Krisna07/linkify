"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaBox,
  FaFacebookSquare,
  FaPencilAlt,
  FaRegUserCircle,
  FaShareSquare,
  FaSlackHash,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";
import {
  BiExpand,
  BiGitPullRequest,
  BiGlobe,
  BiPhoneCall,
  BiShapeTriangle,
  BiUpArrow,
} from "react-icons/bi";

import {
  BsPhone,
  BsPin,
  BsPinAngleFill,
  BsRocket,
  BsRocketFill,
  BsStarFill,
  BsTelephone,
  BsTriangleFill,
} from "react-icons/bs";
import { motion } from "framer-motion";
import Profilecard from "./Profilecard";
import Featurecards from "./Featurecards";
import Counter from "./Counter";
import Button from "../../../Global_components/Button";
import Image from "next/image";
import {
  FaFacebookF,
  FaIcons,
  FaLink,
  FaRegClipboard,
  FaRegMessage,
  FaRegStar,
  FaSlack,
  FaTeamspeak,
  FaUserGroup,
  FaXTwitter,
} from "react-icons/fa6";
import {
  GiAutoRepair,
  GiFireworkRocket,
  GiIdea,
  GiTrackedRobot,
} from "react-icons/gi";
import {
  TbBrandTeams,
  TbProgress,
  TbStarFilled,
  TbUsersGroup,
} from "react-icons/tb";
import Background from "../../Background";
import { CiSettings } from "react-icons/ci";
import { FcIdea } from "react-icons/fc";
import { MdOutlineAddReaction } from "react-icons/md";

export interface Feature {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
  background: string;
}

const FeaturesSection = () => {
  return (
    <div
      className=" desktop:w-[1800px] w-full grid laptop:grid-cols-4 tablet:grid-cols-2 ] place-items-center gap-8 relative divide-none px-8"
      id="features"
    >
      <div className=" max-w-[400px] h-full  grid place-items-start p-4 px-8 bg-white text-dark rounded-lg gap-16  ">
        <div className="grid gap-2 leading-[120%]">
          <span>Scaleable</span>
          <h2 className="font-[600]">
            A single account can hold all the necessary boards
          </h2>
        </div>
        <div className="w-full grid gap-8 relative z-10">
          <div className="w-full grid grid-cols-2 gap-8 ">
            <div className="w-full grid bg-white rounded-2xl shadow-bs p-2">
              <span className="flex place-items-center font-[600] gap-2">
                <FaRegUserCircle color="blue" /> Boards
              </span>
              <span className="flex text-[10px] uppercase text-[gray]/75  gap-1 ">
                <span className="font-bold">1,212</span>Created
              </span>
            </div>
            <div className="w-full grid bg-white rounded-2xl shadow-bs p-2">
              <span className="flex place-items-center font-[600] gap-2">
                <FaRegClipboard color="orange" /> Projects
              </span>
              <span className="flex text-[10px] uppercase text-[gray]/75 gap-1 ">
                <span className="font-bold">10</span>Available
              </span>
            </div>
            <div className="w-full grid bg-white rounded-2xl shadow-bs p-2">
              <span className="flex place-items-center font-[600] gap-2">
                <TbUsersGroup color="purple" /> Shared
              </span>
              <span className="flex text-[10px] uppercase text-[gray]/75 gap-1 ">
                <span className="font-bold">18 </span>Groups
              </span>
            </div>
            <div className="w-full grid bg-white rounded-2xl shadow-bs p-2">
              <span className="flex place-items-center font-[600] gap-2">
                <FaRegStar color="green" /> Reviews
              </span>
              <span className="flex text-[10px] uppercase text-[gray]/75 gap-1 ">
                <span className="font-bold">22</span>Reviews
              </span>
            </div>
          </div>
          <div className="w-full grid place-items-center ">
            <div className="flex items-center gap-2  font-[500] py-1 text-white bg-dark px-2 rounded-full">
              <TbProgress /> <span className="text-[10px]">Track</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Our platform ensures scalability, allowing users to manage numerous
          boards and projects effortlessly. With over 1,212 boards created, 10
          projects available, 18 groups shared, and 22 reviews, our system is
          designed to accommodate the growing needs of our users. Each board and
          project is easily trackable, ensuring that you stay organized and
          efficient.
        </p>
      </div>
      <div className=" max-w-[400px] h-full grid place-items-start p-4 px-8 bg-white text-dark rounded-lg gap-16  ">
        <div className="grid gap-2 leading-[120%]">
          <span>Centralize</span>
          <h2 className="font-[600]">
            Track your boards and make changes from single place
          </h2>
        </div>
        <div className="w-full flex gap-4 relative z-10">
          <div className="grid place-content-start gap-2">
            <span className="w-fit h-fit rounded-full shadow-bs p-2 ">
              <FaPencilAlt color="gray" />
            </span>
            <span className="w-fit h-fit rounded-full shadow-bs p-2 ">
              <CiSettings color="gray" />
            </span>
          </div>
          <div className="w-full h-full grid place-items-center   relative ">
            <div className="relative w-full grid gap-4 z-[20] bg-white p-4 shadow-bs rounded-3xl">
              <img
                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1LzUwNC1meC0xMy1qb2IxNzU4XzEucG5n.png"
                width={40}
                height={40}
                alt="image"
                className="w-[60px] h-[60px] rounded-full object-cover bg-bermuda"
              />
              <h2 className="font-semibold">Ugon Times</h2>
              <table className="text-[12px] font-bold text-[gray]">
                <tr>
                  <td className="text-[12px] font-bold ">Projects</td>
                  <td className="text-dark">40</td>
                </tr>
                <tr>
                  <td className="text-[12px] font-bold ">Completed</td>
                  <td className="text-dark">15</td>
                </tr>
              </table>
              <div className="flex gap-2">
                <div className="w-fit flex items-center gap-2  font-[500] py-1 text-white bg-dark px-2 rounded-full">
                  <BsTelephone size={10} />{" "}
                  <span className="text-[10px]">Call</span>
                </div>{" "}
                <div className="w-fit flex items-center gap-2  font-[500] py-1  bg-dark/25 text-dark px-2 rounded-full">
                  <span className="text-[10px]">Message</span>
                </div>
              </div>
            </div>
            <div className="absolute w-[80%] h-full bg-white shadow-bs rounded-3xl z-[10] translate-y-4"></div>
          </div>
          <div className=" grid place-items-center gap-4 ">
            <div className="bg-dark w-8 h-8   rounded-full border-2 border-white  shadow-bs grid place-items-center">
              <div className="w-2 h-2 bg-white p-2 rounded-full self-center"></div>
            </div>
            <div className="grid ">
              <div className="bg-primary w-8 h-8   rounded-full border-2 border-white  shadow-bs grid place-items-center"></div>{" "}
              <div className="bg-[orange] w-8 h-8   rounded-full border-2 border-white shadow-bs grid place-items-center -translate-y-4"></div>{" "}
              <div className="bg-accent w-8 h-8   rounded-full border-2 border-white shadow-bs grid place-items-center -translate-y-8"></div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Each feature is designed to enhance your productivity and streamline
          your project management processes. From real-time collaboration tools
          to advanced analytics, explore how you can leverage these capabilities
          to optimize your workflow and achieve better outcomes.
        </p>
      </div>
      <div className=" max-w-[400px] h-full grid place-items-start p-4 px-8 bg-white text-dark rounded-lg gap-16  ">
        <div className="grid gap-2 leading-[120%]">
          <span>Collabrate</span>
          <h2 className="font-[600]">
            Enhance Team Collaboration with Integrated Tools and Real-Time
            Communication Features
          </h2>
        </div>
        <div className="w-full grid gap-8 relative z-10">
          <div className="w-fit px-4 grid bg-[lightgray]/25  rounded-2xl shadow-bs p-1 border-white border-4">
            <span className=" text-sm text-[gray]/75 font-semibold flex items-center gap-2 whitespace-nowrap leading-4">
              Reviewed on <FcIdea className="text-dark bg-dark/25 rounded" /> AI
              Social
            </span>
          </div>

          <div className="w-full grid place-items-center relative ">
            <div className="absolute w-[80%] h-full bg-white shadow-bs rounded-3xl z-[10] translate-y-4 "></div>
            <div className="w-full grid gap-2 shadow-bs p-4 rounded-3xl relative z-[20] bg-white ">
              <div className="flex  items-center gap-2 font-semibold text-[gray]/75 text-sm">
                <span className="p-2 bg-accent rounded-full w-8 h-8 font-semibold text-white flex items-center justify-center  ">
                  L
                </span>
                Lucas Muller
              </div>
              <div className="grid gap-2">
                <div className="ml-4 text-sm flex gap-1 font-sans font-[700]">
                  <span className="text-[blue] ">@Adam</span> the idea looks
                  awsome !!
                </div>
                <div className="flex gap-2 items-cenetr">
                  {" "}
                  <div className="flex gap-[4px] items-center text-[gray]/75 text-sm">
                    <BsPinAngleFill color="red" size={16} /> 8
                  </div>
                  <div className="flex gap-[4px] items-center text-[gray]/75 text-sm">
                    <TbStarFilled color="orange" size={16} /> 3
                  </div>{" "}
                  <div className="flex gap-[4px] items-center text-[gray]/75 text-sm">
                    <BsRocketFill
                      color="black"
                      size={16}
                      className="rotate-[45deg]"
                    />{" "}
                    7
                  </div>
                  <div className="flex gap-[4px] items-center text-[gray]/75 text-sm">
                    <MdOutlineAddReaction color="gray" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Explore the dynamic landscape of user interactions and feedback
          directly on our platform. This section vividly showcases the
          engagement levels through likes, shares, and comments, providing
          insights into the popularity and user reception of various features.
          It's a visual testament to the community's active participation and
          invaluable input.
        </p>
      </div>{" "}
      <div className=" max-w-[400px] h-full grid place-items-start p-4 px-8 bg-white text-dark rounded-lg gap-16  ">
        <div className="w-full grid gap-2 leading-[120%]">
          <span>Support</span>
          <h2 className="font-[600]">
            Create board Genrate link, share in internet for insights
          </h2>
        </div>
        <div className="w-full grid gap-8 relative z-10 my-16">
          <div className="max-w-full flex justify-between relative translate-y-12">
            <div className="w-fit grid bg-[blue] rounded-2xl shadow-bs p-2">
              <span className="flex place-items-center font-[600] gap-2">
                <FaFacebookF color="white" size={50} />
              </span>
            </div>
            <div className="w-fit grid bg-dark rounded-2xl shadow-bs p-2 relative -translate-y-16">
              <span className="flex place-items-center font-[600] gap-2">
                <FaXTwitter color="white" size={50} />
              </span>
            </div>
            <div className="w-fit grid bg-white rounded-2xl shadow-bs p-2 relative -translate-y-8">
              <span className="flex place-items-center font-[600] gap-2">
                <FaSlack color="aubergine" size={50} />
              </span>
            </div>
            <div className="w-fit grid bg-white rounded-2xl shadow-bs p-2 relative -translate-y-16">
              <span className="flex place-items-center font-[600] gap-2">
                <TbBrandTeams color="#6264A7" size={50} />
              </span>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Our support system is designed to assist you every step of the way.
          Whether you need help navigating through our platform, understanding
          features, or resolving any issues, our dedicated team is here to
          ensure a seamless experience. Connect with us through various channels
          like Facebook, Twitter, Slack, or Teams, and get the assistance you
          need promptly.
        </p>
      </div>
    </div>
  );
};

export default FeaturesSection;
