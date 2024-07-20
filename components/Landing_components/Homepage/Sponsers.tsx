"use client";

import {
  FaAmazon,
  FaAndroid,
  FaBattleNet,
  FaFacebookSquare,
  FaGoogle,
  FaHireAHelper,
  FaImdb,
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
      logoUrl: <FaGoogle color="orange" />,
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
  const width = `${window.innerWidth / sponsers.length}px`;
  console.log(width);
  return (
    <div className="w-full h-fit overflow-hidden grid place-items-center gap-4 py-16 bg-primary">
      <Marquee>
        {sponsers.map((sponser) => (
          <div
            style={{ width: `${width}` }}
            className={`min-w-[100px] text-[100px] transition-all`}
            key={sponser.name}
          >
            {sponser.logoUrl}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SponsorsSection;
