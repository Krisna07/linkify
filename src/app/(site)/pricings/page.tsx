"use client";
import React, { useState, useEffect } from "react";
import Button from "../../g_components/Button";
import { FaCheck, FaCoins } from "react-icons/fa";

import { BsX } from "react-icons/bs";
import Compare from "./Compare";

export interface princingTier {
  select?: any;
  tierName: string;
  des: string;
  price: number;
  usersIncluded: number;
  storage: string;
  features: {
    basic: boolean;
    advanced: boolean;
    premium: boolean;
  };
  prioritySupport: boolean;
  customization: boolean;
  freeTrial: boolean;
}

const Pricing = () => {
  const [monthly, setMonthly] = useState<boolean>(true);

  const fixedPrice = (price: number) => {
    return monthly ? price : Math.floor(price * 12 - price * 1.2);
  };

  const pricingTiers: princingTier[] = [
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
    <div className="w-full  grid place-items-center text-white/75">
      <div className="w-full grid place-items-center py-32 p-4 bg-gradient-to-tr from-green-100/25 to-gray-900  ">
        <div className="laptop:w-[1000px] grid place-items-center gap-8 text-center py-16 text-white/50 ">
          <h2 className="font-bold text-4xl text-center uppercase  ">
            Get Started For Free
          </h2>
          <p className="w-[80%] text-lg  font-[600]">
            Browse our services and pricing for it. Choose the annual or the
            monthly recurring plan. Got stuck use our compare table and select
            the plan that suits your need.
          </p>
          <Button
            children="Start"
            variant={"primary"}
            size={"default"}
            icon={false}
          />
        </div>
      </div>
      <div className="w-full grid place-items-center gap-8 py-8 p-4">
        <div className="grid place-items-center">
          <h2 className="text-[32px] font-bold ">Pricing Plans </h2>
          <p>Start With Our Free Plan. No Credit Card Needed.Cancel Anytime</p>
        </div>
        <div className="laptop:w-[1024px] grid gap-4 box-border">
          <div className="w-full grid gap-4 tablet:grid-cols-2 items-center justify-between">
            <div>
              <h2 className="text-[32px] font-bold text-left ">
                Pick the perfect plan
              </h2>
              <p>
                Start with our free plan. No credit card needed.Cancel Anytime
              </p>
            </div>
            <div className="cursor-pointer  flex w-fit bg-[#DD5746] p-2 relative rounded-full box-border overflow-hidden shadow-bs text-black/50 font-semibold text-sm">
              <span
                className={`px-4 py-2 relative z-20 rounded-full`}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </span>
              <span
                className={`px-4 py-2  relative z-20 rounded-full`}
                onClick={() => setMonthly(false)}
              >
                Annually
              </span>
              <div
                className={`w-1/2 h-[80%] bg-white/50 absolute top-[10%] rounded-full z-10 transition-all ${
                  monthly ? "left-[3%]" : "left-[47%]"
                } `}
              ></div>
            </div>
          </div>
          <div className="w-full grid laptop:grid-cols-4 gap-[20px]">
            {pricingTiers.map((tier) => (
              <div key={tier.price} className="p-4 grid gap-4 shadow-bs">
                <h3 className="font-semibold text-gray-600">{tier.tierName}</h3>
                <h2 className="text-xl font-bold">
                  ${tier.price}/{monthly ? "month" : "annually"}
                </h2>
                <div>{tier.des}</div>
                <Button
                  children="Join"
                  variant={"primary"}
                  size={"sm"}
                  icon={false}
                  className="w-full grid"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="laptop:w-[1024px] w-full box-border laptop:py-8 grid gap-4 p-4 overflow-hidden ">
        <h2 className="text-[32px] w-full font-bold text-left ">Features</h2>
        <div className="overflow-x-scroll scrollbar-hide ">
          <table className="w-[1020px] grid grid-col-4 box-border rounded-lg overflow-x-scroll  scrollbar-hide">
            <thead className="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 box-border ">
              <tr className="grid grid-cols-5">
                <th scope="col" className="px-4 py-4 "></th>
                {pricingTiers.map((tier, index) => (
                  <th key={index} scope="col" className="px-6 py-4">
                    {tier.tierName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="w-full grid gap-4 px-4 p-2 bg-gray-200 box-border  text-gray-800">
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
                {pricingTiers.map((tier, index) => (
                  <td key={index} scope="col">
                    {tier.usersIncluded}
                  </td>
                ))}
              </tr>
              <tr className="grid grid-cols-5 place-items-center gap-4">
                <th className="w-full text-left">Basic Features</th>
                {pricingTiers.map((tier, index) => (
                  <td key={index} scope="col">
                    {tier.features.basic ? (
                      <FaCheck color="skyblue" />
                    ) : (
                      <BsX color="red" />
                    )}
                  </td>
                ))}
              </tr>
              <tr className="grid grid-cols-5 place-items-center gap-4">
                <th className="w-full text-left">Advance Features</th>
                {pricingTiers.map((tier, index) => (
                  <td key={index} scope="col">
                    {tier.features.advanced ? (
                      <FaCheck color="skyblue" />
                    ) : (
                      <BsX color="red" />
                    )}
                  </td>
                ))}
              </tr>
              <tr className="grid grid-cols-5 place-items-center gap-4">
                <th className="w-full text-left">Premium Features</th>
                {pricingTiers.map((tier, index) => (
                  <td key={index} scope="col">
                    {tier.features.premium ? (
                      <FaCheck color="skyblue" />
                    ) : (
                      <BsX color="red" />
                    )}
                  </td>
                ))}
              </tr>
              <tr className="grid grid-cols-5 place-items-center gap-4">
                <th className="w-full text-left">Priority Support</th>
                {pricingTiers.map((tier, index) => (
                  <td key={index} scope="col">
                    {tier.prioritySupport ? (
                      <FaCheck color="skyblue" />
                    ) : (
                      <BsX color="red" />
                    )}
                  </td>
                ))}
              </tr>
              <tr className="grid grid-cols-5 place-items-center gap-4">
                <th className="w-full text-left">Customization</th>
                {pricingTiers.map((tier, index) => (
                  <td key={index} scope="col">
                    {tier.customization ? (
                      <FaCheck color="skyblue" />
                    ) : (
                      <BsX color="red" />
                    )}
                  </td>
                ))}
              </tr>
              <tr className="grid grid-cols-5 place-items-center gap-4">
                <th className="w-full text-left">Free Trial</th>
                {pricingTiers.map((tier, index) => (
                  <td key={index} scope="col">
                    {tier.freeTrial ? (
                      <FaCheck color="skyblue" />
                    ) : (
                      <BsX color="red" />
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Compare compareTier={pricingTiers} />
    </div>
  );
};

export default Pricing;
