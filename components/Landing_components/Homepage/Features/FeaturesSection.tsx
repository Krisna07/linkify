"use client";
import ScaleableFeature from "./ScaleableFeature";
import CentralizeFeature from "./CentralizeFeature";
import CollaborateFeature from "./CollaborateFeature";
import SupportFeature from "./SupportFeature";

const Features = () => {
  return (
    <div
      className="desktop:w-[1800px] w-full grid laptop:grid-cols-4 tablet:grid-cols-2 place-items-center gap-8 relative divide-none px-4"
      id="features"
    >
      <ScaleableFeature />
      <CentralizeFeature />
      <CollaborateFeature />
      <SupportFeature />
    </div>
  );
};

export default Features;
