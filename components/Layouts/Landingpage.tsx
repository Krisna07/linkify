"use client";
import React, { useEffect } from "react";

import Navbar from "../Landing_components/Navbar/Navbar";

interface LandingpageProps {
  children: React.ReactNode;
}

const Landingpage = ({ children }: LandingpageProps) => {
  return (
    <div className="w-full h-full z-10 grid place-items-center">
      <Navbar />
      <main className="w-full  oveflow-hidden pb-0 box-border">{children}</main>
    </div>
  );
};

export default Landingpage;
