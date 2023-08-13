import React from "react";
import FeaturesSection from "./Components/features";
import Appdes from "./Components/Hero";
import Herosection from "./Components/Herosection";
import Newsletter from "./Components/Newsletter";
import PricingTable from "./Components/Pricing";
import Queries from "../(site)/homepage/Components/Queries";
import SponsorsSection from "./Components/Sponsers";
import Usage from "../(site)/homepage/Components/Usage";

const Landingpage = () => {
  return (
    <div className="grid gap-8 overflow-hidden">
      <Appdes />
      <Herosection />

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
