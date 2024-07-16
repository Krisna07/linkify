"use client";
import React from "react";
import Herosection from "./Components/herosection";
import FeaturesSection from "./Components/features";
import Queries from "./Components/Queries";
import PricingTable from "./Components/Pricing";

import Usage from "./Components/Usage";
import { motion } from "framer-motion";

interface HomepageProps {}

export default function Homepage({}: HomepageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        type: "string",
        delay: 1,
      }}
      className="w-full grid place-items-center gap-8 "
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
        className="min-h-screen"
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
        id="discover"
      >
        <Usage />
      </motion.div>
      <div id="pricing">
        {" "}
        <PricingTable />{" "}
      </div>
    </motion.div>
  );
}
