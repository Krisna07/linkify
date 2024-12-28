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

  const [projectName, setProjectName] = useState<string>();

  const handleProjectName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  const [projectForm, showProjectForm] = useState<boolean>(false);

  return (
    <div className="min-w-full grid tablet:grid-cols-[4fr_1fr] grid-cols-[4fr_40px] tablet:p-0 tablet:gap-2 gap-4 border-box place-items-center rounded-md top-0 sticky z-20">
      <Search boards={boards} handleSearch={handleSearch} />
      <div className="w-full  flex gap-4 items-center justify-between relative z-[10]">
        <div className="shadow-bs p-[2px] rounded-lg hidden tablet:block">
          {" "}
          <div className="w-fit   tablet:flex  text-gray-400 relative ">
            <div
              className={`w-fit relative p-2 transition-all  duration-300 hover:text-white ease-in-out z-20 rounded-md ${
                !list ? "text-white" : "text-silver/75"
              }`}
              onClick={() => changeView(false)}
              aria-label="Grid view"
            >
              <BiGrid size={16} />
            </div>
            <div
              className={`p-2 rounded-md relative z-20 hover:text-white ${
                list ? "text-white" : "text-silver/75"
              }`}
              onClick={() => changeView(true)}
              aria-label="List view"
            >
              <FaBars size={16} />
            </div>
            <div
              className={`absolute  w-1/2 h-full left-0 bg-white/25 ${
                !list ? "translate-x-0" : "translate-x-full"
              } rounded-md z-10 transition-all duration-300`}
            ></div>
          </div>
        </div>
        <div ref={boardRef} className="relative pr-1">
          <div className="hidden tablet:block">
            <Button
              variant="default"
              size={"sm"}
              className="p-1 px-2 text-white/50 hover:text-white hover:shadow-bs border-accent"
              onClick={() => setAdd((prev) => !prev)}
              // rightIcon={
              //   <FaChevronUp
              //     className={`${
              //       add ? "rotate-180" : ""
              //     } min-w-fit transition-all ease-in-out duration-500`}
              //   />
              // }
              aria-label="Add New project"
            >
              <FaPlusCircle /> Add new
            </Button>
          </div>
          <div
            className="bg-white/25 flex items-center rounded-lg p-2 w-fit tablet:hidden"
            onClick={() => setAdd((prev) => !prev)}
            aria-label="Add new board"
          >
            <FaPlusCircle />
          </div>
          {/* <NewBoardForm
            add={add}
            handleForm={handleForm}
            updateBoard={updateBoard}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
