"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProjectProps } from "../../../utils/Interfaces";
import Button from "../../../../Global_components/Button";
import Image from "next/image";
import { FaLock, FaMagnifyingGlass } from "react-icons/fa6";
import { BiChevronUp, BiUserPlus } from "react-icons/bi";
import { inter } from "../../../../../fonts/fonts";

import getProjects, { createProject } from "./projectactions";

import Link from "next/link";
import CreateProject from "../../Forms/ProjectForm/CreateProject";
export interface NewProjectProps {
  name: string;
  type: string;
  isPrivate: boolean;
  image: string;
}

const ProjectsPage = () => {
  const [projectName, setProjectName] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [isPrivate, setisPrivate] = useState<boolean>(false);
  const [dispayProject, setDisplayProject] = useState<number>(8);
  const [projects, setProjects] = useState<ProjectProps[]>([
    // {
    //   id: "12",
    //   name: "Project Alpha",
    //   type: "Educational",
    //   createdOn: new Date("2023-01-01"),
    //   isPrivate: false,
    //   image: "https://picsum.photos/200/200?random=1",
    // },
    // {
    //   id: "13",
    //   name: "Project Beta",
    //   type: "Personal",
    //   createdOn: new Date("2023-02-01"),
    //   isPrivate: true,
    //   image: "https://picsum.photos/200/200?random=2",
    // },
    // {
    //   id: "14",
    //   name: "Project Gamma",
    //   type: "Professional",
    //   createdOn: new Date("2023-03-01"),
    //   isPrivate: false,
    //   image: "https://picsum.photos/200/200?random=3",
    // },
    // {
    //   id: "15",
    //   name: "Project Delta",
    //   type: "Other",
    //   createdOn: new Date("2023-04-01"),
    //   isPrivate: true,
    //   image: "https://picsum.photos/200/200?random=4",
    // },
    // {
    //   id: "16",
    //   name: "Project Epsilon",
    //   type: "Research",
    //   createdOn: new Date("2023-05-01"),
    //   isPrivate: false,
    //   image: "https://picsum.photos/200/200?random=5",
    // },
    // {
    //   id: "18",
    //   name: "Project Zeta",
    //   type: "Development",
    //   createdOn: new Date("2023-06-01"),
    //   isPrivate: true,
    //   image: "https://picsum.photos/200/200?random=6",
    // },
  ]);

  // const updateProjects =(newProjects:)=>{
  //   setProjects()

  // }

  const fetchProjects = async () => {
    const projectsinDb = await getProjects();
    projectsinDb && setProjects(projectsinDb);
  };
  useEffect(() => {
    fetchProjects();
  }, []);
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

  const updateProjectsNumber = () => {
    if (dispayProject + 4 > projects.length) {
      setDisplayProject(projects.length);
    } else {
      setDisplayProject(dispayProject + 4);
    }
  };

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
            className="rounded-lg border-accent hover:shadow-bs w-fit"
          />
        </div>
      </div>
      <CreateProject setProjects={setProjects} />
      <div className="min-w-full  grid min-[800px]:flex   px-4 gap-4  ">
        <div className="w-full max-h-full  relative  p-4 shadow-bs rounded-lg  ">
          <h2 className="w-full font-semibold  mb-4">Recent Projects</h2>
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
          {projects.length > 0 && (
            <>
              <motion.div
                initial={{ maxHeight: 0 }}
                animate={{ maxHeight: 320 }}
                transition={{
                  type: "spring",
                }}
                className={`w-full tablet:max-h-[320px]  grid divide-y-[1px] divide-accent/75 border rounded-lg border-accent/75 box-border  overflow-hidden ${
                  dispayProject > 8 && "overflow-y-auto"
                }`}
              >
                {projects &&
                  projects.slice(0, dispayProject).map(
                    (item, index) =>
                      item && (
                        <motion.div
                          initial={{ y: 50, height: 0, opacity: 0 }}
                          animate={{ y: 0, height: 320 / 8, opacity: 1 }}
                          transition={{
                            type: "spring",
                            duration:
                              index < projects.length ? index * 0.1 : 0.3,
                          }}
                          key={index}
                          className={`flex items-center justify-between p-1 h-[px] `}
                        >
                          <div className="max-[450px]:grid flex items-center gap-1 h-full">
                            <div className="flex items-center gap-2 mr-2">
                              <div className="w-6 h-6 rounded-full overflow-hidden bg-gradient-to-tl from-primary to-accent/50">
                                {item.image && (
                                  <Image
                                    src={item.image}
                                    alt="boardimage"
                                    width={1}
                                    height={1}
                                    className="object-fill w-full h-full"
                                  />
                                )}
                              </div>
                              <span className="text-silver/75 font-semibold whitespace-nowrap flex items-center gap-1 capitalize text-sm">
                                {item.name}
                                {item.isPrivate && <FaLock size={8} color="" />}
                              </span>
                            </div>

                            <span className="text-silver/75 text-[12px]">
                              {item.createdOn &&
                                new Date(`${item.createdOn}`).toDateString()}
                            </span>
                          </div>
                          <Link
                            href={`./projects/${item.name
                              .split(" ")
                              .join("_")}`}
                          >
                            <Button
                              children="View"
                              icon={true}
                              variant={"default"}
                              size={"default"}
                              className="text-sm shadow-bs border-none p-[2px_4px]"
                            />
                          </Link>
                        </motion.div>
                      )
                  )}
              </motion.div>
              {projects.length > 8 && (
                <div className="p-2">
                  <Button
                    children="Load More"
                    icon={true}
                    variant={"default"}
                    size={"default"}
                    className="text-sm shadow-bs border-none"
                    onClick={updateProjectsNumber}
                  />
                </div>
              )}
            </>
          )}
        </div>
        <div className="w-full max-h-full p-4 shadow-bs rounded-lg ">
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
              className="w-fit text-[12px] shadow-bs border-none"
              size={"sm"}
              variant={"default"}
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
