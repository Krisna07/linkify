"use client";
import React, { useEffect, useRef, useState } from "react";

import Navbar from "../Landing_components/Navbar/Navbar";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import Footer from "../Landing_components/Footer/Footer";
import { inter, jersey, roboto } from "../../fonts/fonts";
import { Inter } from "next/font/google";

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
      <motion.div ref={ref} className="w-full z-[1000] sticky top-0 bg-dark">
        <Navbar />
      </motion.div>
      <main
        className={`${inter.className} w-full  oveflow-hidden pb-0 box-border `}
      >
        {children}
      </main>
      {!state && (
        <Link
          href="#nav"
          className="fixed bottom-16 right-4 bg-dark text-silver rounded-lg p-4 hover:shadow-bs transition-all "
        >
          <FaArrowUp />
        </Link>
      )}

      <Footer />
    </div>
  );
};

export default Landingpage;
