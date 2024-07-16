import React from "react";
import { princingTier } from "./page";
import { FaCheck, FaCoins } from "react-icons/fa";

import { BsX } from "react-icons/bs";

const Table = ({ pricingTiers }: { pricingTiers: princingTier[] }) => {
  return (
    <div className="table-container">
      <table className="w-[1020px] grid grid-col-4 box-border rounded-lg overflow-x-scroll scrollbar-hide">
        <thead className="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 box-border ">
          <tr className="grid grid-cols-5">
            <th scope="col" className="px-4 py-4 sticky left-0 text-left  z-10">
              Features
            </th>
            {pricingTiers.map((tier, index) => (
              <th key={index} scope="col" className="px-6 py-4">
                {tier.tierName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="w-full grid gap-4 px-4 p-2 bg-gray-200 box-border text-gray-800">
          <tr className="grid grid-cols-5 place-items-center gap-4 ">
            <th className="w-full text-left sticky left-0  z-10">Price</th>
            {pricingTiers.map((tier) => (
              <td key={tier.price}>${tier.price}/month</td>
            ))}
          </tr>
          <tr className="grid grid-cols-5 place-items-center gap-4">
            <th className="w-full text-left sticky left-0  z-10">Storage</th>
            {pricingTiers.map((tier) => (
              <td key={tier.storage} scope="col">
                {tier.storage}
              </td>
            ))}
          </tr>
          <tr className="grid grid-cols-5 place-items-center gap-4">
            <th className="w-full text-left sticky left-0  z-10">Users</th>
            {pricingTiers.map((tier, index) => (
              <td key={index} scope="col">
                {tier.usersIncluded}
              </td>
            ))}
          </tr>
          <tr className="grid grid-cols-5 place-items-center gap-4">
            <th className="w-full text-left sticky left-0  z-10">
              Basic Features
            </th>
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
            <th className="w-full text-left sticky left-0  z-10">
              Advance Features
            </th>
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
            <th className="w-full text-left sticky left-0  z-10">
              Premium Features
            </th>
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
            <th className="w-full text-left sticky left-0  z-10">
              Priority Support
            </th>
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
            <th className="w-full text-left sticky left-0  z-10">
              Customization
            </th>
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
            <th className="w-full text-left sticky left-0  z-10">Free Trial</th>
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
  );
};

export default Table;
