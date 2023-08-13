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

  return (
    <div className="w-full overflow-hidden grid place-items-center gap-4 py-8  ">
      <div className="w-full text-center grid place-items-center gap-4 font-[500]">
        <h2 className="w-fit text-center text-xl  ">Sponsors</h2>
      </div>
      <div className="w-full flex justify-between items-center gap-4   ">
        {sponsers.map((sponser) => (
          <div
            className=" text-[50px] hover:scale-[1.2] transition-all"
            key={sponser.name}>
            {sponser.logoUrl}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
