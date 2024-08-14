import React, { ChangeEvent } from "react";

interface LabelProps {
  label: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function FormLabel({ label, value, handleChange }: LabelProps) {
  return (
    <label htmlFor={value} className="w-full grid gap-1 border-box">
      <span className="mx-2 font-semibold">{label}</span>
      <input
        type="text"
        placeholder={`Enter the ${label.toLowerCase()}`}
        className="px-2 py-1 rounded-md shadow-bs outline-none border-inset border-box"
        name={value}
        onChange={handleChange}
      />
    </label>
  );
}
