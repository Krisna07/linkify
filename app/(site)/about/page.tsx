import React from "react";
import Values from "../../../components/Landing_components/about/Values";
import Growth from "../../../components/Landing_components/about/Growth";
import OurTeam from "../../../components/Landing_components/about/team";
import Testimonials from "../../../components/Landing_components/about/Testimonial";

export default function page() {
  return (
    <div className="w-full grid place-items-center gap-8 overflow-hidden text-white">
      <div className="w-full h-[500px] flex flex-col items-center gap-4 justify-center p-4">
        <div className="laptop:w-[600px] text-center grid gap-4">
          <h2 className="animate-text font-bold text-6xl  leading-[100%]  bg-bermuda ">
            Our Journey
          </h2>
          <p className="text-center font-semibold">
            A team of the peoples, we have successfully delieved the most
            satisfied services our customers. The user feedback tells it all.
          </p>
        </div>
      </div>

      <Values />
      <Growth />

      <OurTeam />
      <Testimonials />
    </div>
  );
}
