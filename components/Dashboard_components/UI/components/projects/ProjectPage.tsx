"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { boardProps } from "../../../utils/Interfaces";
import Button from "../../../../Global_components/Button";
import Image from "next/image";
import { once } from "events";
import { FaMagnifyingGlass, FaUpDown } from "react-icons/fa6";
import { RiIncreaseDecreaseLine } from "react-icons/ri";
import { BiChevronUp } from "react-icons/bi";

interface Project {
  name: string;
  type: string;
  boards: boardProps[];
}

const ProjectsPage = () => {
  const [projectName, setProjectName] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [projects, setProjects] = useState<Project[]>([]);

  const handleCreateNew = (e: FormEvent) => {
    e.preventDefault();
    if (projectName && selectedType) {
      const newProject: Project = {
        name: projectName,
        type: selectedType,
        boards: [],
      };
      setProjects((prev) => [...prev, newProject]);
      console.log(projects);
    } else {
      console.log("No data to add");
    }
  };

  return (
    <div className="w-full laptop:w-[1000px] grid gap-8 box-border">
      <div className="px-4 tablet:flex grid gap-8 items-center justify-between border-b border-accent pb-8">
        <div>
          <h2 className="text-[2rem] font-semibold leading-12">
            Let's create something great together!!
          </h2>
          <p>To share your idea, let's get started with the projects</p>
        </div>
        <div className="w-fit p-1 relative grid place-items-center">
          <div className="absolute w-full h-full bg-gradient-radial from-bermuda via-accent to-primary blur animate-text"></div>
          <Button
            children="Collaborate With Pro trial"
            variant={"default"}
            size={"default"}
            className="rounded-lg border-accent hover:shadow-bs"
          />
        </div>
      </div>
      <form className="grid gap-2 relative" onSubmit={handleCreateNew}>
        <div
          className={`mx-4 p-1 flex border border-accent rounded-lg   box-border overflow-hidden relative z-20 ${
            showOptions && "shadow-bs"
          } transition-all ease-in-out duration-300`}
        >
          <input
            type="text"
            // name="projectName"
            className="w-full px-2 py-1 bg-dark border-none outline-none"
            value={projectName}
            onFocus={() => setShowOptions(true)}
            onBlur={() => !projectName && setShowOptions(false)}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <Button
            children="Create New"
            variant={"default"}
            size={"default"}
            className="shadow-bs border-silver/25 text-silver/75 hover:border-silver/75"
            onClick={handleCreateNew}
          />
        </div>

        <div className="flex px-4 gap-2 absolute bottom-0 z-10">
          {["Educational", "Personal", "Professional", "Other"].map(
            (type, index) => (
              <motion.label
                key={index}
                animate={
                  showOptions ? { y: 24, opacity: 1 } : { y: 0, opacity: 0 }
                }
                transition={{
                  type: "spring",
                  duration: 1,
                  delay: index * 0.1,
                }}
                className="flex gap-2 items-center bg-accent rounded-full px-2 leading-[150%] text-sm"
              >
                <input
                  type="radio"
                  className="text-sm"
                  value={type}
                  checked={selectedType === type}
                  onChange={() => setSelectedType(type)}
                />
                <span>{type}</span>
              </motion.label>
            )
          )}
        </div>
      </form>
      <div className="min-w-full grid min-[800px]:flex   px-4 gap-4">
        <div className="w-full  relative  p-4 shadow-bs rounded-lg ">
          <h2 className="w-full text-[24px] mb-4">Projects</h2>
          <div className="w-full py-1 px-2 mb-2 flex rounded-lg border border-accent/75 overflow-hidden items-center gap-2">
            <FaMagnifyingGlass size={24} />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search..."
              className="w-full py-1 bg-transparent outline-none "
            />
          </div>
          <div className="w-full grid divide-y-[1px] divide-accent/75 border rounded-lg border-accent/75">
            {[...Array(6)].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2  "
              >
                <div className="max-[450px]:grid flex items-center">
                  <div className="flex items-center gap-2 mr-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src={`https://picsum.photos/200/200?random=${index}`}
                        alt="boardimage"
                        className="object-fill w-full h-full"
                      />
                    </div>
                    <span className="text-silver/75 font-semibold whitespace-nowrap">
                      Project name
                    </span>
                  </div>

                  <span className="text-silver/75 text-sm">. xxxx/xx/xx</span>
                </div>
                <Button
                  children="View"
                  icon={true}
                  variant={"accent"}
                  size={"default"}
                  className="text-sm bg-white/75 text-dark"
                />
              </div>
            ))}
          </div>

          {/* <div className=" w-full grid place-items-center relative bg-primary  ">
            {[...Array(5)].map((items, index) => (
              <motion.div
                initial={{ scale: 2, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{ duration: index * 0.1 }}
                draggable="true"
                key={index}
                style={{
                  rotate:
                    index % 2
                      ? `${index * 5 + "deg"}`
                      : `-${index * 5 + "deg"}`,
                }}
                className={`text-left p-2  text-dark absolute bg-silver z-[${
                  5 - index
                }] `}
              >
                <img
                  src={`https://picsum.photos/200/200?random=${index}`}
                  alt="boardimage"
                  className="object-fill w-full h-full"
                />
              </motion.div>
            ))}
          </div> */}
        </div>
        <div className="w-full p-4 shadow-bs rounded-lg ">
          <div className="mb-4">
            <h2>Trending Boards</h2>
          </div>
          <div className="w-full grid grid-cols-2 gap-4">
            {[...Array(4)].map((item, index) => (
              <div
                key={index}
                className="max-[450px]:max-w-[200px] laptop:min-w-[200px] relative border border-[gray] rounded-lg overflow-hidden hover:opacity-90 hover:shadow-bs"
              >
                <img
                  src={`https://picsum.photos/200/200?random=${index * 5}`}
                  alt="boardimage"
                  className="object-fill w-full h-full"
                />
                <span className="w-full absolute bottom-0 bg-dark p-2 text-white flex items-center justify-between">
                  App idea
                  <span className="text-[8px] flex flex-col items-center">
                    <BiChevronUp color="green" size={16} />
                    10
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
