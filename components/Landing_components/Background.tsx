"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnyPixelFormat } from "three";

const Background = () => {
  const bgRef = useRef(null);
  const [points, setPoints] = useState(0);

  const getRect = (obj: any) => {
    return obj.getBoundingClientRect();
  };

  const calculatePoints = () => {
    const rect = getRect(bgRef.current);
    const Widthnumbers = rect.width / 50;
    const heightNum = rect.height / 50;
    setPoints(Math.round(Widthnumbers * heightNum));
  };

  useEffect(() => {
    calculatePoints();
    window.addEventListener("resize", calculatePoints);

    return () => {
      window.removeEventListener("resize", calculatePoints);
    };
  }, []);

  return (
    <div
      ref={bgRef}
      className="absolute w-full h-full grid place-items-center "
    >
      <div className=" w-full h-full z-20  flex  gap-[50px] flex-wrap overflow-hidden  box-border">
        {Array.from({ length: points }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-gradient-to-b from-primary to-accent animate-pulse duration-[3s]"
          >
            {/* <div className="w-2 h-2 rounded-full bg-gradient-to-b from-primary to-accent animate-ping absolute"></div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Background;
