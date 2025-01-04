"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { boardProps, ProjectProps } from "../../../utils/Interfaces";
import Button from "../../../../Global_components/Button";
import Image from "next/image";

import { FaLock, FaMagnifyingGlass, FaUpDown } from "react-icons/fa6";
import { RiIncreaseDecreaseLine } from "react-icons/ri";
import { BiChevronUp, BiUserPlus } from "react-icons/bi";
import { inter, roboto } from "../../../../../fonts/fonts";
import RandomCodeGenerator from "../../../../../lib/radomcodegenerator";
import getProjects, { createProject } from "./projectactions";
import { toast } from "react-toastify";
import { supabase } from "../../../../../lib/supabase";

const ProjectsPage = () => {
  const [projectName, setProjectName] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const [projects, setProjects] = useState<ProjectProps[]>([
    {
      name: "Project Alpha",
      type: "Educational",
      createdon: new Date("2023-01-01"),
      isPrivate: false,
      image: "https://picsum.photos/200/200?random=1",
    },
    {
      name: "Project Beta",
      type: "Personal",
      createdon: new Date("2023-02-01"),
      isPrivate: true,
      image: "https://picsum.photos/200/200?random=2",
    },
    {
      name: "Project Gamma",
      type: "Professional",
      createdon: new Date("2023-03-01"),
      isPrivate: false,
      image: "https://picsum.photos/200/200?random=3",
    },
    {
      name: "Project Delta",
      type: "Other",
      createdon: new Date("2023-04-01"),
      isPrivate: true,
      image: "https://picsum.photos/200/200?random=4",
    },
    {
      name: "Project Epsilon",
      type: "Research",
      createdon: new Date("2023-05-01"),
      isPrivate: false,
      image: "https://picsum.photos/200/200?random=5",
    },
    {
      name: "Project Zeta",
      type: "Development",
      createdon: new Date("2023-06-01"),
      isPrivate: true,
      image: "https://picsum.photos/200/200?random=6",
    },
  ]);

  useEffect(() => {
    const newProjects = getProjects();
    console.log(newProjects);
    console.log(projects);
  }, [projects]);
  const trendingBoards: any = [
    {
      id: "1",
      title: "App Idea",
      description: "This is the first board for project management.",
      link: "https://example.com/board1",
      image: "https://picsum.photos/200/200?random=100",
      boardColor: "#FF5733",
      creator: "Jhon Doe",
      tags: ["project", "management", "team"],
    },
    {
      id: "2",
      title: "Fundraiser",
      description: "This board focuses on design tasks.",
      link: "https://example.com/board2",
      image: "https://picsum.photos/200/200?random=200",
      boardColor: "#33FF57",
      creator: "Mark Foe",
      tags: ["design", "tasks", "collaboration"],
    },
    {
      id: "3",
      title: "Design tools",
      description: "A board for tracking development progress.",
      link: "https://example.com/board3",
      image: "https://picsum.photos/200/200?random=300",
      boardColor: "#3357FF",
      creator: "Will Smith",
      tags: ["development", "progress", "tracking"],
    },
    {
      id: "4",
      title: "Stars Study",
      description: "This board is for marketing strategies.",
      link: "https://example.com/board4",
      image: "https://picsum.photos/200/200?random=400",
      boardColor: "#FF33A1",
      creator: "Peter Chez",
      tags: ["marketing", "strategy", "planning"],
    },
  ];
  const handleCreateNew = async (e: FormEvent) => {
    e.preventDefault();
    if (projectName && selectedType) {
      const newProject: ProjectProps = {
        name: projectName,
        type: selectedType,
        isPrivate: true,
        image: `https://picsum.photos/200/200?random=${RandomCodeGenerator}`,
      };

      setProjects((prev) => [...prev, newProject]);
      const response = await createProject(newProject);
      if (response.status !== 200) {
        return console.log(response);
      }
      toast.success("Project added");
    } else {
      console.log("No data to add");
    }
  };
  // const getProjectshere = async () => {
  //   let data = await supabase.from("Project").select("*");
  //   return data.data
  // };

  return (
    <div
      className={`w-full laptop:w-[1000px] grid gap-8 box-border ${inter.className}`}
    >
      <div className="px-4 tablet:flex grid gap-8 items-center justify-between border-b border-accent pb-8">
        <div>
          <h2 className="text-[32px] mb-2 font-semibold leading-8">
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
            className="min-w-fit shadow-bs border-silver/25 text-silver/75 hover:border-silver/75"
            onClick={handleCreateNew}
          />
        </div>

        <div className="w-full flex flex-wrap items-start px-4 gap-2 absolute top-full p-1  z-10 ">
          {["Educational", "Personal", "Professional", "Other"].map(
            (type, index) => (
              <motion.label
                key={index}
                animate={
                  showOptions ? { y: 0, opacity: 1 } : { y: -24, opacity: 0 }
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
      <div className="min-w-full grid min-[800px]:flex   px-4 gap-4 ">
        <div className="w-full  relative  p-4 shadow-bs rounded-lg ">
          <h2 className="w-full font-semibold  mb-4">Projects</h2>
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
            {projects.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2  "
              >
                <div className="max-[450px]:grid flex items-center gap-1">
                  <div className="flex items-center gap-2 mr-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt="boardimage"
                        width={1}
                        height={1}
                        className="object-fill w-full h-full"
                      />
                    </div>
                    <span className="text-silver/75 font-semibold whitespace-nowrap flex items-center gap-1">
                      {item.name}
                      {item.isPrivate && <FaLock size={8} color="" />}
                    </span>
                  </div>

                  <span className="text-silver/75 text-[12px]">
                    {item.createdon?.toDateString()}
                  </span>
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
            {trendingBoards.map((item: any) => (
              <div
                key={item.id}
                className="max-[450px]:max-w-[200px] laptop:min-w-[200px] relative border border-[gray] rounded-lg overflow-hidden hover:opacity-90 hover:shadow-bs"
              >
                <Image
                  src={item.image}
                  alt="boardimage"
                  width={200}
                  height={200}
                  className="object-fill w-full h-full"
                />
                <div className="w-full absolute bottom-0 bg-dark p-2 text-white flex items-center justify-between">
                  <div className="grid">
                    <span> {item.title}</span>
                    <div className="text-[12px] font-semibold text-accent hover:underline flex items-center gap-2">
                      <Image
                        loading="lazy"
                        src={`https://avatar.iran.liara.run/public/${
                          item.id + 1 * 2
                        }`}
                        alt=""
                        width={120}
                        height={120}
                        className="h-6 w-6 object-fill hover:scale-[1.1] transition-all ease-in-out "
                      />
                      <span className=" leading-[100%]">{item.creator}</span>
                    </div>
                  </div>
                  <span className="text-[8px] flex flex-col items-center">
                    <BiChevronUp color="green" size={16} />
                    {item.id * 112}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="min-w-full  px-4">
        <div className="w-full shadow-bs p-2 rounded-lg ">
          <div className="mb-4 p-2 flex items-center justify-between">
            <h2 className="font-semibold">Suggested users</h2>
            <Button
              className="w-fit text-[12px]"
              size={"sm"}
              variant={"primary"}
              icon={true}
              children="All public profiles"
            />
          </div>
          <div className="flex gap-4 overflow-hidden overflow-x-scroll scrollbar-hide p-2">
            {[...Array(10)].map((users, index) => (
              <div
                key={index}
                className="grid gap-2 text-center hover:shadow-bs shadow-none p-2 transition-all ease-in-out duration-500 rounded-lg"
              >
                <div className="w-[120px] h-[120px] bg-primary rounded-full overflow-hidden">
                  <Image
                    loading="lazy"
                    src={`https://avatar.iran.liara.run/public/${
                      index + 1 * 2
                    }`}
                    alt=""
                    width={100}
                    height={100}
                    className="h-full w-full object-fill hover:scale-[1.1] transition-all ease-in-out "
                  />
                </div>
                <div className="grid">
                  <span>username</span>
                  <span className="text-[12px] flex items-center justify-center gap-2 font-semibold text-white/25">
                    25 Projects
                    <span className="p-1 px-2 bg-accent rounded-lg text-white">
                      <BiUserPlus />
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
