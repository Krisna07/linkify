"use client";

import React, { useState, useEffect } from "react";
import Homenav from "../../../../components/Dashboard_components/UI/Navbar/HomeNav";
import getBoards from "../../../../components/Dashboard_components/utils/Fetchbaords";
import { boardProps } from "../../../../components/Dashboard_components/utils/Interfaces";

import DisplayBoards from "../../../../components/Dashboard_components/UI/components/Home/DisplayBoards";
import HomepageCardConatiner1 from "../../../../components/Dashboard_components/UI/components/Home/HomepageCardConatiner1";

export default function Home() {
  const [list, setList] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [boards, setBoards] = useState<boardProps[]>([]);
  const [search, setSearch] = useState<boardProps[]>([]);
  const [displayBoard, setDisplayBoard] = useState<boardProps[]>([]);

  const HandleError = (err: string) => {
    console.log(err);
  };

  //changing the page view
  const changeView = (view: boolean) => {
    setList(view);
  };

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const data = await getBoards();
        setBoards(data.data);
      } catch (err: any) {
        HandleError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchBoards();
  }, []);

  const actionBoardUpdate = (newBoard: boardProps) => {
    setBoards([...boards, newBoard]);
  };

  const handleSearch = (item: boardProps[]) => {
    setSearch(item);
  };
  useEffect(() => {
    search.length < 1 ? setDisplayBoard(boards) : setDisplayBoard(search);
  }, [boards, search]);

  return (
    <div className="w-full laptop:max-w-[1200px] min-h-screen  overflow-hidden  px-2  flex flex-col gap-8 box-border ">
      <div className="absolute"></div>
      <Homenav
        list={list}
        boards={boards}
        changeView={changeView}
        errorHandler={HandleError}
        updateBoard={actionBoardUpdate}
        handleSearch={handleSearch}
      />
      <HomepageCardConatiner1 boardList={displayBoard} />

      <>
        {loading ? (
          <div className=" grid place-items-center ">
            <div className="w-40 h-40 bg-white rounded-full relative grid place-items-center animate-spin-slow overflow-hidden ">
              <div className="absolute w-1/2 h-1/2 bg-primary right-1/2 z-0  "></div>
              <div className="w-36 h-36 bg-dark rounded-full z-10 grid place-items-center animate-none"></div>
            </div>
            <div className="absolute text-2xl">Loading...</div>
          </div>
        ) : (
          <DisplayBoards boardList={displayBoard} list={list} />
        )}
      </>
    </div>
  );
}
