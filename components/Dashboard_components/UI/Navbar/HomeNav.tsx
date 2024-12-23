import React, { useEffect, useRef, useState, useCallback } from "react";
import { BiGrid } from "react-icons/bi";
import { FaBars, FaChevronUp, FaPlusCircle } from "react-icons/fa";
import Button from "../../../Global_components/Button";

import { boardProps } from "../../utils/Interfaces";
import Search from "./Search";
import NewBoardForm from "../Forms/Boardform/Boardform";

interface HomeNavProps {
  errorHandler?: (error: any) => void;
  closeAppform?: () => void;
  boards?: boardProps[];
  add?: boolean;
  item?: void;
  list: boolean;
  changeView: (listView: boolean) => void;
  updateBoard: any;
  handleSearch?: (items: boardProps[]) => void; // Updated type
}

const HomeNav: React.FC<HomeNavProps> = ({
  list,
  changeView,
  updateBoard,
  boards,
  handleSearch,
}) => {
  const [add, setAdd] = useState<boolean>(false);
  const boardRef = useRef<HTMLDivElement>(null);
  const handleForm = useCallback((item: boolean) => {
    setAdd(item);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        boardRef.current &&
        !boardRef.current.contains(e.target as HTMLElement)
      ) {
        setAdd(false);
        handleForm(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleForm]);

  return (
    <div className="min-w-full grid tablet:grid-cols-[4fr_1fr] grid-cols-[4fr_40px] tablet:p-0 tablet:gap-2 gap-4 border-box place-items-center bg-accent/50 rounded-md top-0 sticky z-20">
      <Search boards={boards} handleSearch={handleSearch} />
      <div className="w-full flex gap-4 items-center justify-between relative z-[10]">
        <div className="w-fit hidden tablet:flex bg-gray-800 text-[18px] rounded-lg text-gray-400 relative">
          <div
            className={`w-fit relative p-2 transition-all duration-300 ease-in-out z-20 rounded-md ${
              !list ? "text-silver" : "text-dark"
            }`}
            onClick={() => changeView(false)}
            aria-label="Grid view"
          >
            <BiGrid size={20} />
          </div>
          <div
            className={`p-2 rounded-md relative z-20 ${
              list ? "text-silver" : "text-dark"
            }`}
            onClick={() => changeView(true)}
            aria-label="List view"
          >
            <FaBars size={20} />
          </div>
          <div
            className={`absolute w-1/2 h-full left-0 bg-primary ${
              !list ? "translate-x-0" : "translate-x-full"
            } rounded-md z-10 transition-all duration-300`}
          ></div>
        </div>
        <div ref={boardRef} className="relative pr-1">
          <div className="hidden tablet:block">
            <Button
              variant="primary"
              size="default"
              onClick={() => setAdd((prev) => !prev)}
              className="w-fit py-2 px-4"
              rightIcon={
                <FaChevronUp
                  className={`${
                    add ? "rotate-180" : ""
                  } min-w-fit transition-all ease-in-out duration-500`}
                />
              }
              aria-label="Add new board"
            >
              Add new
            </Button>
          </div>
          <div
            className="bg-primary flex items-center rounded-lg p-2 w-fit tablet:hidden"
            onClick={() => setAdd((prev) => !prev)}
            aria-label="Add new board"
          >
            <FaPlusCircle />
          </div>
          <NewBoardForm
            add={add}
            handleForm={handleForm}
            updateBoard={updateBoard}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
