import React, { useEffect, useRef, useState } from "react";
import { BiGrid } from "react-icons/bi";
import { FaBars, FaChevronUp, FaPlusCircle, FaSearch } from "react-icons/fa";
import Button from "../../../Global_components/Button";
import NewBoardForm from "../Forms/NewBoardForm";
import { boardProps } from "../../utils/Interfaces";

import Search from "./Search";
interface HomeNavProps {
  errorHandler?: any;
  closeAppform?: void;
  boards?: boardProps[];
  add?: boolean;
  item?: void;
  list: boolean;
  changeView: any;
  updateBoard: any;
  handleSearch?: any;
}

const Homenav = ({
  list,
  changeView,
  updateBoard,
  errorHandler,
  boards,
  handleSearch,
}: HomeNavProps) => {
  const [add, setAdd] = useState<boolean>(false);

  const handleForm = (item: boolean) => {
    setAdd(item);
  };
  const boardRef: React.MutableRefObject<null> = useRef(null);
  useEffect(() =>
    document.addEventListener("click", (e) => {
      const ClickedItem: EventTarget | null = e && e.target;
      const openItem: any = boardRef.current;
      if (openItem?.contains(ClickedItem)) {
        return;
      } else {
        handleForm(false);
      }
    })
  );

  return (
    <div className="min-w-full   grid tablet:grid-cols-[4fr_1fr]  grid-cols-[4fr_40px] tablet:p-0  tablet:gap-2 gap-4 border-box place-items-center  bg-accent/50 rounded-md top-0 sticky z-20">
      <Search boards={boards} handleSearch={handleSearch} />
      <div className="w-full   flex gap-4 items-center justify-between relative z-[10]">
        <div className="hidden tablet:flex gap-2 p-1 bg-gray-800 text-[18px] rounded-lg text-gray-400 relative">
          <div
            className="p-2 relative z-20 rounded-md"
            onClick={() => changeView(false)}
          >
            <BiGrid />
          </div>
          <div
            className="p-2  rounded-md relative z-20"
            onClick={() => changeView(true)}
          >
            <FaBars />
          </div>
          <div
            className={`absolute w-1/2 h-[90%] bg-primary top-[2px] ${
              !list ? "left-[1%]" : "left-[49%]"
            }  rounded-md z-10 transition-all`}
          ></div>
        </div>
        <div ref={boardRef} className="relative pr-1 ">
          <div className="hidden tablet:block">
            {" "}
            <Button
              children="Add new"
              variant={"primary"}
              size={"default"}
              onClick={() => setAdd(!add)}
              className="w-fit py-2  px-4 "
              rightIcon={
                <FaChevronUp
                  className={`${
                    add ? "rotate-180" : ""
                  } min-w-fit transition-all ease-in-out duration-500  `}
                />
              }
            />
          </div>
          <div
            className="bg-primary flex items-center rounded-lg p-2 w-fit tablet:hidden"
            onClick={() => setAdd(!add)}
          >
            <FaPlusCircle />
          </div>
          <NewBoardForm
            add={add}
            handleForm={handleForm}
            updateBoard={updateBoard}
            errorHandler={errorHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Homenav;
