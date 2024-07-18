"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  number: number;
}
const Count = ({ num }: any) => {
  const digits = Array.from(Array(10).keys());
  const top = `-${30 * parseInt(num)}px`;

  return (
    <motion.div
      initial={{ translateY: 0 }}
      whileInView={{ translateY: top }}
      transition={{
        type: "bounce",
        damping: 10,
        stiffness: 100,
      }}
      viewport={{ once: false }}
      className={`text-white grid leading-[100%] relative duration-[0.8s]  font-[700] `}
    >
      {digits.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </motion.div>
  );
};

const Counter = ({ number }: CounterProps) => {
  const [counter, setCounter] = useState<string[]>([]);

  useEffect(() => {
    if (number !== undefined) {
      setCounter(number.toString().split(""));
    }
  }, [number]);

  return (
    <div className="w-fit h-fit bg-none text-[30px] text-white">
      <div className="h-[30px] relative flex items-start justify-center overflow-hidden">
        {counter.map(
          (num, index) => counter.length > 0 && <Count key={index} num={num} />
        )}
      </div>
    </div>
  );
};

export default Counter;
