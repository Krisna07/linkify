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

const SponsorsSection = () => {
  const sponsers = [
    {
      name: "Company A",
      logoUrl: <FaStripe color="blue" />,
    },
    {
      name: "Company B",
      logoUrl: (
        <FaGoogle
          color="orange"
          size={"40px"}
        />
      ),
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
    <div className="w-full overflow-hidden grid place-items-center gap-4 py-8 ">
      <div className="w-full text-center grid place-items-center gap-4 font-[500]">
        <h2 className="w-fit text-center text-xl  ">Sponsors</h2>
      </div>
      <div className="laptop:w-[1200px] flex w-full justify-between relative">
        {sponsers.map((sponser) => (
          <div
            className=" text-[50px] hover:scale-[1.2]"
            key={sponser.name}>
            {sponser.logoUrl}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
