"use client";
import React, { useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import CountryList from "./ui/countries";

const Footer: React.FC = () => {
  const [country, setCountry] = useState();
  const [location, setLocation] = useState();
  const [langauge, setLangauge] = useState();
  const [countries, setCountries] = useState([]);
  const [langOptions, setLangOptions] = useState();
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
  const getUserCountryName = (place: any) => {
    const selectedCountry = countries
      ? countries.find((county: any) => county.name.common === place)
      : "";
    return setCountry(selectedCountry);
  };
  useEffect(() => {
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
            const countryCode = data.address.country_code;

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
  }, []);

  return (
    <footer className="w-full  text-black py-4 grid place-items-center">
      <div className="w-3/4  flex items-center justify-between">
        <div className="grid  justify-start gap-4">
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
                  src={country ? country.flags.png : ""}
                  alt={country ? country.name.common : ""}
                  width={24}
                  height={16}
                />
                {country ? country.name.common : "English"}
              </div>
            }

            {langOptions ? (
              <CountryList
                countries={countries}
                getCountry={getUserCountryName}
                setLangOptions={setLangOptions}
                langOptions={langOptions}
              />
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
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
        </div>

        <div className="flex flex-col gap-4">
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
