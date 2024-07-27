import React from "react";
import { RiAddCircleFill } from "react-icons/ri";
import Button from "../../../../components/Global_components/Button";

const Templates = () => {
  return (
    <div className="tablet:w-[300px] w-full  tablet:h-[500px] bg-gradient-to-r from-indigo-800 to-slate-800 rounded-lg p-4 grid place-items-center ">
      <div className="w-full grid  place-items-center gap-2">
        <div className="w-[40px] h-[40px] rounded-full shadow-bs"></div>
        Username
      </div>
      <div className="w-full grid gap-4 ">
        <div className="grid p-2 place-items-center shadow-bs">Link-1</div>
        <div className="grid p-2 place-items-center shadow-bs">Link-1</div>
        <div className="grid p-2 place-items-center shadow-bs">Link-1</div>
      </div>
      <Button
        children="more"
        size={"sm"}
        variant={"default"}
        rightIcon={<RiAddCircleFill />}
      />
    </div>
  );
};

export default Templates;
