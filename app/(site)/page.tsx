import React from "react";
import Homepage from "./homepage/Homepage";
import Hero from "../../components/Landing_components/Homepage/Hero";
import FeaturesSection from "../../components/Landing_components/Homepage/Features/features";
import SponsorsSection from "../../components/Landing_components/Homepage/Sponsers";

export default function page() {
  return (
    <>
      <Hero />
      <SponsorsSection />
      <div className="w-full bg-gradient-to-b from-primary to-accent text-silver">
        <FeaturesSection />
      </div>
    </>
  );
}
