"use client";
import React, { useState } from "react";
import Button from "../../Global_components/Button";
import { motion } from "framer-motion";
import { princingTier } from "../pricings/page";
import { FaCheck } from "react-icons/fa6";
import { jersey } from "../../../fonts/fonts";

const PricingTable: React.FC = () => {
  const [monthly, setMonthly] = useState<boolean>(true);

  const fixedPrice = (price: number) => {
    return monthly ? price : Math.floor(price * 12 - price * 1.2);
  };

  const features = [
    "X5 project boards to share for free",
    "Collaborate with up to 2 people per project",
    "Access to community support",
    "Basic analytics included",
    "Export in all internet handles",
    "Basic integrations available",
    "Includes advertisements",
    "Standard security features",
  ];

  // const pricings: princingTier[] = [
  //   {
  //     tierName: "Free",
  //     des: "Unlimited links and a customizable Linktree to connect your community to everything you are.",
  //     price: fixedPrice(0),
  //     usersIncluded: 1,
  //     storage: "1 GB",
  //     features: {
  //       basic: true,
  //       advanced: false,
  //       premium: false,
  //     },
  //     prioritySupport: false,
  //     customization: false,
  //     freeTrial: true,
  //   },
  //   {
  //     tierName: "Strater",
  //     des: "More customization and control for creators ready to drive more traffic to and through their Linktree.",
  //     price: fixedPrice(9.99),
  //     usersIncluded: 1,
  //     storage: "10 GB",
  //     features: {
  //       basic: true,
  //       advanced: true,
  //       premium: false,
  //     },
  //     prioritySupport: false,
  //     customization: false,
  //     freeTrial: true,
  //   },
  //   {
  //     tierName: "Pro",
  //     price: fixedPrice(19.99),
  //     des: "Grow, learn about and own your following forever with a branded Linktree. ",

  //     usersIncluded: 5,
  //     storage: "50 GB",
  //     features: {
  //       basic: true,
  //       advanced: true,
  //       premium: true,
  //     },
  //     prioritySupport: true,
  //     customization: false,
  //     freeTrial: true,
  //   },
  //   {
  //     tierName: "Premium",
  //     price: fixedPrice(29.99),
  //     des: "The VIP support plan for businesses ready to monetize and sell on a larger scale.      ",
  //     usersIncluded: 10,
  //     storage: "100 GB",
  //     features: {
  //       basic: true,
  //       advanced: true,
  //       premium: true,
  //     },
  //     prioritySupport: true,
  //     customization: true,
  //     freeTrial: true,
  //   },
  // ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      className="w-full flex    justify-center   gap-8 py-12 my-16 overflow-hidden text-white px-4"
      id="pricing"
    >
      <div className="laptop:w-[1000px] w-full grid gap-4">
        <h2 className="text-5xl">
          Get Started with our{" "}
          <span className="underline font-serif text-bermuda">free</span> plan
        </h2>
        <p className="text-lg">
          We include all the essential functions for trail in our{" "}
          <span className="underline">free</span> plan for you to try{" "}
        </p>
        <div className="w-full grid tablet:grid-cols-2 gap-8 ">
          <div className=" grid laptop:grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 1) * 0.1 }}
                className="flex place-items-center gap-2"
                viewport={{ once: true }}
                key={feature}
              >
                <div className="text-sm bg-bermuda rounded-full p-1 text-dark">
                  <FaCheck />
                </div>
                {feature}
              </motion.div>
            ))}
          </div>
          <div className="bg-white text-dark p-4 grid gap-4 relative group laptop:hidden">
            <div className="text-4xl font-serif"> Standard Free</div>
            <span className="text-lg">
              Create up to 10 boards for single project
            </span>
            <div className="p-4 shadow-bs flex justify-between">
              Boards
              <span>10</span>
            </div>
            <div>
              <div className="flex gap-2">
                {" "}
                <span className="text-3xl underline font-mono">Free</span>
                <span className="text-sm self-end">for 5 projects</span>
              </div>
              <span>
                Then, starts at{" "}
                <span className={`font-semibold ${jersey.className}`}>
                  A$9 .99 /month*
                </span>{" "}
              </span>
            </div>
            <Button
              variant={"default"}
              size="lg"
              children="Sign Up Free"
              className="w-full justify-center rounded-full bg-bermuda text-dark"
            />
            <div className="w-full h-full bg-bermuda opacity-0 absolute transition-all ease-in-out duration-300 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-100 -z-10"></div>
          </div>
        </div>
      </div>
      <div className="bg-white text-dark p-4 hidden gap-4 relative group laptop:grid animate-slidein500">
        <div className="text-4xl font-serif"> Standard Free</div>
        <span className="text-lg">
          Create up to 10 boards for single project
        </span>
        <div className="p-4 shadow-bs flex justify-between">
          Boards
          <span>10</span>
        </div>
        <div>
          <div className="flex gap-2">
            {" "}
            <span className="text-3xl underline font-mono">Free</span>
            <span className="text-sm self-end">for 5 projects</span>
          </div>
          <span>
            Then, starts at{" "}
            <span className={`font-semibold ${jersey.className}`}>
              A$9 .99 /month*
            </span>{" "}
          </span>
        </div>
        <Button
          variant={"default"}
          size="lg"
          children="Sign Up Free"
          className="w-full justify-center rounded-full bg-bermuda text-dark"
        />
        <div className="w-full h-full bg-bermuda opacity-0 absolute transition-all ease-in-out duration-300 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-100 -z-10"></div>
      </div>
    </motion.div>
  );
};

export default PricingTable;

{
  /* <div className="laptop:w-[1200px]  grid place-items-center text-center">
<h2 className="text-4xl font-bold mb-4">Pricing</h2>
<p className="laptop:w-1/2">
  Choose the plan that best suits your needs and start building your
  project links today.
</p>
</div>
<div className="w-full laptop:w-[1024px] p-4  grid-cols-1 mb-8 gap-8 space-x-3 relative left-[-400]   ">
<div className="w-full grid tablet:grid-cols-2 laptop:grid-cols-4 gap-[20px]">
  {pricings.map((item) => (
    <div
      key={item.price}
      className="p-4 grid gap-4 hover:shadow-bs bg-bermuda hover:bg-bermuda/50 text-dark transition-all hover:translate-x-1 hover:-translate-y-1"
    >
      <h3 className="font-semibold text-dark/50">{item.tierName}</h3>
      <h2 className="text-xl font-bold">
        ${item.price}/{monthly ? "month" : "annually"}
      </h2>
      <div>{item.des}</div>
      <Button
        children="Join"
        variant={"default"}
        size={"sm"}
        icon={false}
        className="w-full grid"
      />
    </div>
  ))}
</div>
</div> */
}
