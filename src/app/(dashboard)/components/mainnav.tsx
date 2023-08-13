import React from "react";
import { FaPeopleArrows, FaSearch, FaUserFriends } from "react-icons/fa";

interface mainnavProps {}

export default function Mainnav({}: mainnavProps) {
  return (
    <div className="w-full flex items-center justify-center bg-gray-800 p-2 gap-4">
      <div className="flex items-center p-2 px-4 bg-gray-600 rounded-full gap-4">
        <FaSearch />
        <input
          type="text"
          className="bg-gray-600 outline-none border-none"
          placeholder="search"
        />
      </div>
      <div className="flex items-center gap-4">
        <div>
          <FaUserFriends />
        </div>
        <div>this is main nav</div>
      </div>
    </div>
  );
}
