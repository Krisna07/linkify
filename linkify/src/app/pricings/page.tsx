"use client";
import React, { useState, useEffect } from "react";
import Button from "../Landingpage/Components/ui/Button";
import { FaCheck, FaCoins } from "react-icons/fa";
import { X } from "lucide-react";

const Pricing = () => {
  const [monthly, setMonthly] = useState<boolean>(true);

  const fixedPrice = (price: number) => {
    return monthly ? price : Math.floor(price * 12 - price * 1.2);
  };

  const pricingTiers = [
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
    <div className="w-full  grid place-items-center">
      <div className="w-full bg-gray-300 grid place-items-center h-[400px] p-[40px]">
        <div className="lg:w-[1000px] grid place-items-center gap-4 text-center">
          <h2 className="font-bold text-[32px]  text-center uppercase">
            Lorem ipsum dolor sit amet{" "}
            <span className="border-b border-[4] border-red-400">
              consectetur
            </span>
            aut
          </h2>
          <p className="w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            neque! Aperiam ullam pariatur iure reprehenderit similique officiis
            inventore sequi dolores.
          </p>
        </div>
      </div>
      <div className="w-full  grid place-items-center py-8 px-4 gap-4 ">
        <div className="md:w-[1000px] grid gap-4 box-border">
          <div className="w-full flex items-center justify-between">
            <div>
              <h2 className="text-[32px] font-bold text-left ">
                Pick the perfect plan
              </h2>
              <p>
                Start with our free plan. No credit card needed.Cancel Anytime
              </p>
            </div>
            <div className="flex  bg-gray-400 p-2 rounded-full box-border">
              <span
                className={`px-4 py-2 ${
                  monthly ? "bg-white" : ""
                } rounded-full`}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </span>
              <span
                className={`px-4 py-2 ${
                  !monthly ? "bg-white" : ""
                } rounded-full`}
                onClick={() => setMonthly(false)}
              >
                Annually
              </span>
            </div>
          </div>
          <div className="w-full grid md:grid-cols-4 gap-[20px]">
            {pricingTiers.map((tier) => (
              <div key={tier.price} className="p-4 grid gap-4 shadow-bs">
                <h3 className="font-semibold text-gray-600">{tier.tierName}</h3>
                <h2 className="text-xl font-bold">
                  ${tier.price}/{monthly ? "month" : "annually"}
                </h2>
                <div>{tier.des}</div>
                <Button
                  children="Join"
                  variant={"default"}
                  icon={false}
                  className="w-full grid"
                />
              </div>
            ))}
          </div>
        </div>
        {/* create the new mini table compinent for the pricing tags  */}
        {/* 

        name :Tire name 
        price : tier price 
        des :Tier description
        btn :Tier Btn 
        */}
        {/* 
        add the tooggle button for the annual and montly subscription  */}
        <h2 className="text-[32px] font-bold text-left ">Features</h2>

        <div className="lg:w-[1000px] box-border md:p-8  ">
          <table className="w-full grid  table-auto">
            <thead className="w-full  text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="grid grid-cols-5">
                <th scope="col" className="px-6 py-4"></th>
                {pricingTiers.map((tier) => (
                  <th key={tier.tierName} scope="col" className="px-6 py-4">
                    {tier.tierName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="grid gap-4 p-4 bg-gray-200">
              <tr className="grid grid-cols-5 place-items-center gap-4">
                <th className="w-full text-left">Price</th>
                {pricingTiers.map((tier) => (
                  <td key={tier.price}>${tier.price}/month</td>
                ))}
              </tr>
              <tr className="grid grid-cols-5 place-items-center gap-4">
                <th className="w-full text-left">Storage</th>
                {pricingTiers.map((tier) => (
                  <td key={tier.storage} scope="col">
                    {tier.storage}
                  </td>
                ))}
              </tr>
              <tr className="grid grid-cols-5 place-items-center gap-4">
                <th className="w-full text-left">Users</th>
                {pricingTiers.map((tier) => (
                  <td key={tier.usersIncluded} scope="col">
                    {tier.usersIncluded}
                  </td>
                ))}
              </tr>
              <tr className="grid grid-cols-5 place-items-center gap-4">
                <th className="w-full text-left">Basic Features</th>
                {pricingTiers.map((tier) => (
                  <td key={tier.usersIncluded} scope="col">
                    {tier.features.basic ? (
                      <FaCheck color="skyblue" />
                    ) : (
                      <X color="red" />
                    )}
                  </td>
                ))}
              </tr>
              <tr className="grid grid-cols-5 place-items-center gap-4">
                <th className="w-full text-left">Advance Features</th>
                {pricingTiers.map((tier) => (
                  <td key={tier.usersIncluded} scope="col">
                    {tier.features.advanced ? (
                      <FaCheck color="skyblue" />
                    ) : (
                      <X color="red" />
                    )}
                  </td>
                ))}
              </tr>
              <tr className="grid grid-cols-5 place-items-center gap-4">
                <th className="w-full text-left">Premium Features</th>
                {pricingTiers.map((tier) => (
                  <td key={tier.usersIncluded} scope="col">
                    {tier.features.premium ? (
                      <FaCheck color="skyblue" />
                    ) : (
                      <X color="red" />
                    )}
                  </td>
                ))}
              </tr>
              <tr className="grid grid-cols-5 place-items-center gap-4">
                <th className="w-full text-left">Priority Support</th>
                {pricingTiers.map((tier) => (
                  <td key={tier.usersIncluded} scope="col">
                    {tier.prioritySupport ? (
                      <FaCheck color="skyblue" />
                    ) : (
                      <X color="red" />
                    )}
                  </td>
                ))}
              </tr>
              <tr className="grid grid-cols-5 place-items-center gap-4">
                <th className="w-full text-left">Customization</th>
                {pricingTiers.map((tier) => (
                  <td key={tier.usersIncluded} scope="col">
                    {tier.customization ? (
                      <FaCheck color="skyblue" />
                    ) : (
                      <X color="red" />
                    )}
                  </td>
                ))}
              </tr>
              <tr className="grid grid-cols-5 place-items-center gap-4">
                <th className="w-full text-left">Free Trial</th>
                {pricingTiers.map((tier) => (
                  <td key={tier.usersIncluded} scope="col">
                    {tier.freeTrial ? (
                      <FaCheck color="skyblue" />
                    ) : (
                      <X color="red" />
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h2 className="text-[32px] font-bold "> </h2>
    </div>
  );
};

export default Pricing;

// git config --global user.email "krisnachhetri07@gmail.com"
// git config --global user.name "Krisna07"
