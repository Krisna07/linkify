import React from "react";
import Journey from "./components/Journey";
import OurTeam from "./components/team";
import Testimonials from "./components/Testimonial";
export default function page() {
  return (
    <div className="w-full grid place-items-center gap-8 bg-slate-300">
      <div className="w-full h-[500px] flex flex-col items-center gap-4 justify-center bg-gradient-to-t from-slate-300 to-slate-500">
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
      <OurTeam />
      <Testimonials />
    </div>
  );
}
