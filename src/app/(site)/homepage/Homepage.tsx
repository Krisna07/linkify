import React from "react";
import Herosection from "./Components/herosection";

interface HomepageProps {}

export default function Homepage({}: HomepageProps) {
  return (
    <div className="w-full grid place-items-center">
      <Herosection />
    </div>
  );
}
