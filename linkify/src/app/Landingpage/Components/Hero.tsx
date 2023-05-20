"use client";
import React, { useState } from "react";
// import {
//   FaArrowLeft,
//   FaBars,
//   FaBatteryEmpty,
//   FaBatteryHalf,
//   FaFacebook,
//   FaGripLines,
//   FaHamburger,
//   FaInstagram,
//   FaLeaf,
//   FaTimes,
//   FaTwitter,
//   FaWifi,
// } from "react-icons/fa";
// import { BiBattery } from "react-icons/bi";
// import Link from "next/link";

// const Hero = () => {

//   return (
//     <div className="w-full flex items-center justify-center gap-4">
//       <div className="grid items-center justify-center">
//         <h1 className="text-lg font-bold text-white">The Linkify </h1>
//         <p>The single place for all the important links </p>
//       </div>
//       <div className={"w-[500px]  h-[500px]"}>
//         <img
//           src="https://assets-global.website-files.com/5e39e095596498a8b9624af1/5f6e93d250a6d04f4eae9f02_Backgrounds-WFU-thumbnail-(size).jpg"
//           alt=""
//         />
//       </div>
//       {/* <div className="">
//         <div className="w-[300px] h-[550px] bg-black rounded-[20px] grid place-items-center relative">
//           <div
//             className="w-[280px] h-[530px] bg-white rounded-[16px] overflow-hidden text-white"
//             style={{
//               background:
//                 "url(https://wallpapers.com/images/featured/wltnz5o1xymafqmo.jpg)",
//             }}
//           >
//             <div className="boxborder p-2 w-full h-full  flex flex-col gap-2  items-center justify-center ">
//               <div className="w-full h-4 p-4 "></div>
//               <div
//                 onClick={() => showApp(!app)}
//                 className={`icon border-2 border-gray-300/50 p-2 rounded bg-gray-300/75 shadow bg-opacity-1 absolute top-16 left-8 hover:bg-gray-300/[.9] ${
//                   app ? "hidden" : ""
//                 }`}
//               >
//                 <FaLeaf className="text-green-500 text-[30px]" />
//               </div>
//               <div
//                 className={`w-full   gap-2 items-center ${
//                   !app ? "hidden" : "flex flex-col"
//                 }`}
//               >
//                 <div className="username w-[40px] h-[40px] rounded-full bg-gray-500"></div>
//                 <FaArrowLeft
//                   className="absolute top-12 right-8 hover:text-green hover:scale-125"
//                   onClick={() => showApp(!app)}
//                 />
//                 <FaBars />
//                 <FaTimes />
//                 <h1 className="text-lg font-bold ">Username</h1>
//                 <button className="w-full text-white bg-indigo-500 p-2 rounded flex gap-4 items-center justify-center">
//                   <FaFacebook /> Facebook
//                 </button>
//                 <button className=" w-full text-white bg-indigo-500 p-2 rounded flex gap-4 items-center justify-center">
//                   <FaTwitter /> Twitter
//                 </button>
//                 <button className=" w-full text-white bg-indigo-500 p-2 rounded flex gap-4 items-center justify-center">
//                   <FaInstagram /> Instagram
//                 </button>
//                 <p>
//                   Get your link <Link href="/demo">here</Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="w-1/4 h-6 bg-black absolute top-4 rounded-[16px] hover:w-2/5 transition-all"></div>
//           <div className="absolute top-4 left-4 font-bold  w-1/4 text-center ">
//             9:27
//           </div>
//           <div className="absolute top-4 right-4 font-bold flex items-center justify-center gap-[2px] w-1/5 text-center text-sm border-b-2 border-b-black shadow">
//             <FaWifi />
//             5G
//             <BiBattery className="text-lg" />
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default Hero;
import Link from "next/link";
import Button from "./ui/Button";

import {
  FaArrowLeft,
  FaBars,
  FaBatteryEmpty,
  FaBatteryHalf,
  FaFacebook,
  FaGripLines,
  FaHamburger,
  FaInstagram,
  FaLeaf,
  FaTimes,
  FaTwitter,
  FaWifi,
} from "react-icons/fa";
import { BiBattery } from "react-icons/bi";
import { BsBatteryFull } from "react-icons/bs";

const HeroSection = () => {
  const [app, showApp] = useState<Boolean>();
  return (
    <section className=" flex justify-center items-center mb-32 relative">
      <div className="md:w-[80%] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 lg:w-2/4 grid gap-8">
          <h3 className="text-xl font-[600]">Linkify</h3>
          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold leading-tight text-gray-900 mb-8">
            Connect with your audience
          </h1>
          <p className=" mb-8 text-gray-700 lg:w-4/5">
            Linkify is the easiest way to share all your social media profiles
            with your followers. Simply add your links to Linkify, and we'll
            generate a single link that you can share anywhere.
          </p>
          <Link href="/user_auth/signup">
            <Button variant={"default"} icon={true}>
              Sign up for free
            </Button>
          </Link>
        </div>
        <div className="md:w-1/2 md:mt-0 md:flex justify-center hidden absolute top-0   md:relative ">
          <div className="absolute border  shadow rounded-md p-4  w-[100%] top-[40%] h-1/2  ">
            <div className="animate-pulse flex justify-between gap-2">
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <img
            src="https://static.vecteezy.com/system/resources/previews/015/643/003/original/online-mobile-app-payment-3d-gradient-web-illustrations-suitable-for-ui-ux-web-mobile-banner-and-infographic-vector.jpg"
            alt="Linkify app screenshot"
            width={"100%"}
          /> */}
          <div className="w-[300px] h-[550px] bg-black rounded-[24px] grid place-items-center relative overflow-hidden">
            <div className="w-[280px] h-[530px]  rounded-[16px] overflow-hidden text-white bg-gradient-to-t from-[#ec008c] to-[#fc6767] overflow-hidden ">
              <div className="boxborder p-2 w-full h-full  flex flex-col gap-2  items-center justify-center ">
                <div className="w-full h-4 p-4 "></div>
                <div
                  onClick={() => showApp(!app)}
                  className={`icon border-2 border-gray-300/50 p-2 rounded bg-gray-300/75 shadow bg-opacity-1 absolute top-16 left-8 hover:bg-gray-300/[.9] ${
                    app ? "hidden" : ""
                  }`}
                >
                  <FaLeaf className="text-green-500 text-[30px]" />
                </div>
                <div
                  className={`w-[90%] text-black transition-all  gap-2 items-center 
                    flex flex-col absolute  ${
                      app ? "left-[5%]" : "left-[-100%] "
                    }
                `}
                >
                  <div className="username w-[40px] h-[40px] rounded-full bg-gray-500"></div>
                  <FaArrowLeft
                    className="absolute  top-12 right-8 hover:text-green hover:scale-125"
                    onClick={() => showApp(!app)}
                  />

                  <h1 className="text-lg font-bold ">Username</h1>
                  <button className="w-full text-white bg-indigo-500 p-2 rounded flex gap-4 items-center justify-center">
                    <FaFacebook /> Facebook
                  </button>
                  <button className=" w-full text-white bg-indigo-500 p-2 rounded flex gap-4 items-center justify-center">
                    <FaTwitter /> Twitter
                  </button>
                  <button className=" w-full text-white bg-indigo-500 p-2 rounded flex gap-4 items-center justify-center">
                    <FaInstagram /> Instagram
                  </button>
                  <p>
                    Get your link <Link href="/demo">here</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-1/4 h-6 bg-black absolute top-4 rounded-[16px] hover:w-2/5 transition-all"></div>
            <div className="w-2/4 h-1 bg-white absolute bottom-4 rounded-[16px] hover:w-2/5 transition-all shadow animate-pulse "></div>
            <div className="w-fit absolute text-white top-4 left-4 font-bold flex text-sm text-center ">
              {new Date().getHours()} :
              {new Date().getUTCMinutes() << 10
                ? `0${new Date().getUTCMinutes()}`
                : new Date().getMinutes()}
              {new Date().getHours() < 12 ? "AM" : "PM"}
            </div>
            <div className="absolute top-4 right-4 font-bold flex  text-white items-center justify-center gap-[2px] w-1/5 text-center text-sm border-b-2 border-b-white shadow">
              <FaWifi />
              5G
              <BsBatteryFull className="text-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
