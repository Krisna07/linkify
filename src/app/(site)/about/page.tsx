import React from "react";

import Growth from "./components/Growth";
import Journey from "./components/Journey";
import OurTeam from "./components/team";
import Testimonials from "./components/Testimonial";
import Values from "./components/Values";
export default function page() {
  return (
    <div className="w-full grid place-items-center gap-8 overflow-hidden">
      <div className="w-full h-[500px] flex flex-col items-center gap-4 justify-center ">
        <div className="laptop:w-[600px] text-center grid gap-4">
          <h2 className="animate-text font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-black to-red-600">
            Our Journey
          </h2>
          <p className="text-center font-semibold">
            A team of the peoples, we have successfully delieved the most
            satisfied services our customers. The user feedback tells it all.
          </p>
        </div>
      </div>
      <Journey />
      <Values />
      <Growth />

      <OurTeam />
      <Testimonials />
    </div>
  );
}
