import React from "react";
// import Homepage from "./homepage/Homepage";
import Hero from "../../components/Landing_components/Homepage/Hero";
import FeaturesSection from "../../components/Landing_components/Homepage/Features/features";
// import SponsorsSection from "../../components/Landing_components/Homepage/Sponsers";
import Queries from "../../components/Landing_components/Homepage/Queries";
import PricingTable from "../../components/Landing_components/Homepage/Pricing";

export default function page() {
  return (
    <>
      <Hero />

      <div className="w-full bg-gradient-to-b from-primary to-accent text-silver">
        <FeaturesSection />
      </div>
      <div className="w-full bg-accent text-white" id="discover">
        <Queries />
      </div>
      <div className="w-full bg-accent text-white" id="#pricing ">
        <PricingTable />
      </div>
    </>
  );
}
