"use client";
import React, { useState } from "react";
import FeaturesSection from "./Landingpage/Components/features";
import Footer from "./Landingpage/Components/Footer";
import HeroSection from "./Landingpage/Components/Hero";
import Herosection from "./Landingpage/Components/Herosection";
import Newsletter from "./Landingpage/Components/Newsletter";
import PricingTable from "./Landingpage/Components/Pricing";
import Queries from "./Landingpage/Components/Queries";
import SponsorsSection from "./Landingpage/Components/Sponsers";
import Usage from "./Landingpage/Components/Usage";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 overflow-hidden">
      <Herosection />
      <HeroSection />
      <FeaturesSection />
      <SponsorsSection />
      <Usage />
      <Queries />
      <PricingTable />
      <Newsletter />
    </div>
  );
};

export default page;
