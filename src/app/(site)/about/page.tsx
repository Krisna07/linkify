import React from "react";
import Growth from "./components/Growth";
import OurTeam from "./components/team";
import Testimonials from "./components/Testimonial";
import Values from "./components/Values";
export default function page() {
  return (
    <div className="w-full grid place-items-center gap-8 overflow-hidden text-white">
      <div className="w-full h-[500px] flex flex-col items-center gap-4 justify-center p-4">
        <div className="laptop:w-[600px] text-center grid gap-4">
          <h2 className="animate-text font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-black to-white">
            Our Journey
          </h2>
          <p className="text-center font-semibold">
            A team of the peoples, we have successfully delieved the most
            satisfied services our customers. The user feedback tells it all.
          </p>
        </div>
      </div>
      {/* <Journey /> */}
      <Values />
      <Growth />

      <OurTeam />
      {/* <Testimonials /> */}
    </div>
  );
}
