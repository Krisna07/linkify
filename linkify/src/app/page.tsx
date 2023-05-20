"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { FaAirbnb } from "react-icons/fa";

import FeaturesSection from "./Landingpage/Components/features";
import Footer from "./Landingpage/Components/Footer";
import HeroSection from "./Landingpage/Components/Hero";
import Herosection from "./Landingpage/Components/Herosection";
import Navbar from "./Landingpage/Components/Navbar";
import Newsletter from "./Landingpage/Components/Newsletter";
import PricingTable from "./Landingpage/Components/Pricing";
import Queries from "./Landingpage/Components/Queries";
import SponsorsSection from "./Landingpage/Components/Sponsers";
import Usage from "./Landingpage/Components/Usage";

const page = () => {
  const [navigationHeight, setNavigationHeight] = useState<string>("");
  console.log(navigationHeight);
  return (
    <div>
      <Navbar setNavigationHeight={setNavigationHeight} />
      <div
        className={`w-full flex flex-col items-center justify-center gap-8 relative top-[${navigationHeight}px]`}
      >
        <Herosection />
        <HeroSection />
        <FeaturesSection />
        <SponsorsSection />
        <Usage />
        <Queries />
        <PricingTable />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default page;
