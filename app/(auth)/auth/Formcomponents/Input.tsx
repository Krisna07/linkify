"use client";
import React, { useState, useEffect } from "react";

interface InputProps {
  label: string;
  name?: string;
  icon?: React.ReactNode;
  color?: string;
  placeholder?: string;
  type?: string;
  secondIcon?: any;
  data?: string | number | readonly string[] | undefined;
  onchange?: any;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  icon,
  name,
  color = "gray",
  placeholder,
  type,
  secondIcon,
  data,
  onchange,
  error,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [inputType, setType] = useState<boolean>(false);
  useEffect(() => {
    data ? setActive(true) : "";
  });

  return (
    <label className={`w-full p-2 bg-${color} grid gap-2 rounded-md`}>
      <span className="text-[16px] font-semibold">{label}</span>

      <div
        className={`relative ${
          active
            ? "shadow-[2px_2px_4px_0_green] -translate-y-[2px]"
            : "shadow-bs translate-y-0"
        } rounded-md overflow-hidden transition-all ease-in-out duration-300`}
      >
        <input
          type={inputType ? "text" : type}
          name={name ? name : label.toLocaleLowerCase()}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder={placeholder}
          value={data}
          onChange={onchange}
          autoComplete="false"
          className={`w-full outline-none  px-2 py-1 `}
        />

        <div className="absolute right-0 top-0 h-full  px-2 grid place-items-center">
          <div
            className={` right-[2px] top-[2px] rounded-full text-[12px] p-2 ${
              active ? " bg-green-300" : "shadow-none bg-gray-300"
            }`}
            onClick={() => setType(!inputType)}
          >
            {secondIcon ? (inputType ? secondIcon : icon) : icon}
          </div>
        </div>
      </div>
    </label>
  );
};

export default Input;
