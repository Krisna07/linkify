import React from "react";
import { boardProps } from "../../../utils/Interfaces";
import Board from "../Board";
interface displayBoardProps {
  boardList: boardProps[];
  list: boolean;
}

const DisplayBoards = ({ boardList, list }: displayBoardProps) => {
  return (
    <div
      className={`min-h-[400px] grid ${
        list
          ? "grid-cols-1"
          : "laptop:grid-cols-3  tablet:grid-cols-2 grid-cols-1"
      } place-items-start gap-8 relative z-10 text-[gray] `}
    >
      {boardList && boardList.length > 0 ? (
        boardList.map((item: boardProps, index: number) => (
          <Board board={item} key={index} />
        ))
      ) : (
        <>No matching accounts</>
      )}
    </div>
  );
};

export default DisplayBoards;
