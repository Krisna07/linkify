import React from "react";
import { princingTier } from "./page";
import Button from "@/app/g_components/Button";

const TierAnalysis = ({ tier }: { tier: princingTier }) => {
  return (
    <div className="tier-analysis bg-white/50 p-4 rounded-lg grid gap-4 shadow-bs text-black">
      <h2 className="text-xl font-semibold">{tier.tierName} Tier Analysis</h2>
      <div className="analysis-section mt-4">
        <h3 className="text-lg font-semibold">Pricing</h3>
        <p className="text-gray-700">
          ${tier.price} per {tier.select ? "month" : "annually"}
        </p>
      </div>
      <div className="analysis-section mt-4">
        <h3 className="text-lg font-semibold">Features</h3>
        <ul className="list-disc pl-4">
          <li
            className={tier.features.basic ? "text-green-500" : "text-red-500"}
          >
            Basic Features: {tier.features.basic ? "Included" : "Not Included"}
          </li>
          <li
            className={
              tier.features.advanced ? "text-green-500" : "text-red-500"
            }
          >
            Advanced Features:{" "}
            {tier.features.advanced ? "Included" : "Not Included"}
          </li>
          <li
            className={
              tier.features.premium ? "text-green-500" : "text-red-500"
            }
          >
            Premium Features:
            {tier.features.premium ? "Included" : "Not Included"}
          </li>
        </ul>
      </div>
      <div className="analysis-section mt-4">
        <h3 className="text-lg font-semibold">Storage</h3>
        <p className="text-gray-700">{tier.storage}</p>
      </div>
      <div className="analysis-section mt-4">
        <h3 className="text-lg font-semibold">Users Included</h3>
        <p className="text-gray-700">{tier.usersIncluded} users</p>
      </div>
      <div className="analysis-section mt-4">
        <h3 className="text-lg font-semibold">Priority Support</h3>
        <p className={tier.prioritySupport ? "text-green-500" : "text-red-500"}>
          {tier.prioritySupport ? "Available" : "Not Available"}
        </p>
      </div>
      <div className="analysis-section mt-4">
        <h3 className="text-lg font-semibold">Customization</h3>
        <p className={tier.customization ? "text-green-500" : "text-red-500"}>
          {tier.customization ? "Available" : "Not Available"}
        </p>
      </div>
      <div className="analysis-section mt-4">
        <h3 className="text-lg font-semibold">Free Trial</h3>
        <p className={tier.freeTrial ? "text-green-500" : "text-red-500"}>
          {tier.freeTrial ? "Available" : "Not Available"}
        </p>
      </div>
      <Button children="Choose" variant={"default"} size={"sm"} />
    </div>
  );
};

export default TierAnalysis;
