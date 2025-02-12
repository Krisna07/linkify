import React from "react";
import { boardProps } from "../../../utils/Interfaces";
import Board from "../Board";
// import AddBoard from "../../../utils/addBoard";
import Button from "../../../../Global_components/Button";
import Link from "next/link";
interface displayBoardProps {
  boardList: boardProps[];
  list: boolean;
}

const DisplayBoards = ({ boardList, list }: displayBoardProps) => {
  return (
    <div
      className={`h-full grid ${
        list
          ? "grid-cols-1"
          : "laptop:grid-cols-3  tablet:grid-cols-2 grid-cols-1"
      } place-items-start gap-8 pb-4 relative z-10 text-[gray] `}
    >
      {boardList && boardList.length > 0 ? (
        boardList.map((item: boardProps, index: number) => (
          <Board board={item} key={index} />
        ))
      ) : (
        <div className="group w-full h-full grid gap-4 p-2 cursor-pointer  border border-transparent rounded-md transition-all duration-500 hover:border-white/50 relative overflow-hidden">
          No boards yet
        </div>
      )}
    </div>
  );
};

export default DisplayBoards;
