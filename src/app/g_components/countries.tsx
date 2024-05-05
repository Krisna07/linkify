"use client";
import React, { useEffect, useState } from "react";

const CountryList = ({
  countries,
  getCountry,
  setLangOptions,
  langOptions,
}: any) => {
  return (
    <div className="shadow-bs md:w-[800px] w-[500px] h-[600px] overflow-scroll scrollbar-hide bottom-[50px] bg-white text-black p-4 grid gap-8 rounded-[20px] absolute z-[90]">
      <h2 className=" text-xl font-semibold">Select langauge</h2>
      <ul className="w-fit grid md:grid-cols-4 grid-cols-3 gap-4">
        {countries.map((country: any) => (
          <li
            key={country.name.common}
            className="flex gap-2 p-2 rounded items-center cursor-pointer hover:shadow-bs width-fit"
            onClick={() => {
              getCountry(country.name.common);
              setLangOptions(!langOptions);
            }}
          >
            <img
              src={country.flags.png}
              alt={country.name.common}
              width={24}
              height={16}
            />
            {country.name.common}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
