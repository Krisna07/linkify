import React, { useState } from "react";
import { BiGrid } from "react-icons/bi";
import { FaBars, FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import Button from "../../../Global_components/Button";
import NewBoardForm from "../Forms/NewBoardForm";
interface HomeNavProps {
  errorHandler?: any;
  closeAppform?: void;
  add?: boolean;
  item?: void;
  list: boolean;
  changeView: any;
}
export interface boardProps {
  title: string;
  description: string;
  type: string;
  link: string;
  image: string;
}

const Homenav = ({ list, changeView }: HomeNavProps) => {
  const [add, setAdd] = useState<boolean>(false);
  const [formdate, setFormdata] = useState<boardProps>();

  const handleForm = (item: boolean) => {
    setAdd(item);
  };

  return (
    <div className="min-w-full grid tablet:grid-cols-[4fr_230px] p-2 tablet:p-0  grid-cols-1 tablet:gap-2 gap-4 box-border place-items-center  bg-accent/50 rounded-lg sticky top-32 z-20">
      <div className=" w-full flex items-center gap-4 px-4   box-border rounded-lg ">
        <FaSearch />
        <input
          type="text"
          placeholder="Search"
          className="bg-dark px-2 p-2 outline-none w-[100%]"
        />
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
        <div className="relative ">
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
                } transition-all ease-in-out duration-500`}
              />
            }
          />
          {}
          <NewBoardForm add={add} handleForm={handleForm} />
        </div>
      </div>
    </div>
  );
};

export default Homenav;
