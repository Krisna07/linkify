// "use client";
import React, { useEffect, useRef, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import CountryList from "../../Global_components/countries";
import useOutsideClick from "../../../lib/outsideclick";

interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
}

interface GeoLocationResponse {
  address: {
    country: string;
  };
}

const FooterLinks: React.FC = () => {
  const links = [
    "About Us",
    "Services",
    "Products",
    "Contact Us",
    "FAQ",
    "Careers",
    "Blog",
    "Support",
    "Terms of Service",
    "Privacy Policy",
  ];

  return (
    <>
      {links.map((link) => (
        <a key={link} href="#" className="hover:text-gray-500 font-semibold">
          {link}
        </a>
      ))}
    </>
  );
};

const Footer: React.FC = () => {
  const [country, setCountry] = useState<Country | undefined>();
  const [countries, setCountries] = useState<Country[]>([]);
  const [langOptions, setLangOptions] = useState<boolean>(false);
  const [location, setLocation] = useState<string>();
  const countryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data: GeoLocationResponse = await response.json();
            setLocation(data.address.country);
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

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const getUserCountryName = async (place: string) => {
    const selectedCountry =
      countries && countries.find((country) => country.name.common === place);
    setCountry(selectedCountry);
    return setLangOptions(!langOptions);
  };
  useEffect(() => {
    location &&
      setCountry(
        countries &&
          countries.find((country) => country.name.common === location)
      );
  }, [location]);

  useOutsideClick(countryRef, () => setLangOptions(false));

  return (
    <footer className="w-full grid laptop:place-items-center box-border relative px-4 bg-accent/50 py-20">
      <div className="laptop:w-3/4 grid tablet:grid-cols-2 gap-4 justify-between">
        <div className="w-full flex tablet:flex-col h-fit justify-start gap-4 relative">
          <h2 className="text-lg font-bold">
            <a
              href="#"
              className="hover:text-gray-500 font-semibold flex items-center font-serif text-5xl"
            >
              Linkify <FaLeaf />
            </a>
          </h2>
          <div className="w-full inline-flex" ref={countryRef}>
            <div
              className="w-fit flex items-center gap-2 p-2 px-4 shadow-bs rounded font-semibold cursor-pointer "
              onClick={() => setLangOptions(!langOptions)}
            >
              {country && (
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  width={24}
                  height={16}
                />
              )}
              <div className="laptop:block">
                {country ? country.name.common : "English"}
              </div>
            </div>

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

        <div className="grid grid-cols-3 md:gap-32 gap-4">
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
