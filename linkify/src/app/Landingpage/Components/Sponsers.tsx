"use client";

import {
  FaAmazon,
  FaAndroid,
  FaBattleNet,
  FaFacebookSquare,
  FaGoogle,
  FaHireAHelper,
  FaImdb,
  FaNode,
  FaSlack,
  FaSnapchatSquare,
  FaStripe,
} from "react-icons/fa";

import Marquee from "react-fast-marquee";
import Button from "./ui/Button";

const SponsorsSection = () => {
  const sponsers = [
    {
      name: "Company A",
      logoUrl: <FaStripe color="blue" />,
    },
    {
      name: "Company B",
      logoUrl: <FaGoogle color="orange" size={"40px"} />,
    },
    {
      name: "Company C",
      logoUrl: <FaAmazon />,
    },
    {
      name: "Company D",
      logoUrl: <FaAndroid color="green" />,
    },
    {
      name: "Company E",
      logoUrl: <FaSlack color="blue" />,
    },
    {
      name: "Company F",
      logoUrl: <FaBattleNet />,
    },
    {
      name: "Company G",
      logoUrl: <FaSnapchatSquare color="yellow" />,
    },
    {
      name: "Company H",
      logoUrl: <FaHireAHelper />,
    },
    {
      name: "Company I",
      logoUrl: <FaImdb color="blue" />,
    },
    {
      name: "Company J",
      logoUrl: <FaFacebookSquare color="blue" />,
    },
  ];

  return (
    <div className=" verflow-hidden grid place-items-center gap-8 py-8 ">
      <div className="w-full text-center grid place-items-center p-4">
        <h2 className="w-fit text-center text-3xl font-bold mb-8">
          Our Sponsors
        </h2>
        <p className="md:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          nostrum eum! Odit ex ut vel?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dicta, doloremque.
        </p>
      </div>

      <div className="md:w-[1200px] w-full gap-[100px] relative">
        <Marquee className="absolute">
          {sponsers.map((sponser) => (
            <div className="w-[200px] px-8 text-[50px]" key={sponser.name}>
              {sponser.logoUrl}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SponsorsSection;
