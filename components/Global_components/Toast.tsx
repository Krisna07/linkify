"use client";
import React, { useEffect, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";

interface ToastProps {
  message: string;
}
const ToastConatiner = ({ message }: ToastProps) => {
  console.log(message);
  const [err, setErr] = useState<string>(message);

  useEffect(() => {
    const timeout: any = setTimeout(() => setErr(""), 5000);
    console.log(err);
    return () => clearTimeout(timeout);
  }, [message]);

  return (
    <div
      className={`w-fit text-sm font-semibold gap-2 ${
        err ? "right-[10px] opacity-1" : "right-[-1000px] opacity-0"
      } transition-all  grid place-items-center fixed bottom-2   bg-[red] rounded-lg overflow-hidden`}
    >
      <div className="w-full h-full p-4 flex items-center gap-2 relative ">
        <FiAlertCircle /> {err}
        <div
          style={err ? { width: "100%" } : { width: "0%" }}
          className={`h-[4px] transition-all duration-[4000ms] bg-green-600 absolute bottom-0 right-0`}
        ></div>
      </div>
    </div>
  );
};

export default ToastConatiner;
