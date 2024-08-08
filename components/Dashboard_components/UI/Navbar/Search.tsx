import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { boardProps } from "../../utils/Interfaces";
import { FaX } from "react-icons/fa6";
interface SearchProps {
  boards?: boardProps[];
  handleSearch?: any;
}

const Search = ({ boards, handleSearch }: SearchProps) => {
  const [search, setSearch] = useState<boardProps[]>([]);
  const [selectedSearch, setSelectedSearch] = useState<string[]>([]);
  const [selectedBoards, setSelectedBoards] = useState<boardProps[]>();
  const searchOptionsRef = useRef(null);

  const selectSearch = (e: React.MouseEvent<HTMLDivElement>) => {
    if (selectedSearch.includes(e.currentTarget.innerText)) {
      return;
    }
    setSelectedSearch([...selectedSearch, e.currentTarget.innerText]);
    setSearch([]);
  };

  useEffect(() => {
    const foundBoards: boardProps[] | undefined = boards?.filter(
      (board: boardProps) => selectedSearch.includes(board.title)
    );
    handleSearch(foundBoards);
  }, [selectedSearch]);

  const handlesearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const notSelected = boards?.filter(
      (board: boardProps) => !selectedSearch.includes(board.title)
    );

    const match: boardProps[] | undefined = value
      ? notSelected?.filter((board: boardProps) =>
          board.title.toLowerCase().includes(value.toLowerCase())
        )
      : [];
    match && setSearch(match);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.value = "";
  };

  return (
    <div className="group w-full flex items-center gap-4 px-4 p-1   box-border rounded-lg relative z-20  ">
      <FaSearch size={24} />
      {selectedSearch &&
        selectedSearch.map((search) => (
          <span
            key={search}
            className=" flex  items-center gap-2  px-2 py-1 whitespace-nowrap bg-silver text-dark rounded-md leading-[110%]"
          >
            {search}{" "}
            <FaX
              size={12}
              onClick={() =>
                setSelectedSearch(
                  selectedSearch.filter((item) => item !== search)
                )
              }
              className="text-accent hover:text-[red]/50  font-bold transition-all duration-300"
            />
          </span>
        ))}
      <div className="w-full relative">
        <input
          type="text"
          placeholder={"Search"}
          onBlur={handleBlur}
          onChange={handlesearch}
          className="bg-dark px-2 p-2 outline-none w-[100%] focus:rounded-lg"
        />
        {search.length > 0 && (
          <div
            className="absolute top-[110%]   divide-y-[2px] divide-solid divide-tahiti rounded-md text-lg grid  text-left overflow-hidden"
            ref={searchOptionsRef}
          >
            {search.map((item: boardProps) => (
              <div
                key={item.title}
                className="w-full p-2 px-4 bg-accent hover:bg-accent/[90%] hover:text-tahiti transition-all duration-300 cursor-pointer"
                onClick={selectSearch}
              >
                {item.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
