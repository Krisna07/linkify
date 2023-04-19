"use client";
import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPlusSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const addLinks = <div>Add Link Section</div>;
const share = (
  <div className="grid place-items-center gap-4">
    <h2 className="font-[600]"> Share to any platform</h2>
    <div className="flex items-center gap-2">
      <FaFacebookSquare />
      <FaTwitterSquare />
      <FaInstagramSquare />
      <FaPlusSquare />
    </div>
  </div>
);
const insigth = (
  <div>
    <h2>Your insights</h2>
    Daily visits:{Math.floor((Math.random() + 1) * 10)}
  </div>
);
const Usage = () => {
  const usages = [
    {
      title: "Get your key",
      des: (
        <>
          Here is your link key : <br />
          <span className="font-[600]"> $66756hhyqkey****</span>
        </>
      ),
    },
    {
      title: "Add links",
      des: addLinks,
    },
    {
      title: "Share",
      des: share,
    },
    {
      title: "View Insight",
      des: insigth,
    },
  ];
  const [des, setDes] = useState(usages[0].des);
  const [index, setIndex] = useState(0);

  console.log(index);
  return (
    <div className="w-full">
      <div className="container box-borde py-16 lg:flex flex-row grid place-items-center gap-8">
        \<h2 className="text-3xl font-[700] ">Usuage</h2>
        <div className="lg:w-1/2 h-full flex gap-8 box-border ">
          <div className="flex items-center gap-4">
            <div className="w-1/2 h-fit flex-col flex  font-[600] relative">
              <span className="w-[2px] absolute h-full bg-black -left-4 flex items-center justify-center">
                <span
                  className={`w-[4px] h-1/${usages.length} bg-red-800 absolute  transition-all transition-ease`}
                  style={{ top: `${(index / 4) * 100}%` }}
                ></span>
              </span>
              {usages.map((usuage) => (
                <span
                  className="bg-gray-500/25  px-4 py-2 my-2 rounded hover:bg-gray-500 "
                  key={usuage.title}
                  onClick={() => {
                    setDes(usuage.des);
                    setIndex(usages.indexOf(usuage));
                  }}
                >
                  {usuage.title}
                </span>
              ))}
            </div>
            <div className="w-1/2 h-[200px]  bg-gray-100 hover:shadow-lg border-l-2 border-red-300 box-border text-center flex flex-col  rounded realtive  relative  overflow-hidden ">
              {usages.map((usuage) => (
                <div
                  className={`w-full min-h-[200px] bg-gray-200  flex flex-col top-0 items-center justify-center rounded p-4 relative transition-all 9 `}
                  style={{
                    top: `-${index * 200}px`,
                  }}
                  key={usuage.title}
                  onClick={() => {
                    setDes(usuage.des);
                    setIndex(usages.indexOf(usuage));
                  }}
                >
                  {usuage.des}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 h-[fit-content] flex items-center box-border gap-4">
          <div className="grid gap-4">
            <h3 className="font-[600] text-lg">Lorem ipsum</h3>
            <h2 className="font-[700] text-3xl ">
              Lorem ipsum dolor sit amet.
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi quia porro fugit nobis dolorum itaque?
            </p>
          </div>
          <div className="w-1/2 h-48 bg-gray-100 rounded text-center hover:shadow-lg">
            Image goes here <br />
            200X200
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usage;
