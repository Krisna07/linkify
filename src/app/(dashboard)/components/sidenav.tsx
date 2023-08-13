import React from "react";

interface sidenavProps {}

export default function Sidenav({}: sidenavProps) {
  return (
    <div className=" py-40">
      <div className="w-fit  p-4   grid gap-4 text-center border-r border-gray-600">
        <h2 className="text-xl font-semibold">Your selected items</h2>
        <div className="list-none grid gap-2 ">
          <li>option1</li>
          <li>option1</li>
          <li>option1</li>
          <li>option1</li>
          <li>option1</li>
        </div>
      </div>
    </div>
  );
}
