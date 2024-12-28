"use client";
import React, { useState } from "react";
import Button from "../../../../components/Global_components/Button";
import { motion } from "framer-motion";

const page = () => {
  const [projectName, setProjectName] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const handleCreateNew = () => {
    console.log("Creating new project:", projectName, "Type:", selectedType);
  };

  return (
    <div className="w-full laptop:w-[1000px] grid gap-8 box-border">
      <div className="px-4 tablet:flex grid gap-8 items-center justify-between border-b border-accent pb-8">
        <div className="">
          <h2 className="text-[2rem] font-semibold leading-12 ">
            Lets create something great together !!
          </h2>
          <p>To share your idea, lets get started with the projects</p>
        </div>
        <div className="w-fit p-1 relative grid place-items-center">
          <div className="absolute w-full h-full bg-gradient-radial from-bermuda via-accent to-primary   blur animate-text"></div>
          <Button
            children="Collaborate With Pro trial"
            variant={"default"}
            size={"default"}
            className="rounded-lg border-accent hover:shadow-bs"
          />
        </div>
      </div>
      <form className="grid gap-2">
        <div className="mx-4 p-1 flex border border-accent rounded-lg  active:shadow-bs focus:shadow-bs box-border overflow-hidden relative z-20">
          <input
            type="text"
            className="w-full px-2 py-1 bg-dark border-none outline-none"
            value={projectName}
            onClick={() => setShowOptions(true)}
            onBlur={() => setShowOptions(false)}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <div>
            <Button
              children="create new"
              variant={"default"}
              size={"default"}
              className="shadow-bs border-silver/25 text-silver/75 hover:border-silver/75"
              onClick={handleCreateNew}
            />
          </div>
        </div>
        {showOptions && (
          <div className="flex px-4 gap-2 relative z-10">
            <motion.label
              initial={{
                y: -20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.1,
              }}
              className="flex gap-2 items-center bg-accent rounded-full px-2 leading-[150%] text-sm "
            >
              <input
                type="radio"
                className="text-sm "
                value={"Educational"}
                checked={selectedType === "Educational"}
                onChange={() => setSelectedType("Educational")}
              />
              <span>Educational</span>
            </motion.label>
            <motion.label
              initial={{
                y: -20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.2,
              }}
              className="flex gap-2 items-center bg-accent rounded-full px-2 leading-[150%] text-sm "
            >
              <input
                type="radio"
                className="text-sm "
                value={"Personal"}
                checked={selectedType === "Personal"}
                onChange={() => setSelectedType("Personal")}
              />
              <span>Personal</span>
            </motion.label>
            <motion.label
              initial={{
                y: -20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.3,
              }}
              className="flex gap-2 items-center bg-accent rounded-full px-2 leading-[150%] text-sm "
            >
              <input
                type="radio"
                className="text-sm "
                value={"Professional"}
                checked={selectedType === "Professional"}
                onChange={() => setSelectedType("Professional")}
              />
              <span>Professional</span>
            </motion.label>
            <motion.label
              initial={{
                y: -20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.4,
              }}
              className="flex gap-2 items-center bg-accent rounded-full px-2 leading-[150%] text-sm "
            >
              <input
                type="radio"
                className="text-sm "
                value={"Other"}
                checked={selectedType === "Other"}
                onChange={() => setSelectedType("Other")}
              />
              <span>Other</span>
            </motion.label>
          </div>
        )}
      </form>
    </div>
  );
};

export default page;
