"use client";

import React, { useState, useEffect } from "react";
import Homenav from "../../../../components/Dashboard_components/UI/Navbar/HomeNav";
import getBoards from "../../../../components/Dashboard_components/utils/fetchBoards";
import { boardProps } from "../../../../components/Dashboard_components/utils/Interfaces";
import DisplayBoards from "../../../../components/Dashboard_components/UI/components/Home/DisplayBoards";
import HomepageCardConatiner1 from "../../../../components/Dashboard_components/UI/components/Home/HomepageCardConatiner1";
import { toast } from "react-toastify";
import Loading from "../../../(auth)/auth/Formcomponents/Loading";

export default function Home() {
  const [list, setList] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [boards, setBoards] = useState<boardProps[]>([]);
  const [search, setSearch] = useState<boardProps[]>([]);
  const [displayBoard, setDisplayBoard] = useState<boardProps[]>([]);

  const HandleError = (err: string) => {
    toast.error(err);
  };

  const changeView = (view: boolean) => {
    setList(view);
  };

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const res = await getBoards();
        setBoards(res);
      } catch (err: any) {
        HandleError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchBoards();
  }, []);

  const actionBoardUpdate = (newBoard: boardProps) => {
    setBoards((prevBoards: boardProps[] | null) => {
      if (Array.isArray(prevBoards)) {
        return [...prevBoards, newBoard];
      } else {
        return [newBoard];
      }
    });
  };

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
        changeView={changeView}
        errorHandler={HandleError}
        updateBoard={actionBoardUpdate}
        handleSearch={handleSearch}
      />
      <HomepageCardConatiner1 boardList={boards} />

      {loading ? (
        <Loading />
      ) : (
        <DisplayBoards boardList={displayBoard} list={list} />
      )}
    </div>
  );
}
