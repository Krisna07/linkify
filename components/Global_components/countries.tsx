"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { FaSearch } from "react-icons/fa";

const CountryList = ({
  countries,
  getCountry,
  setLangOptions,
  langOptions,
}: any) => {
  const [focus, setFocus] = useState(false);

  const [showCountries, setShowCountries] = useState(countries);

  const searchCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    const matchedCountries = countries.filter((country: any) =>
      country.name.common.toLowerCase().match(e.target.value.toLowerCase())
    );

    return setShowCountries(matchedCountries);
  };
  return (
    <div className="shadow-bs laptop:w-[800px]  h-[600px] mx-4 overflow-scroll scrollbar-hide bottom-full bg-white text-dark px-4 grid gap-8 rounded-[20px] absolute z-[90] left-0 tablet:left-auto  ">
      <div className="w-full overflow-x-scroll scrollbar-hide  ">
        <div className="w-full flex items-center gap-2 sticky top-0 py-4 bg-white">
          <h2 className=" text-xl font-semibold">Select langauge</h2>
          <div
            className="bg-dark/25 flex items-center gap-2 px-4 rounded-full p-1"
            onClick={() => setFocus(true)}
          >
            <input
              onFocus={() => setFocus(true)}
              onInput={searchCountry}
              type="text"
              className={`shadow-bs  text-dark bg-transparent ${
                focus ? "w-[100px]" : "w-0"
              } outline-none`}
            />
            <FaSearch className="" />
          </div>
        </div>
        <ul className="w-fit grid  grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4 text-dark">
          {showCountries.map((country: any) => (
            <li
              key={country.name.common}
              className="flex gap-2 p-2 rounded items-center cursor-pointer hover:shadow-bs min-w-fit "
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
    </div>
  );
};

export default CountryList;
