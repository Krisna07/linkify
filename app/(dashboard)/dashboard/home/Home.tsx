"use client";

import React, { useState, useEffect, useRef } from "react";

// import ToastConatiner from "../../../../components/Global_components/Toast";
import Homenav from "../../../../components/Dashboard_components/UI/Navbar/HomeNav";

import getBoards from "../../../../components/Dashboard_components/utils/Fetchbaords";
import { boardProps } from "../../../../components/Dashboard_components/utils/Interfaces";
import { ToastContainer, toast } from "react-toastify";
import Board from "../../../../components/Dashboard_components/UI/components/Board";

export default function Home() {
  const [list, setList] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  const [boards, setBoards] = useState<boardProps[]>([]);
  const HandleError = (err: string) => {
    toast(err);
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

  return (
    <div className="w-full laptop:max-w-[1200px] min-h-screen  overflow-hidden  px-2  flex flex-col gap-8 box-border ">
      <Homenav
        list={list}
        changeView={changeView}
        errorHandler={HandleError}
        updateBoard={actionBoardUpdate}
      />
      <div className="absolute">
        <ToastContainer />
      </div>
      {loading ? (
        <div className=" grid place-items-center ">
          <div className="w-40 h-40 bg-white rounded-full relative grid place-items-center animate-spin-slow overflow-hidden ">
            <div className="absolute w-1/2 h-1/2 bg-primary right-1/2 z-0  "></div>
            <div className="w-36 h-36 bg-dark rounded-full z-10 grid place-items-center animate-none"></div>
          </div>
          <div className="absolute text-2xl">Loading...</div>
        </div>
      ) : (
        <div
          className={`h-fit grid ${
            list ? "grid-cols-1" : " tablet:grid-cols-3 grid-cols-1"
          } gap-8 relative z-10 text-[gray] `}
        >
          {boards ? (
            boards.map((item: boardProps, index: number) => (
              <Board board={item} key={index} />
            ))
          ) : (
            <>No accounts please add accounts</>
          )}
        </div>
      )}
    </div>
  );
}
