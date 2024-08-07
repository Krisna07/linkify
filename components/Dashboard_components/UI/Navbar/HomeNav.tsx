import React, { useEffect, useRef, useState } from "react";
import { BiGrid } from "react-icons/bi";
import { FaBars, FaChevronUp, FaSearch } from "react-icons/fa";
import Button from "../../../Global_components/Button";
import NewBoardForm from "../Forms/NewBoardForm";
import { boardProps } from "../../utils/Interfaces";
interface HomeNavProps {
  errorHandler?: any;
  closeAppform?: void;
  add?: boolean;
  item?: void;
  list: boolean;
  changeView: any;
  updateBoard: any;
  handleSearch: any;
  search: boardProps[];
  handleSelectedBoard?: any;
}
// export interface boardProps {
//   title: string;
//   description: string;
//   type: string;
//   link: string;
//   image: string;
// }

const Homenav = ({
  list,
  changeView,
  updateBoard,
  errorHandler,
  handleSearch,
  search,
  handleSelectedBoard,
}: HomeNavProps) => {
  const [add, setAdd] = useState<boolean>(false);
  const handleForm = (item: boolean) => {
    setAdd(item);
  };
  const boardRef: React.MutableRefObject<null> = useRef(null);
  useEffect(() =>
    document.addEventListener("click", (e: MouseEvent) => {
      const ClickedItem: EventTarget | null = e && e.target;
      const openItem: any = boardRef.current;
      if (openItem?.contains(ClickedItem)) {
        return;
      } else {
        handleForm(false);
      }
    })
  );
  const selectSearch = (e: any) => {
    console.log(e.target.innerText);
    handleSelectedBoard(
      search.filter((item: boardProps) => item.title === e.target.innerText)
    );
  };

  return (
    <div className="min-w-full   grid tablet:grid-cols-[4fr_230px]   tablet:p-0 grid-cols-1 tablet:gap-2 gap-4 border-box place-items-center  bg-accent/50 rounded-md top-0 sticky z-20">
      <div className=" w-full flex items-center gap-4 px-4 p-1   box-border rounded-lg relative z-20  ">
        <FaSearch />
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          className="bg-dark px-2 p-2 outline-none w-[100%]"
        />
        {search.length > 0 && (
          <div className="absolute top-[110%]   divide-y-[2px] divide-solid divide-tahiti rounded-md text-lg grid  text-left overflow-hidden">
            {search.map((item: boardProps) => (
              <div
                className="w-full p-2 px-4 bg-accent hover:bg-accent/[90%] hover:text-tahiti transition-all duration-300 cursor-pointer"
                onClick={selectSearch}
              >
                {item.title}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-full   flex gap-4 items-center justify-between relative z-[10]">
        <div className="flex gap-2 p-1 bg-gray-800 text-[18px] rounded-lg text-gray-400 relative">
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
                } min-w-fit transition-all ease-in-out duration-500 `}
              />
            }
          />
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
