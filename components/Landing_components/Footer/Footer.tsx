"use client";
import React, { useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";

import Image from "next/image";
import CountryList from "../../Global_components/countries";

const Footer: React.FC = () => {
  const [country, setCountry] = useState<any>();
  const [location, setLocation] = useState();
  const [langauge, setLangauge] = useState();
  const [countries, setCountries] = useState<any>([]);
  const [langOptions, setLangOptions] = useState<boolean>();
  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [country]);

  const getUserCountryName = (place: string) => {
    const selectedCountry = countries
      ? countries.find((country: any) => country.name.common === place)
      : "";
    return setCountry(selectedCountry);
  };
  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            console.log(data.address.country);
            getUserCountryName(data.address.country);
          } catch (error) {
            console.error("Error getting country:", error);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by your browser.");
    }
  };
  useEffect(() => {
    return getLocation();
  }, []);
  // console.log(country);
  return (
    <footer className="w-full  grid laptop:place-items-center box-border relative px-4 bg-accent/50 py-20 ">
      <div className="laptop:w-3/4  grid tablet:grid-cols-2 gap-4 justify-between">
        <div className="flex tablet:flex-col h-fit  justify-start gap-4 ">
          <h2 className="text-lg font-bold">
            <a
              href="#"
              className={`hover:text-gray-500 font-semibold flex items-center font-serif text-5xl`}
            >
              Linkify <FaLeaf />
            </a>
          </h2>
          <div className="w-full inline-flex ">
            {
              <div
                className="w-fit flex items-center gap-2 p-2 px-4 shadow-bs rounded font-semibold"
                onClick={() => setLangOptions(!langOptions)}
              >
                <img
                  src={country && country.flags.png}
                  alt={country && country.name.common}
                  width={24}
                  height={16}
                />
                <div className="laptop:block ">
                  {country ? country.name.common : "English"}
                </div>
              </div>
            }

            {langOptions && (
              <CountryList
                countries={countries}
                getCountry={getUserCountryName}
                setLangOptions={setLangOptions}
                langOptions={langOptions}
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 md:gap-32 gap-4 ">
          <a href="#" className=" hover:text-gray-500 font-semibold">
            About Us
          </a>
          <a href="#" className=" hover:text-gray-500 font-semibold">
            Services
          </a>
          <a href="#" className=" hover:text-gray-500 font-semibold">
            Products
          </a>
          <a href="#" className=" hover:text-gray-500 font-semibold">
            Contact Us
          </a>
          <a href="#" className=" hover:text-gray-500 font-semibold">
            FAQ
          </a>
          <a href="#" className=" hover:text-gray-500 font-semibold">
            Careers
          </a>
          <a href="#" className=" hover:text-gray-500 font-semibold">
            Blog
          </a>
          <a href="#" className=" hover:text-gray-500 font-semibold">
            Support
          </a>
          <a href="#" className=" hover:text-gray-500 font-semibold">
            Terms of Service
          </a>
          <a href="#" className=" hover:text-gray-500 font-semibold">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
