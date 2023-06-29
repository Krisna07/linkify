import React from "react";
import Button from "../Landingpage/Components/ui/Button";

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
        <div className="w-[1000px] grid grid-cols-2 gap-[20px ] p-[40px] place-items-center">
          <div className="shadow-bs h-[200px] w-1/2  grid gap-4">
            <div className="w-full p-4 grid">
              {" "}
              <h3 className="font-semibold text-gray-600">Standard</h3>
              <h2 className="text-xl font-bold">$9.99/Month</h2>
              <Button
                children="Start"
                variant={"default"}
                icon={true}
                className="h-fit"
              />
            </div>
          </div>
          <div className="shadow-bs h-[200px]   box-border grid gap-4">
            <div className="p-4 grid">
              {" "}
              <h3 className="font-semibold text-gray-600">Standard</h3>
              <h2 className="text-xl font-bold">$9.99/Month</h2>
              <Button
                children="Start"
                variant={"default"}
                icon={true}
                className="h-fit"
              />
            </div>
          </div>{" "}
          <div className="shadow-bs h-[200px]  box-border grid gap-4">
            <div className="p-4 grid">
              {" "}
              <h3 className="font-semibold text-gray-600">Standard</h3>
              <h2 className="text-xl font-bold">$9.99/Month</h2>
              <Button
                children="Start"
                variant={"default"}
                icon={true}
                className="h-fit"
              />
            </div>
          </div>{" "}
          <div className="shadow-bs h-[200px]  box-border grid gap-4">
            <div className="p-4 grid">
              {" "}
              <h3 className="font-semibold text-gray-600">Standard</h3>
              <h2 className="text-xl font-bold">$9.99/Month</h2>
              <Button
                children="Start"
                variant={"default"}
                icon={true}
                className="h-fit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
