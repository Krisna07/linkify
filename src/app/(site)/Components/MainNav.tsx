import Button from "@/app/g_components/Button";
import React from "react";

const MainNav = () => {
  return (
    <div className="tablet:w-[80%] w-full px-8 py-2 bg-gray-800/75 flex items-center justify-between rounded-full text-white sticky top-0 z-10 shadow-md">
      <span className="text-white font-bold text-xl">Linkify</span>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-4" role="group">
        <Button children="Login" variant={"default"} size={"default"} />
        <Button children="Sign Up" variant={"default"} size={"default"} />
      </div>
    </div>
  );
};

export default MainNav;
