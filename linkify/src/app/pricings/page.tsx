import React from "react";
import Button from "../Landingpage/Components/ui/Button";
import { FaCoins } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="w-full  grid place-items-center">
      <div className="w-full bg-gray-300 grid place-items-center h-[400px] p-[40px]">
        <div className="lg:w-[1000px] grid place-items-center gap-4 text-center">
          <h2 className="font-bold text-[32px]  text-center uppercase">
            Lorem ipsum dolor sit amet{" "}
            <span className="border-b border-[4] border-red-400">
              consectetur
            </span>{" "}
            aut
          </h2>
          <p className="w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            neque! Aperiam ullam pariatur iure reprehenderit similique officiis
            inventore sequi dolores.
          </p>
        </div>
      </div>
      <div className="w-full  grid place-items-center ">
        <div className="w-[1000px] grid grid-cols-2 gap-4 box-border p-8 ">
          <div className="shadow-bs w-full flex items-start box-border py-4 px-8 gap-4">
            <div className="w-full p-4 grid gap-4">
              <h3 className="font-semibold text-gray-600">Standard</h3>
              <h2 className="text-xl font-bold">$9.99/Month</h2>
              <Button
                children="Start"
                variant={"default"}
                icon={true}
                className="h-fit"
              />
            </div>
            <div className="p-2 bg-gray-600 rounded-lg relative  ">
              <FaCoins size={40} color="white" className="blur absolute animate-pulse"/>
              <FaCoins size={40} color="white" className="relative"/>
            </div>
          </div>
          <div className="shadow-bs w-full  flex items-start py-4 px-8 gap-4">
            <div className="w-full p-4 grid gap-4">
              <h3 className="font-semibold text-gray-600">Standard</h3>
              <h2 className="text-xl font-bold">$9.99/Month</h2>
              <Button
                children="Start"
                variant={"default"}
                icon={true}
                className="h-fit"
              />
            </div>
            <div className="p-2 bg-gray-600 rounded-lg relative  ">
              <FaCoins size={40} color="white" className="blur absolute animate-pulse"/>
              <FaCoins size={40} color="white" className="relative"/>
            </div>
          </div>
            <div className="shadow-bs w-full  flex items-start py-4 px-8 gap-4">
            <div className="w-full p-4 grid gap-4">
              <h3 className="font-semibold text-gray-600">Standard</h3>
              <h2 className="text-xl font-bold">$9.99/Month</h2>
              <Button
                children="Start"
                variant={"default"}
                icon={true}
                className="h-fit"
              />
            </div>
            <div className="p-2 bg-gray-600 rounded-lg relative  ">
              <FaCoins size={40} color="white" className="blur absolute animate-pulse"/>
              <FaCoins size={40} color="white" className="relative"/>
            </div>
          </div>
             <div className="shadow-bs w-full  flex items-start py-4 px-8 gap-4">
            <div className="w-full p-4 grid gap-4">
              <h3 className="font-semibold text-gray-600">Standard</h3>
              <h2 className="text-xl font-bold">$9.99/Month</h2>
              <Button
                children="Start"
                variant={"default"}
                icon={true}
                className="h-fit"
              />
            </div>
            <div className="p-2 bg-gray-600 rounded-lg relative  ">
              <FaCoins size={40} color="white" className="blur absolute animate-pulse"/>
              <FaCoins size={40} color="white" className="relative"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

// git config --global user.email "krisnachhetri07@gmail.com"
// git config --global user.name "Krisna07"