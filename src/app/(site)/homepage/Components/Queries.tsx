import React from "react";
import { FaCloudscale, FaPenSquare, FaSync, FaUserAlt } from "react-icons/fa";
import Button from "../../../g_components/Button";
import Image from "next/image";

const Queries = () => {
  const queries = [
    {
      name: "Carefully Crafted",
      icon: <FaPenSquare />,
      des: "Meticulously designed to deliver a superior experience.",
    },
    {
      name: "User-Centric",
      icon: <FaUserAlt />,
      des: "Empowering with intuitive and interactive features.",
    },
    {
      name: "Seamless Sync",
      icon: <FaSync />,
      des: "Effortlessly stay in sync across all your devices.",
    },
    {
      name: "Interactive APIs",
      icon: <FaCloudscale />,
      des: "Explore a world of possibilities with our interactive APIs.",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center bg-sky-900 py-8 text-sky-100 -skew-y-3">
      <div className="laptop:w-[1024px] lg:w-[1000px] sm:px-6 lg:px-8 grid  gap-16  box-border p-8 skew-y-3">
        <div className="laptop:flex items-center justify-between box-border gap-8 ">
          <div className="h-full flex flex-col items-start justify-center gap-4 leading-[120%] ">
            <div className="grid items-start justify-center gap-4">
              <h3 className="font-bold">Traffic</h3>
              <h2 className="text-xl w-3/4 sm:text-3xl font-bold leading-tight text-white">
                Stage reporting with 50k queries
              </h2>
              <p className="laptop:w-[60ch]">
                Unlock deep insights and make informed decisions with our
                advanced reporting tools. Leverage the power of data to drive
                success and achieve your goals. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Architecto magnam nostrum enim
                quod maxime! Nemo similique optio veniam sunt ex. Lorem, ipsum
                dolor sit amet consectetur.
              </p>
            </div>

            <div className=" w-full grid laptop:grid-cols-2  items-center justify-between gap-8">
              {queries.map((query) => (
                <div
                  key={query.name}
                  className="grid  rounded-md bg-white text-black overflow-hidden gap-4">
                  <div className="flex items-center justify-between px-4 p-4">
                    <h2>{query.name}</h2>
                    <span className="text-[40px] "> {query.icon}</span>
                  </div>
                  <div className="bg-gray-200 p-4">{query.des}</div>
                </div>
              ))}
            </div>
            <Button
              variant={"default"}
              size={"default"}
              icon={true}>
              Learn More
            </Button>
            {/* <button className="flex gap-4 items-center bg-white px-4 py-2 font-bold rounded hover:shadow-lg"></button> */}
          </div>
          <div className="w-[800px] max-h-full box-border rounded laptop:flex hidden">
            <Image
              src={
                "https://voyager.postman.com/illustration/postman-toolbox-api-platform-illustration.svg"
              }
              width={500}
              height={500}
              className="box-border  rounded"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queries;
