"use client";
import React, { useEffect, useRef, useState } from "react";

import Navbar from "../Landing_components/Navbar/Navbar";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import Footer from "../Landing_components/Footer/Footer";
import { inter } from "../../fonts/fonts";

interface LandingpageProps {
  children: React.ReactNode;
}

const Landingpage = ({ children }: LandingpageProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [state, setState] = useState(false);
  useEffect(() => {
    if (isInView) {
      setState(true);
    } else {
      setState(false);
    }
  }, [isInView]);

  return (
    <div className="w-full h-full z-10 grid place-items-center ">
      <motion.div className="w-full z-[900] sticky top-0 bg-dark" id="nav">
        <Navbar />
      </motion.div>
      <main
        className={`${inter.className} w-full  oveflow-hidden pb-0 box-border relative `}
      >
        <div ref={ref} className="absolute"></div>
        {children}
      </main>
      {!state && (
        <Link
          href="#nav"
          className="fixed bottom-16 right-4 bg-silver/25 text-silver rounded-lg p-4 hover:shadow-bs transition-all z-[1000] "
        >
          <FaArrowUp />
        </Link>
      )}

      <Footer />
    </div>
  );
};

export default Landingpage;
