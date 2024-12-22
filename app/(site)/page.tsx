import React from "react";
import Hero from "../../components/Landing_components/Homepage/Hero";
import Queries from "../../components/Landing_components/Homepage/Queries";
import PricingTable from "../../components/Landing_components/Homepage/Pricing";
import Usage from "../../components/Landing_components/Homepage/Usage";
import Features from "../../components/Landing_components/Homepage/Features/FeaturesSection";

export default function page() {
  return (
    <>
      <Hero />
      <div className="w-full  place-items-center  text-silver px-2">
        <Features />
      </div>
      <div
        className="w-full place-items-center text-white my-32"
        id="#discover"
      >
        <Queries />
      </div>
      <div className="w-full  text-white " id="#pricing ">
        <PricingTable />
      </div>
      <div className="w-full place-items-center  text-white " id="#pricing ">
        <Usage />
      </div>
    </>
  );
}
