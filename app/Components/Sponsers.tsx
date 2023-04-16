"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import marquee from "marquee";
import {
  FaAmazon,
  FaAndroid,
  FaBattleNet,
  FaCcStripe,
  FaFacebookSquare,
  FaGoogle,
  FaHireAHelper,
  FaImdb,
  FaNode,
  FaSlack,
  FaSnapchatSquare,
  FaStripe,
  FaStripeS,
} from "react-icons/fa";
import { BsSlack } from "react-icons/bs";
import Marquee from "react-fast-marquee";

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
    <div className=" w-[100%] overflow-hidden grid gap-8">
      <div className="w-full text-center grid place-items-center">
        <h2 className=" text-center text-3xl font-bold mb-8">Our Sponsors</h2>
        <p className="w-[60%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          sint eaque incidunt, dolor non a beatae corporis rem laborum nisi sed
          officia soluta vel nulla, aliquam deserunt repudiandae nam in facilis
          maiores enim numquam eligendi. Nobis fugit, mollitia eligendi tenetur
          fuga debitis cum corrupti labore necessitatibus corporis eum saepe
          qui.
        </p>
      </div>
      <div className="marquee-container overflow-hidden mx-auto box-border">
        <div className="w-full  flex items-center justify-between">
          <Marquee gradient={false} pauseOnClick={true} speed={100}>
            {sponsers.map((sponsor) => (
              <div className="w-[10%] sponsor text-[50px]" key={sponsor.name}>
                {sponsor.logoUrl}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
