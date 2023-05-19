import React from "react";
import {
  FaChevronRight,
  FaCloudscale,
  FaPenSquare,
  FaSync,
  FaUserAlt,
} from "react-icons/fa";
import Button from "./ui/Button";

const Queries = () => {
  return (
    <section className="w-full flex items-center justify-center bg-gray-200 py-8 -skew-y-3">
      <div className="md:w-[80%] sm:px-6 lg:px-8 grid  gap-16  box-border p-8 skew-y-3">
        <div className="md:flex items-center justify-between box-border gap-8 ">
          <div className="md:w-3/5 h-full flex flex-col items-start justify-center gap-8 ">
            <div className="grid items-start justify-center gap-4">
              <h3 className="font-bold">Traffic</h3>
              <h2 className="text-xl w-3/4 sm:text-3xl font-bold leading-tight text-gray-900 mb-8 text-gray-700">
                Stage reporting with 50k queries
              </h2>
              <p className="w-4/5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto magnam nostrum enim quod maxime! Nemo similique optio
                veniam sunt ex. Lorem, ipsum dolor sit amet consectetur
              </p>
            </div>

            <div className=" w-full grid md:grid-cols-2 items-center justify-between gap-8">
              <h2 className="font-[600] text-xl flex items-center gap-4  p-2">
                <FaPenSquare className="w-[50px] h-[50px] rounded-[50%] text-[50px] shadow-lg " />{" "}
                Carefully Desinged
              </h2>
              <h2 className="font-[600] text-xl flex items-center gap-4  p-2">
                <FaUserAlt className="w-[50px] h-[50px] rounded-[50%] text-[50px] shadow-lg text-red-500 " />{" "}
                User Interactive
              </h2>
              <h2 className="font-[600] text-xl flex items-center gap-4  p-2">
                <FaSync className="w-[50px] h-[50px] rounded-[50%] text-[50px] shadow-lg text-blue-500 " />{" "}
                Seemlesly sync
              </h2>
              <h2 className="font-[600] text-xl flex items-center gap-4  p-2">
                <FaCloudscale className="w-[50px] h-[50px] rounded-[50%] text-[50px] shadow-lg " />{" "}
                Interactive APIs
              </h2>
            </div>
            <Button variant={"default"} size={"default"}>
              Learn More <FaChevronRight />
            </Button>
            {/* <button className="flex gap-4 items-center bg-white px-4 py-2 font-bold rounded hover:shadow-lg"></button> */}
          </div>
          <div className="w-2/5 max-h-full box-border rounded md:flex hidden">
            <img
              src={
                "https://voyager.postman.com/illustration/postman-toolbox-api-platform-illustration.svg"
              }
              width={"100%"}
              className="box-border  rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Queries;
