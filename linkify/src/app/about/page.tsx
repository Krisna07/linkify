import React from "react";
import SponsorsSection from "../Landingpage/Components/Sponsers";
import Growth from "./components/Growth";
import Journey from "./components/Journey";
import OurTeam from "./components/team";
import Testimonials from "./components/Testimonial";
import Values from "./components/Values";
export default function page() {
  return (
    <div className="w-full grid place-items-center gap-8">
      <div className="w-full h-[500px] flex flex-col items-center gap-4 justify-center bg-yellow-200">
        {" "}
        <div className="md:w-[600px] text-center grid gap-4">
          {" "}
          <h2 className="animate-text font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-black to-red-600">
            Our Journey
          </h2>
          <p className="text-center font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
            assumenda cumque libero cupiditate, animi tempora ipsa commodi
            nesciunt tempore.
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
