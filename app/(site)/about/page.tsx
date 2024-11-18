import React from "react";
import Values from "../../../components/Landing_components/about/Values";
import Journey from "../../../components/Landing_components/about/Journey";
import OurTeam from "../../../components/Landing_components/about/team";
import Testimonials from "../../../components/Landing_components/about/Testimonial";
import Growth from "../../../components/Landing_components/about/Growth";

const page = () => {
  return (
    <>
      <div className="grid place-items-center">
        <Journey />

        <Growth />
        <OurTeam />
        <Values />
        {/* <Testimonials /> */}
      </div>
    </>
  );
};

export default page;
