"use client";

import React, { useState, useEffect } from "react";
import Homenav from "../../../../components/Dashboard_components/UI/Navbar/HomeNav";
import getBoards from "../../../../components/Dashboard_components/utils/fetchBoards";
import {
  boardProps,
  ProjectProps,
} from "../../../../components/Dashboard_components/utils/Interfaces";
import DisplayBoards from "../../../../components/Dashboard_components/UI/components/Home/DisplayBoards";
import HomepageCardConatiner1 from "../../../../components/Dashboard_components/UI/components/Home/HomepageCardConatiner1";
import { toast } from "react-toastify";
import Loading from "../../../(auth)/auth/Formcomponents/Loading";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../../../../components/Global_components/Button";
import Link from "next/link";
import { FaLock } from "react-icons/fa";
import getProjects from "../../../../lib/actions/projectactions";

export default function Home() {
  const [list, setList] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [boards, setBoards] = useState<boardProps[]>([]);
  const [search, setSearch] = useState<boardProps[]>([]);
  const [displayBoard, setDisplayBoard] = useState<boardProps[]>([]);
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  const HandleError = (err: string) => {
    toast.error(err);
  };

  const changeView = (view: boolean) => {
    setList(view);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        res && setProjects(res);
        // const boards = await getBoards();
        // setBoards(boards);
      } catch (err: any) {
        HandleError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // const actionBoardUpdate = (newBoard: boardProps) => {
  //   setBoards((prevBoards: boardProps[] | null) => {
  //     if (Array.isArray(prevBoards)) {
  //       return [...prevBoards, newBoard];
  //     } else {
  //       return [newBoard];
  //     }
  //   });
  // };

  const handleSearch = (item: boardProps[]) => {
    setSearch(item);
  };

  useEffect(() => {
    setDisplayBoard(search.length < 1 ? boards : search);
  }, [boards, search]);

  return (
    <div className="w-full laptop:max-w-[1200px] overflow-x-auto overflow-hidden px-2  flex flex-col gap-8 box-border">
      <Homenav
        list={list}
        boards={boards}
        projects={projects}
        changeView={changeView}
        errorHandler={HandleError}
        handleSearch={handleSearch}
      />
      <HomepageCardConatiner1 boardList={boards} />

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="gird grid-cols-3 gap-4">
            {projects && projects.length > 0 && (
              <>
                <motion.div
                  initial={{ maxHeight: 0 }}
                  animate={{ maxHeight: "fit-content" }}
                  transition={{
                    type: "spring",
                  }}
                  className={`w-full flex flex-wrap gap-6   box-border `}
                >
                  {projects &&
                    projects.map(
                      (item, index) =>
                        item && (
                          <motion.div
                            initial={{ y: 50, height: 0, opacity: 0 }}
                            animate={{
                              y: 0,
                              height: "fit-content",
                              opacity: 1,
                            }}
                            transition={{
                              type: "spring",
                              duration:
                                index < projects.length ? index * 0.1 : 0.3,
                            }}
                            key={index}
                            className={`tablet:max-w-[250px] w-full grid p-2 h-[px] shadow-bs rounded-md bg-silver/25`}
                          >
                            <div className="max-[450px]:grid flex flex-col  gap-1 h-full">
                              <div className="flex  flex-col gap-2 ">
                                <div className="w-full overflow-hidden bg-gradient-to-tl from-primary to-accent/50">
                                  {item.image && (
                                    <Image
                                      src={item.image}
                                      alt="boardimage"
                                      width={200}
                                      height={200}
                                      className="object-fill w-full h-full "
                                    />
                                  )}
                                </div>
                              </div>
                              <div className="flex justify-between items-center gap-2">
                                <div>
                                  <span className="text-silver/75 font-semibold whitespace-nowrap flex items-center gap-1 capitalize text-sm">
                                    {item.name}
                                    {item.isPrivate && (
                                      <FaLock size={8} color="" />
                                    )}
                                  </span>
                                  <span className="text-silver/75 text-[12px]">
                                    {item.createdOn &&
                                      new Date(
                                        `${item.createdOn}`
                                      ).toDateString()}
                                  </span>
                                </div>
                                <span>
                                  {item.boards ? item.boards.length : 0} Boards
                                </span>
                              </div>
                            </div>
                            <Link
                              href={`/dashboard/projects/${item.name
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
                <DisplayBoards boardList={displayBoard} list={list} />
                {/* {projects.length > 8 && (
                <div className="p-2">
                  <Button
                    children="Load More"
                    icon={true}
                    variant={"default"}
                    size={"default"}
                    className="text-sm shadow-bs border-none"
                    // onClick={updateProjectsNumber}
                  />
                </div>
              )} */}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
