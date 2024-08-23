"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { jersey } from "../../../../fonts/fonts";

interface CounterProps {
  number: number;
  size?: number;
}

// Helper function to format each digit to always be two characters
const formatDigit = (num: number) => {
  const value = num.toString().padStart(2, "0");

  return value;
};

const Count = ({ num, size }: { num: string; size: number }) => {
  const digits = Array.from(Array(10).keys());
  const top = `-${size * parseInt(num)}px`;

  return (
    <motion.div
      animate={{ transform: `translateY(${top})` }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        // duration: 0.1,
      }}
      initial={{ y: 0 }}
      className={`${jersey.className} text-white  grid  relative gap-[20px] font-[700]   tabular-nums `}
    >
      {digits.map((item) => (
        <span key={item} className=" leading-[100%]  ">
          {item}
        </span>
      ))}
    </motion.div>
  );
};

const Counter = ({ number, size }: CounterProps) => {
  const [counter, setCounter] = useState<string[]>([]);
  const digitSize = size ? size + 20 : 30 + 20;

  useEffect(() => {
    if (number !== undefined) {
      setCounter(Math.abs(number).toString().padStart(2, "0").split(""));
    }
  }, [number]);

  return (
    <div
      style={{ fontSize: `${size ? size : 30}px` }}
      className={`w-fit h-fit  `}
    >
      <div
        style={{ height: `${size ? size : 30}px` }}
        className={`relative flex items-start justify-center  overflow-hidden  `}
      >
        {counter.map((num, index) => (
          <Count key={index} num={num} size={digitSize} />
        ))}
      </div>
    </div>
  );
};

export default Counter;
