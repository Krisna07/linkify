import React from "react";
import Button from "./ui/Button";

export default function Herosection() {
  return (
    <div className="md:w-full animate-text h-[600px] lg:px-8 p-4 bg-white grid place-items-center gap-4 bg-gradient-to-t from-[#076585] to-[#fff]">
      <div className="w-fit grid place-items-center gap-4">
        <h2 className="animate-text  text-6xl font-extrabold text-transparent leading-relaxed  bg-clip-text bg-gradient-to-r from-black to-red-600">
          A place for your links
        </h2>
        <p className="w-[50%] text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          maiores perferendis dignissimos quod facere odit quo accusantium
          provident neque quia deserunt at, nulla tenetur explicabo labore, hic
          corporis saepe corrupti dicta consequuntur? Iste soluta eveniet animi
        </p>
        <Button children={"Start"} variant={"default"} icon={true} />
      </div>
    </div>
  );
}
