import React, { ReactNode } from "react";

import Navbar from "../Landing_components/Navbar/Navbar";
import Footer from "../Landing_components/Footer/Footer";

interface LandingpageProps {
  children: React.ReactNode;
}

const Landingpage = ({ children }: LandingpageProps) => {
  return (
    <>
      <header className="w-full top-0 grid place-items-center shadow z-[999]   "></header>
      <nav className=" w-full grid place-items-center z-[999] fixed top-2 ">
        <Navbar />
      </nav>
      <main className="w-full relative oveflow-hidden pb-0 box-border">
        {children}
      </main>
      {/* <footer className="w-full h-fit grid place-items-center text-white ">
        <Footer />
      </footer> */}
    </>
  );
};

export default Landingpage;
