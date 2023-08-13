import React from "react";
import Herosection from "./Components/herosection";
import FeaturesSection from "./Components/features";
import Queries from "./Components/Queries";
import Usage from "./Components/Usage";

interface HomepageProps {}

export default function Homepage({}: HomepageProps) {
  return (
    <div className="w-full grid place-items-center">
      <Herosection />
      <FeaturesSection />
      <Usage />
      <Queries />
    </div>
  );
}
