import React from "react";
import FeaturesSection from "../Components/features";
import HeroSection from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Queries from "../Components/Queries";
import SponsorsSection from "../Components/Sponsers";
import Usage from "../Components/Usage";
import LandingPageLayout from "../Components/layouts/LandingpageLayout";
import RootLayout from "../Layout";

export default function LandingPage() {
  return (
    <RootLayout isLandingPage>
      <div className="w-full flex flex-col items-center justify-center gap-8 ">
        <HeroSection />
        <FeaturesSection />
        <SponsorsSection />
        <Usage />
        <Queries />
      </div>
    </RootLayout>
  );
}
