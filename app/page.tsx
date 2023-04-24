import React from "react";

import FeaturesSection from "./Landingpage/Components/features";
import HeroSection from "./Landingpage/Components/Hero";
import Queries from "./Landingpage/Components/Queries";
import SponsorsSection from "./Landingpage/Components/Sponsers";
import Usage from "./Landingpage/Components/Usage";

const page = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center gap-8 ">
        <HeroSection />
        <FeaturesSection />
        <SponsorsSection />
        <Usage />
        <Queries />
      </div>
    </div>
  );
};

export default page;
