import React from "react";
import Input from "./Formcomponents/Input";
import { FaUser } from "react-icons/fa";
import { BsEyeSlash } from "react-icons/bs";

interface pageProps {}

export default function page({}: pageProps) {
  return (
    <div className="w-full h-full grid place-items-center">
      <h2 className="font-bold">Components</h2>
      <h3>Input</h3>
    </div>
  );
}
