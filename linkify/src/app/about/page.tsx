import React from "react";
import Journey from "./components/Journey";
export default function page() {
  return (
    <div className="w-full grid place-items-center gap-8">
      <div className="w-full h-[500px] flex flex-col items-center gap-4 justify-center bg-gradient-to-r from-[#445aa4] to-[#32eab4]">
        {" "}
        <h2 className="animate-text font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-black to-red-600">
          Our Journey
        </h2>
        <p className="md:w-4/6 text-center font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
          assumenda cumque libero cupiditate, animi tempora ipsa commodi
          nesciunt tempore.
        </p>
      </div>
      <Journey />
    </div>
  );
}
