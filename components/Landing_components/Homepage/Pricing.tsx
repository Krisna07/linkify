"use client";
import React, { useState } from "react";

import { princingTier } from "../../../app/(site)/pricings/page";
import Button from "../../Global_components/Button";
import { motion } from "framer-motion";

const PricingTable: React.FC = () => {
  const [monthly, setMonthly] = useState<boolean>(true);

  const fixedPrice = (price: number) => {
    return monthly ? price : Math.floor(price * 12 - price * 1.2);
  };

  const pricings: princingTier[] = [
    {
      tierName: "Free",
      des: "Unlimited links and a customizable Linktree to connect your community to everything you are.",
      price: fixedPrice(0),
      usersIncluded: 1,
      storage: "1 GB",
      features: {
        basic: true,
        advanced: false,
        premium: false,
      },
      prioritySupport: false,
      customization: false,
      freeTrial: true,
    },
    {
      tierName: "Strater",
      des: "More customization and control for creators ready to drive more traffic to and through their Linktree.",
      price: fixedPrice(9.99),
      usersIncluded: 1,
      storage: "10 GB",
      features: {
        basic: true,
        advanced: true,
        premium: false,
      },
      prioritySupport: false,
      customization: false,
      freeTrial: true,
    },
    {
      tierName: "Pro",
      price: fixedPrice(19.99),
      des: "Grow, learn about and own your following forever with a branded Linktree. ",

      usersIncluded: 5,
      storage: "50 GB",
      features: {
        basic: true,
        advanced: true,
        premium: true,
      },
      prioritySupport: true,
      customization: false,
      freeTrial: true,
    },
    {
      tierName: "Premium",
      price: fixedPrice(29.99),
      des: "The VIP support plan for businesses ready to monetize and sell on a larger scale.      ",
      usersIncluded: 10,
      storage: "100 GB",
      features: {
        basic: true,
        advanced: true,
        premium: true,
      },
      prioritySupport: true,
      customization: true,
      freeTrial: true,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: "0.5", y: 50 }}
      whileInView={{
        y: 0,
        opacity: "1",
      }}
      viewport={{ once: false }}
      className="w-full   grid place-items-center  gap-8 py-12 overflow-hidden text-white px-4"
      id="pricing"
    >
      <div className="laptop:w-[1200px]  grid place-items-center text-center">
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
      </div>
    </motion.div>
  );
};

export default PricingTable;
