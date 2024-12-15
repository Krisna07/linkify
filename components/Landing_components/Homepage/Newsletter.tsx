"use client";
import React, { useState } from "react";
import Button from "../../Global_components/Button";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <div className="w-full grid place-items-center  py-16 text-black ">
      <div className="w-full grid place-items-center text-center p-4">
        <h2 className="w-fit  text-2xl font-[700] mb-4">
          Subscribe to our Newsletter
        </h2>
        <form
          className="laptop:w-[800px] w-full flex gap-4 md:flex-row flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className=" w-full py-2 px-4 text-dark rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow text-slate-900 bg-gray-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant={"primary"}
            size={"default"}
            children={"Subscribe"}
            className="w-fit"
            icon={false}
          />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
