"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  number: number;
  size?: number;
}

// Helper function to format each digit to always be two characters
const formatDigit = (num: number) => {
  const value = num.toString();
  if (value.length == 1) {
    return `0${value}`;
  }
  return value;
};

const Count = ({ num, size }: { num: string; size?: number }) => {
  const digits = Array.from(Array(10).keys());
  const top = `-${size ? size * parseInt(num) : 30 * parseInt(num)}px`;

  return (
    <motion.div
      initial={{ translateY: 0 }}
      whileInView={{ translateY: top }}
      transition={{
        type: "bounce",
        damping: 10,
        stiffness: 100,
      }}
      viewport={{ once: true }}
      className={`text-white grid leading-[100%] relative duration-[0.8s] font-[700]`}
    >
      {digits.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </motion.div>
  );
};

const Counter = ({ number, size }: CounterProps) => {
  const [counter, setCounter] = useState<string[]>([]);

  useEffect(() => {
    if (number !== undefined) {
      // Format number and split into digits
      const formattedNumber = formatDigit(number);
      setCounter(formattedNumber.split(""));
    }
  }, [number]);

  return (
    <div
      style={{ fontSize: `${size ? size : 30}px` }}
      className={`w-fit h-fit bg-none text-white`}
    >
      <div
        style={{ height: `${size ? size : 30}px` }}
        className={`relative flex items-start justify-center overflow-hidden`}
      >
        {counter.map((num, index) => (
          <Count key={index} num={num} size={size} />
        ))}
      </div>
    </div>
  );
};

export default Counter;
