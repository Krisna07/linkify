"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import marquee from "marquee";
import { FaAndroid, FaCcStripe } from "react-icons/fa";

const SponsorsSection = () => {
  const sponsers = [
    {
      name: "Company A",
      logoUrl: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={"200px"}
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 468 222.5"
        >
          <g fill="none">
            <path
              d="M159.5 99.5l6.2-14.4c6.7 5 15.6 7.6 24.4 7.6 6.5 0 10.6-2.5 10.6-6.3-.1-10.6-38.9-2.3-39.2-28.9-.1-13.5 11.9-23.9 28.9-23.9 10.1 0 20.2 2.5 27.4 8.2L212 56.5c-6.6-4.2-14.8-7.2-22.6-7.2-5.3 0-8.8 2.5-8.8 5.7.1 10.4 39.2 4.7 39.6 30.1 0 13.8-11.7 23.5-28.5 23.5-12.3 0-23.6-2.9-32.2-9.1m237.9-19.6c-3.1 5.4-8.9 9.1-15.6 9.1-9.9 0-17.9-8-17.9-17.9 0-9.9 8-17.9 17.9-17.9 6.7 0 12.5 3.7 15.6 9.1l17.1-9.5c-6.4-11.4-18.7-19.2-32.7-19.2-20.7 0-37.5 16.8-37.5 37.5s16.8 37.5 37.5 37.5c14.1 0 26.3-7.7 32.7-19.2l-17.1-9.5zM228.8 2.5h21.4v104.7h-21.4zm194.1 0v104.7h21.4V75.8l25.4 31.4h27.4l-32.3-37.3 29.9-34.8h-26.2L444.3 64V2.5zM313.8 80.1c-3.1 5.1-9.5 8.9-16.7 8.9-9.9 0-17.9-8-17.9-17.9 0-9.9 8-17.9 17.9-17.9 7.2 0 13.6 4 16.7 9.2v17.7zm0-45v8.5c-3.5-5.9-12.2-10-21.3-10-18.8 0-33.6 16.6-33.6 37.4 0 20.8 14.8 37.6 33.6 37.6 9.1 0 17.8-4.1 21.3-10v8.5h21.4v-72h-21.4z"
              fill="#000"
            />
            <path
              d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z"
              fill="#E01E5A"
            />
            <path
              d="M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z"
              fill="#36C5F0"
            />
            <path
              d="M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z"
              fill="#2EB67D"
            />
            <path
              d="M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z"
              fill="#ECB22E"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "Company B",
      logoUrl: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={"200px"}
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 468 222.5"
        >
          <g>
            <path d="M414,113.4c0-25.6-12.4-45.8-36.1-45.8c-23.8,0-38.2,20.2-38.2,45.6c0,30.1,17,45.3,41.4,45.3   c11.9,0,20.9-2.7,27.7-6.5v-20c-6.8,3.4-14.6,5.5-24.5,5.5c-9.7,0-18.3-3.4-19.4-15.2h48.9C413.8,121,414,115.8,414,113.4z    M364.6,103.9c0-11.3,6.9-16,13.2-16c6.1,0,12.6,4.7,12.6,16H364.6z" />
            <path d="M301.1,67.6c-9.8,0-16.1,4.6-19.6,7.8l-1.3-6.2h-22v116.6l25-5.3l0.1-28.3c3.6,2.6,8.9,6.3,17.7,6.3   c17.9,0,34.2-14.4,34.2-46.1C335.1,83.4,318.6,67.6,301.1,67.6z M295.1,136.5c-5.9,0-9.4-2.1-11.8-4.7l-0.1-37.1   c2.6-2.9,6.2-4.9,11.9-4.9c9.1,0,15.4,10.2,15.4,23.3C310.5,126.5,304.3,136.5,295.1,136.5z" />
            <polygon points="223.8,61.7 248.9,56.3 248.9,36 223.8,41.3  " />
            <rect x="223.8" y="69.3" width="25.1" height="87.5" />
            <path d="M196.9,76.7l-1.6-7.4h-21.6v87.5h25V97.5c5.9-7.7,15.9-6.3,19-5.2v-23C214.5,68.1,202.8,65.9,196.9,76.7z" />
            <path d="M146.9,47.6l-24.4,5.2l-0.1,80.1c0,14.8,11.1,25.7,25.9,25.7c8.2,0,14.2-1.5,17.5-3.3V135   c-3.2,1.3-19,5.9-19-8.9V90.6h19V69.3h-19L146.9,47.6z" />
            <path d="M79.3,94.7c0-3.9,3.2-5.4,8.5-5.4c7.6,0,17.2,2.3,24.8,6.4V72.2c-8.3-3.3-16.5-4.6-24.8-4.6   C67.5,67.6,54,78.2,54,95.9c0,27.6,38,23.2,38,35.1c0,4.6-4,6.1-9.6,6.1c-8.3,0-18.9-3.4-27.3-8v23.8c9.3,4,18.7,5.7,27.3,5.7   c20.8,0,35.1-10.3,35.1-28.2C117.4,100.6,79.3,105.9,79.3,94.7z" />
          </g>
        </svg>
      ),
    },
    {
      name: "Company C",
      logoUrl: "",
    },
    {
      name: "Company D",
      logoUrl: "",
    },
    {
      name: "Company E",
      logoUrl: "",
    },
    {
      name: "Company F",
      logoUrl: "",
    },
    {
      name: "Company G",
      logoUrl: "",
    },
    {
      name: "Company H",
      logoUrl: "",
    },
    {
      name: "Company I",
      logoUrl: "",
    },
    {
      name: "Company J",
      logoUrl: "",
    },
  ];

  useEffect(() => {
    const marqueeElem = document.getElementById("marquee");
    marquee(marqueeElem, 100, 1000, 0);
  }, []);

  return (
    <div className=" w-[100%] overflow-hidden grid gap-8">
      <div className="w-full text-center grid place-items-center">
        <h2 className=" text-center text-3xl font-bold mb-8">Our Sponsors</h2>
        <p className="w-[60%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          sint eaque incidunt, dolor non a beatae corporis rem laborum nisi sed
          officia soluta vel nulla, aliquam deserunt repudiandae nam in facilis
          maiores enim numquam eligendi. Nobis fugit, mollitia eligendi tenetur
          fuga debitis cum corrupti labore necessitatibus corporis eum saepe
          qui.
        </p>
      </div>
      <div className="marquee-container overflow-hidden mx-auto box-border">
        <div className="marquee flex animate-marquee">
          {sponsers.map((sponsor) => (
            <div className="sponsor mr-16" key={sponsor.name}>
              {sponsor.logoUrl}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default SponsorsSection;
