"use client";
import React from "react";
import Herosection from "./Components/herosection";
import FeaturesSection from "./Components/features";
import Queries from "./Components/Queries";
import PricingTable from "./Components/Pricing";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Appdes from "./Components/Hero";
import Usage from "./Components/Usage";

interface HomepageProps {}

export default function Homepage({}: HomepageProps) {
  return (
    <div className="w-full grid place-items-center">
      <Herosection />

      <FeaturesSection />
      <Queries />
      <Usage />
      <PricingTable />
      {/* <div className="w-full h-screen fixed inset-0 -z-1">
        <Canvas>
          <Stars radius={50} count={200} factor={4} fade speed={2} />
        </Canvas>
      </div> */}
    </div>
  );
}
