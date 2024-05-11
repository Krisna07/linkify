"use client";
import React from "react";
import Herosection from "./Components/herosection";
import FeaturesSection from "./Components/features";
import Queries from "./Components/Queries";
import PricingTable from "./Components/Pricing";
// import { Canvas } from "@react-three/fiber";
// import { Stars } from "@react-three/drei";
// import Appdes from "./Components/Hero";
import Usage from "./Components/Usage";
import { motion } from "framer-motion";

interface HomepageProps {}

export default function Homepage({}: HomepageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="w-full grid place-items-center gap-8"
    >
      <Herosection />

      <FeaturesSection />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 2,
            staggerChildren: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <Queries />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 2,
            staggerChildren: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <Usage />
      </motion.div>
      <PricingTable />
      {/* <div className="w-full h-screen fixed inset-0 -z-1">
        <Canvas>
          <Stars radius={50} count={200} factor={4} fade speed={2} />
        </Canvas>
      </div> */}
    </motion.div>
  );
}
