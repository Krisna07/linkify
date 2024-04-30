"use client";
import React, { useState } from "react";
import Input from "../Formcomponents/Input";
import { FaLock } from "react-icons/fa";

const verify = () => {
  const [code, setCode] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCode(value);
  };

  return (
    <div className="w-fit ">
      <h2>Verify the email</h2>
      <Input
        label=""
        name="code"
        type="string"
        placeholder="code"
        icon={<FaLock />}
        color="green"
        data={code}
        onchange={handleInputChange}
      />
    </div>
  );
};

export default verify;
