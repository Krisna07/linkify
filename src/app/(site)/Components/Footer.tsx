"use client";
import React, { useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import CountryList from "../../g_components/countries";
import Image from "next/image";

const Footer: React.FC = () => {
  const [country, setCountry] = useState<any>();
  const [location, setLocation] = useState();
  const [langauge, setLangauge] = useState();
  const [countries, setCountries] = useState<any>([]);
  const [langOptions, setLangOptions] = useState<boolean>();

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
  }, [country]);

  const getUserCountryName = (place: string) => {
    const selectedCountry = countries
      ? countries.find((country: any) => country.name.common === place)
      : "";
    return setCountry(selectedCountry);
  };
  useEffect(() => {
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
    return getLocation();
  }, []);
  // console.log(country);
  return (
    <footer className="w-full py-4 grid place-items-center box-border relative">
      <div className="laptop:w-3/4  flex gap-4 justify-between">
        <div className="flex flex-col  justify-start gap-4 ">
          <h2 className="text-lg font-bold">
            <a
              href="#"
              className=" hover:text-gray-500 font-semibold flex items-center"
            >
              Linkify <FaLeaf />
            </a>
          </h2>
          <div className="w-full inline-flex relative">
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
                <div className="laptop:block hidden">
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

        <div className=" tablet:grid grid-cols-3 md:gap-32 gap-4 hidden">
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
