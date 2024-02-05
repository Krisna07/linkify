import React from "react";
import { BsEyeSlash } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Input from "../Formcomponents/Input";
import Button from "@/app/g_components/Button";

const page = () => {
  return (
    <div className="w-fit p-2 px-4 bg-gradient-to-tr from-indigo-400 to-blue-300 grid place-items-center">
      <div className="w-full px-2 text-lg font-bold">
        {" "}
        <h3>Sigin</h3>
      </div>
      <Input lable="Username" placeholder="Username" icon={<FaUser />} />
      <Input lable="Password" placeholder="Password" icon={<BsEyeSlash />} />
      <Button children="Submit" variant={"default"} size={"default"} />
    </div>
  );
};

export default page;
