"use client";
import React, { useState, ChangeEvent, useEffect } from "react";

interface InputProps {
  label: string;
  icon?: React.ReactNode;
  color?: string;
  placeholder?: string;
  type?: string;
  secondIcon?: any;
  data?: string | number | readonly string[] | undefined;
  onchange: any;
}

const Input: React.FC<InputProps> = ({
  label,
  icon,
  color = "gray",
  placeholder,
  type,
  secondIcon,
  data,
  onchange,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [inputtype, setType] = useState<boolean>(false);
  useEffect(() => {
    data ? setActive(true) : "";
  });

  return (
    <label className={`w-fit p-2 bg-${color} grid gap-2`}>
      <span className="text-[16px] font-semibold">{label}</span>

      <div className="relative">
        <input
          type={inputtype ? "text" : type}
          name={label.toLowerCase()}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder={placeholder}
          value={data}
          onChange={onchange}
          autoComplete="false"
          className="outline-none shadow-[0_0_4px_0_gray] px-2 py-1 rounded"
        />

        <div className="absolute right-0 top-0 h-full bg-white px-2 grid place-items-center">
          <div
            className={` right-[2px] top-[2px] rounded-full text-[12px] p-2 ${
              active ? "shadow bg-green-300" : "shadow-none bg-gray-300"
            }`}
            onClick={() => setType(!inputtype)}
          >
            {inputtype ? secondIcon : icon}
          </div>
        </div>
      </div>
    </label>
  );
};

export default Input;
