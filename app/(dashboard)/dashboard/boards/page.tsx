"use client";
import React, { useEffect } from "react";
import { getBoards } from "../../../../components/Dashboard_components/utils/boardactions";
import DisplayBoards from "../../../../components/Dashboard_components/UI/components/Home/DisplayBoards";

const Page = () => {
  const [boards, setBoards] = React.useState([]);
  const getallboards = async () => {
    const boards = await getBoards();
    setBoards(boards);
  };
  useEffect(() => {
    getallboards();
  }, []);
  return (
    <div>
      <DisplayBoards boardList={boards} list={false} />
    </div>
  );
};

export default Page;
