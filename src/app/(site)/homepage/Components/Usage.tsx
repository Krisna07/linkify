"use client";
import Button from "@/app/g_components/Button";
import Link from "next/link";
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

const Usage = () => {
  const addLinks = <div>{/* <Demo /> */}</div>;
  const Share = () => (
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
  const Insight = () => (
    <div>
      <h2 className="font-semibold ">Your insights</h2>
      Daily visits:2002
    </div>
  );
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
      des: <Share />,
    },
    {
      title: (
        <h3 className="flex items-center gap-4">
          <FaEye /> View Insights
        </h3>
      ),
      des: <Insight />,
    },
  ];
  const [des, setDes] = useState(usages[0].des);
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full flex items-center justify-center py-16">
      <div className="w-full laptop:w-[1024px]  laptop:container-flex laptop:flex grid items-center sm:px-6 laptop:px-8 gap-4  box-border p-4">
        <div className="laptop:w-1/2 w-full  flex flex-col p-2  box-border gap-8  ">
          <h2 className="text-3xl font-[700] ">Usuage</h2>
          <div className="laptop:flex grid items-center gap-4">
            <div className="laptop:w-1/2 w-full h-fit flex-col flex  font-[600] relative">
              <span className="w-[2px] absolute h-full bg-black -left-4 flex items-center justify-center">
                <span
                  className={`w-[4px] h-1/4 bg-sky-900 absolute  transition-all transition-ease`}
                  style={{
                    top: `${index ? (index / 4) * 100 : 0}%`,
                  }}></span>
              </span>
              {usages.map((usuage, x) => (
                <span
                  className={
                    index === usages.indexOf(usuage)
                      ? " px-4 py-2 my-2 rounded bg-sky-500 text-white shadow-[4px_4px_0px_0px_blue]"
                      : "bg-sky-500/25  px-4 py-2 my-2 rounded hover:bg-sky-500 hover:text-white hover:shadow-[4px_4px_0px_0px_blue]"
                  }
                  key={usages.indexOf(usuage)}
                  onClick={() => {
                    setDes(usuage.des);
                    setIndex(usages.indexOf(usuage));
                  }}>
                  {usuage.title}
                </span>
              ))}
            </div>
            <div className="laptop-w-1/2 h-[200px] bg-sky-100 hover:shadow-lg border-l-2 border-sky-900 box-border text-center flex flex-col rounded  relative overflow-hidden">
              {usages.map((usuage) => (
                <div
                  className={`w-full min-h-[200px]  flex flex-col top-0 items-center justify-center rounded p-4 relative transition-all overflow-hidden `}
                  style={{
                    top: `-${index * 200}px`,
                  }}
                  key={usages.indexOf(usuage)}
                  onClick={() => {
                    setDes(usuage.des);
                    setIndex(usages.indexOf(usuage));
                  }}>
                  {usuage.des}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="laptop:w-1/2 w-full  laptop:flex items-center box-border gap-4  p-2">
          <div className=" laptop:w-3/5 w-full grid gap-4 leading-[120%]">
            <div>
              <h3 className="font-[600] text-lg">Discover</h3>
              <h2 className="font-[700] text-2xl ">
                Connect and Share with Ease
              </h2>
              <p className="text-sm">
                Seamlessly share your favorite links with friends and followers.
                Our platform lets you stay connected and engaged, bringing
                people closer through shared content and discussions.
              </p>
            </div>
            <Link href={"/marketplace"}>
              {" "}
              <Button
                children="Learn more"
                variant={"default"}
                size={"sm"}
                icon={true}
              />
            </Link>
          </div>
          <div className="laptop:w-2/5  bg-gray-100 rounded text-center hover:shadow-lg">
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
