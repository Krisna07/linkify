"use client";
import React, { useEffect, useState } from "react";
import { princingTier } from "./page";

import Button from "../../../components/Global_components/Button";
import TierAnalysis from "./Tieranalysis";
import Link from "next/link";

const TierTab = ({
  tier,
  onSelect,
  selected,
}: {
  tier: princingTier;
  onSelect: any;
  selected?: princingTier[];
}) => {
  const [select, setSelect] = useState<boolean>(false);

  useEffect(() => {
    if (
      selected &&
      selected.find((price) => tier.tierName === price.tierName)
    ) {
      setSelect(true);
    } else {
      setSelect(false);
    }
  }, [selected, tier]);

  return (
    <div
      className={`w-fit flex items-center gap-2 px-4 py-1 text-black font-bold rounded-full ${
        select ? "bg-sky-200 " : "bg-gray-200"
      }`}
      onClick={() => (!select ? onSelect() : "")}
    >
      {tier.tierName}
      <svg height="20" width="20">
        <circle
          cx="10"
          cy="10"
          r="5"
          stroke="black"
          strokeWidth="2"
          fill={select ? "red" : "white"}
        />
      </svg>
    </div>
  );
};

const Compare = ({ compareTier }: { compareTier: princingTier[] }) => {
  const [selectedTiers, setSelectedTiers] = useState<princingTier[]>([]);

  const handleTierSelect = (tier: princingTier) => {
    if (selectedTiers.length == 2) {
      setSelectedTiers((prevSelectedTiers) => [prevSelectedTiers[1], tier]);
    } else {
      setSelectedTiers((prevSelectedTiers) => [...prevSelectedTiers, tier]);
    }
  };
  const compareByIndex = (a: princingTier, b: princingTier) => {
    return compareTier.indexOf(a) - compareTier.indexOf(b);
  };

  return (
    <div className="laptop:w-[1000px] w-full  px-4 py-4 grid gap-4">
      <div className="w-full  text-lg font-[600]  py-2">Comparison </div>
      <div className="grid gap-4">
        <div>Pick plans</div>
        <div className="grid grid-cols-4">
          {compareTier.map((tier, index) => (
            <TierTab
              tier={tier}
              key={index}
              onSelect={() => handleTierSelect(tier)}
              selected={selectedTiers}
            />
          ))}
        </div>
      </div>
      <div className="w-full grid gap-4 ">
        {selectedTiers.length > 0 && (
          <div className="grid tablet:grid-cols-2 gap-4">
            {/* {compareTier.indexOf(selectedTiers[0]) <
            compareTier.indexOf(selectedTiers[1]) ? (
              <>
                <TierAnalysis tier={selectedTiers[0]} />
                <TierAnalysis tier={selectedTiers[1]} />
              </>
            ) : (
              <>
                <TierAnalysis tier={selectedTiers[1]} />
                <TierAnalysis tier={selectedTiers[0]} />
              </>
            )} */}

            {selectedTiers.sort(compareByIndex).map((tier) => (
              <TierAnalysis tier={tier} key={tier.tierName} />
            ))}
          </div>
        )}
        <Link href={"/user_auth/signup"}>
          <Button
            children="Get started for free"
            variant={"primary"}
            size={"sm"}
            className="bg-gray-200"
          />
        </Link>
      </div>
    </div>
  );
};

export default Compare;
