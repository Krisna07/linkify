// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { FaBars, FaLeaf, FaTimes } from "react-icons/fa";
// import Button from "../Global_components/Button";
// import { usePathname } from "next/navigation";
// import { RiAccountBoxFill } from "react-icons/ri";
// import { BiSolidUserAccount } from "react-icons/bi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   const NavItems = [
//     {
//       name: "Home",
//       link: "/",
//     },

//     {
//       name: "Pricings",
//       link: "/pricings",
//     },

//     {
//       name: "About",
//       link: "/about",
//     },
//     {
//       name: "Contact",
//       link: "/contact",
//     },
//   ];

//   const path = usePathname();

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflowY = "hidden";
//     } else {
//       document.body.style.overflowY = "";
//     }
//   }, [isOpen]);

//   // const getSize = () => {
//   //   const widthBody = document.body.getBoundingClientRect().width;
//   //   if (widthBody > 650) {
//   //     setIsOpen(false);
//   //   }
//   //   // console.log(widthBody);
//   // };

//   const [move, setMove] = useState<number>();
//   const [bar, setBar] = useState<number>();

//   const hoverNav = (e: any) => {
//     const menu = e.target;
//     const menuWidth: any = menu?.getBoundingClientRect();
//     const parent = e.target.offsetParent;
//     const parentx: any = parent?.getBoundingClientRect();
//     setMove(menuWidth.x - parentx.x);
//     setBar(menuWidth.width);
//   };

//   return (
//     <nav
//       className={`bg-gray-800 text-white  grid place-items-center min-w-full top-0 shadow z-[999] realtive`}
//     >
//       <div className="w-full h-full ">
//         <div className="h-full tablet:flex items-center justify-between  hidden  p-4">
//           <div className="flex items-center">
//             <Link href="/" onClick={() => (isOpen ? setIsOpen(!isOpen) : "")}>
//               <span className=" text-lg font-bold flex items-center gap-2">
//                 Linkify <FaLeaf className="text-green-500" />
//               </span>
//             </Link>
//           </div>
//           <div className="w-fit hidden relative tablet:block ">
//             <ul
//               className="flex items-center space-x-6"
//               onMouseLeave={() => setBar(0)}
//             >
//               {NavItems.map((menu) => (
//                 <li key={menu.name} onMouseOver={hoverNav}>
//                   <Link
//                     href={`${menu.link}`}
//                     style={path == menu.link ? { color: "#9cd7e5" } : {}}
//                     className="relative font-semibold hover:text-gray-500 active:text-gray-500 relative grid place-items-center"
//                   >
//                     {menu.name}
//                     {path == menu.link ? (
//                       <div
//                         className={`absolute  -bottom-[2px] w-full h-[2px] bg-white transition-all px-[4px] ${
//                           bar ? "hidden" : ""
//                         } `}
//                       ></div>
//                     ) : (
//                       ""
//                     )}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//             <div
//               style={{ left: `${move}px`, width: `${bar}px` }}
//               className={`absolute h-[2px] bg-white transition-all px-[4px] ${
//                 !bar ? "hidden" : ""
//               }`}
//             ></div>
//           </div>
//           <div className="hidden tablet:block">
//             <Link href="/auth/signin">
//               <Button
//                 children={"Sign in"}
//                 variant={"default"}
//                 size={"sm"}
//                 icon={false}
//               />
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`w-full ${
//           isOpen ? "min-h-[100vh]" : "min-h-[0vh]"
//         } transition-[min-height] flex flex-col absolute top-0 tablet:hidden p-4 bg-gray-800 overscroll-none `}
//       >
//         <div className="w-full h-fit flex items-center justify-between  ">
//           <Link href="/" onClick={() => (isOpen ? setIsOpen(!isOpen) : "")}>
//             <span className=" text-lg font-bold flex items-center gap-2">
//               Linkify <FaLeaf className="text-green-500" />
//             </span>
//           </Link>

//           <button
//             className=" text-gray-500 focus:outline-none "
//             onClick={toggleNavbar}
//           >
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//         {isOpen && (
//           <div className="w-full h-full  flex flex-col place-items-center space-y-3 text-3xl ">
//             {NavItems.map((menu) => (
//               <span
//                 className=" flex items-center py-2 "
//                 key={menu.name}
//                 onClick={() => (isOpen ? setIsOpen(!isOpen) : "")}
//               >
//                 <Link
//                   href={`${menu.link}`}
//                   className="font-semibold hover:text-gray-500 active:text-gray-500"
//                 >
//                   {menu.name}
//                 </Link>
//               </span>
//             ))}
//             <Link
//               href={"/auth/signin"}
//               onClick={() => (isOpen ? setIsOpen(!isOpen) : "")}
//               className=" font-semibold hover:text-gray-500 active:text-gray-500 flex items-center gap-2 "
//             >
//               Sign in <BiSolidUserAccount />
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
