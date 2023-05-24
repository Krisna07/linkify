"use client";
import React, { useEffect, useState } from "react";

const CountryList = ({ setCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="shadow-bs md:w-[800px] w-full bottom-[50px] bg-white p-4 grid gap-8 rounded-[20px] absolute z-[90]">
      <h2 className=" text-xl font-semibold">Select langauge</h2>
      <ul className="w-fit grid grid-cols-4 gap-4">
        {countries.slice(0, 20).map((country) => (
          <li
            key={country.name.common}
            className="flex gap-2 p-2 rounded items-center cursor-pointer hover:shadow-bs width-fit"
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
