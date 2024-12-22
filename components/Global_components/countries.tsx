"use client";
import React, { useEffect, useRef, useState } from "react";

import { FaSearch } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const CountryList = ({
  countries,
  getCountry,
  setLangOptions,
  langOptions,
}: any) => {
  const [focus, setFocus] = useState(false);
  const countriesRef = useRef<HTMLDivElement>(null);

  const [showCountries, setShowCountries] = useState(countries);

  const searchCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    !e.target.value && setShowCountries(countries);
    const matchedCountries = countries.filter((country: any) =>
      country.name.common.toLowerCase().match(e.target.value.toLowerCase())
    );

    return setShowCountries(matchedCountries);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) {
        setLangOptions(false);
      }
    });

    if (countriesRef.current) {
      observer.observe(countriesRef.current);
    }

    return () => {
      if (countriesRef.current) {
        observer.unobserve(countriesRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={countriesRef}
      className="shadow-bs laptop:w-[800px] tablet:min-w-[500px]  w-full h-[600px] transition-all ease-in-out duration-300 mx-4 overflow-scroll scrollbar-hide bottom-full bg-white text-dark px-4 grid gap-8 rounded-[20px] absolute z-[90] left-0 tablet:left-auto  "
    >
      <div className="w-full overflow-x-scroll scrollbar-hide  ">
        <div className="w-full flex flex-col tablet:flex-row items-start gap-2 sticky top-0 py-4 bg-white">
          <h2 className=" text-xl font-semibold">Select Location</h2>
          <div
            className=" flex items-center justify-center  rounded-full "
            onClick={() => setFocus(true)}
          >
            <input
              onFocus={() => setFocus(true)}
              onBlur={(e) => {
                setFocus(false);
                e.target.value = "";
              }}
              onInput={searchCountry}
              type="text"
              className={` text-dark p-1 px-2  transition-all ease-in-out duration-500 ${
                focus
                  ? "tablet:w-[100px] w-[200px] bg-dark/25 "
                  : "w-0 bg-transparent "
              } outline-none`}
            />
            <div className="p-2 bg-dark/25 rounded-e">
              <FaSearch className=" " />
            </div>
          </div>
        </div>
        <ul className="w-full grid  grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4 text-dark">
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
