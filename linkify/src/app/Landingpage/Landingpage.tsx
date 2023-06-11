import React from "react";
import FeaturesSection from "./Components/features";
import Appdes from "./Components/Hero";
import Herosection from "./Components/Herosection";
import Newsletter from "./Components/Newsletter";
import PricingTable from "./Components/Pricing";
import Queries from "./Components/Queries";
import SponsorsSection from "./Components/Sponsers";
import Usage from "./Components/Usage";

const Landingpage = () => {
  return (
    <div>
      <Herosection />
      <Appdes />
      <FeaturesSection />
      {/* <SponsorsSection /> */}
      <Usage />
      <Queries />
      <PricingTable />
      <Newsletter />
    </div>
  );
};

export default Landingpage;
