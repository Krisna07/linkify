import Link from "next/link";
import react from "react";
import FeaturesSection from "./Components/features";

import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Queries from "./Components/Queries";
import SponsorsSection from "./Components/Sponsers";
import Usage from "./Components/Usage";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 ">
      <Hero />
      <FeaturesSection />
      <SponsorsSection />
      <Usage />
      <Queries />
    </div>
  );
};

export default HomePage;
