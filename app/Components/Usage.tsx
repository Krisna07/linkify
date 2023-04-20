"use client";
import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FaEye,
  FaFacebookSquare,
  FaInstagramSquare,
  FaKey,
  FaLink,
  FaPlusSquare,
  FaShare,
  FaTwitterSquare,
} from "react-icons/fa";
import Demo from "../demo/page";

const addLinks = (
  <div>
    <Demo />
  </div>
);
const share = (
  <div className="grid place-items-center gap-4">
    <h2 className="font-[600]"> Share to any platform</h2>
    <div className="flex items-center gap-2">
      <FaFacebookSquare color="blue" />
      <FaTwitterSquare color="blue" />
      <FaInstagramSquare color="purple" />
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
      title: (
        <h3 className="flex items-center gap-4">
          <FaKey /> Get your key
        </h3>
      ),
      des: (
        <>
          Here is your link key : <br />
          <span className="font-[600]"> $66756hhyqkey****</span>
        </>
      ),
    },
    {
      title: (
        <h3 className="flex items-center gap-4">
          <FaLink className="" /> Add Links
        </h3>
      ),
      des: addLinks,
    },
    {
      title: (
        <h3 className="flex items-center gap-4">
          <FaShare /> Share
        </h3>
      ),
      des: share,
    },
    {
      title: (
        <h3 className="flex items-center gap-4">
          <FaEye /> View Insights
        </h3>
      ),
      des: insigth,
    },
  ];
  const [des, setDes] = useState(usages[0].des);
  const [index, setIndex] = useState(0);

  console.log(index);
  return (
    <div className="w-full flex items-center justify-center  py-8">
      <div className="w-full md:w-[80%] lg:container-flex lg:flex grid items-center sm:px-6 lg:px-8 gap-4  box-border p-4">
        <div className="lg:w-1/2 w-full  flex flex-col p-2  box-border gap-8  ">
          <h2 className="text-3xl font-[700] ">Usuage</h2>
          <div className="flex items-center gap-4">
            <div className="w-1/2 h-fit flex-col flex  font-[600] relative">
              <span className="w-[2px] absolute h-full bg-black -left-4 flex items-center justify-center">
                <span
                  className={`w-[4px] h-1/${
                    usages.length ? usages.length : 4
                  } bg-[red] absolute  transition-all transition-ease`}
                  style={{
                    top: `${(index / 4) * 100}%`,
                  }}
                ></span>
              </span>
              {usages.map((usuage, x) => (
                <span
                  className={
                    index == usages.indexOf(usuage)
                      ? "  px-4 py-2 my-2 rounded bg-gray-500 text-white shadow-[4px_4px_0px_0px_red]"
                      : "bg-gray-500/25  px-4 py-2 my-2 rounded hover:bg-gray-500 hover:text-white hover:shadow-[4px_4px_0px_0px_red]"
                  }
                  key={usages.indexOf(usuage)}
                  onClick={() => {
                    setDes(usuage.des);
                    setIndex(usages.indexOf(usuage));
                  }}
                >
                  {usuage.title}
                </span>
              ))}
            </div>
            <div className="w-1/2 h-[200px]  bg-gray-100 hover:shadow-lg border-l-2 border-red-300 box-border text-center flex flex-col  rounded realtive  relative  overflow-hidden  ">
              {usages.map((usuage) => (
                <div
                  className={`w-full min-h-[200px] bg-gray-200  flex flex-col top-0 items-center justify-center rounded p-4 relative transition-all 9 `}
                  style={{
                    top: `-${index * 200}px`,
                  }}
                  key={usages.indexOf(usuage)}
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
        <div className="lg:w-1/2 w-full  flex items-center box-border gap-4  p-2">
          <div className=" w-3/5 grid gap-4">
            <h3 className="font-[600] text-lg">Lorem ipsum</h3>
            <h2 className="font-[700] text-3xl ">
              Lorem ipsum dolor sit amet.
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi quia porro fugit nobis dolorum itaque?
            </p>
          </div>
          <div className="w-2/5  bg-gray-100 rounded text-center hover:shadow-lg">
            <img
              src="https://img.freepik.com/free-vector/image-viewer-concept-illustration_114360-4532.jpg?w=826&t=st=1681968634~exp=1681969234~hmac=28c31796a43307c4988128c10cb50b02137fb2e4b2ef1996b2e5dbed22cf4f54"
              alt=""
              width={"100%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usage;
