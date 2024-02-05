"use client";
import React, { useState } from "react";

interface input {
  lable?: string;
  icon?: any;
  color?: string;
  placeholder?: string;
  data?: string;
}

const Input = ({ lable, icon, color, placeholder, data }: input) => {
  const [value, setValue] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  };
  return (
    <label className={`w-fit p-2 bg-${color} grid gap-2`}>
      <span className="text-[16px] font-semibold">{lable}</span>

      <div className="relative">
        <input
          type="text"
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder={placeholder}
          onChange={onchange}
          className="outline-none shadow-[0_0_4px_0_gray] px-2 py-1 rounded"
        />
        <div
          className={`absolute right-[2px] top-[2px]  rounded-full text-[12px] p-2 ${
            active ? "shadow bg-green-300 " : "shadow-none bg-gray-300"
          }`}
        >
          {icon}
        </div>
      </div>
    </label>
  );
};

export default Input;
