// "use client";

// import { MotionValue, motion, useSpring, useTransform } from "framer-motion";

// import { useEffect, useState } from "react";

// interface CounterProps {
//   value: number;
//   size?: number;
// }

// export default function Counter({ value, size }: CounterProps) {
//   const [counter, setCounter] = useState<string[]>([]);
//   const digitSize = size ? size + 20 : 30 + 20;
//   useEffect(() => {
//     if (value !== undefined) {
//       setCounter(Math.abs(value).toString().padStart(2, "0").split(""));
//     }
//   }, [value]);

//   let animatedValue = useSpring(value);
//   useEffect(() => {
//     animatedValue.set(value);
//   }, [animatedValue, value]);

//   const getPlace = (array: string[], place: string) => {
//     return Math.pow(10, array.reverse().indexOf(place));
//   };
//   // console.log(getPlace(counter, "0"));
//   console.log(counter);
//   return (
//     <div className="flex flex-row-reverse">
//       {counter.map((num, index) => (
//         <div
//           key={index}
//           style={{ height: `${digitSize}px`, fontSize: `${digitSize}px` }}
//           className="flex  ring-2 ring-red-500 "
//         >
//           <div style={{ width: `${digitSize}px` }} className="relative ">
//             {Array.from(Array(10).keys()).map((i) => (
//               <Number
//                 place={Math.pow(10, counter.indexOf(num))}
//                 mv={animatedValue}
//                 number={i}
//                 key={i}
//                 size={digitSize}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// function Number({
//   place,
//   mv,
//   number,
//   size,
// }: {
//   place: number;
//   mv: MotionValue;
//   number: number;
//   size: number;
// }) {
//   let y = useTransform(mv, (latest) => {
//     let height = size;
//     let placeValue = (latest / place) % 10;
//     let offset = (10 + number - placeValue) % 10;

//     let memo = offset * height;

//     if (offset > 5) {
//       memo = height;
//     }

//     return memo;
//   });

//   return (
//     <motion.span
//       style={{ y }}
//       className=" inset-0 flex justify-center py-[20px]  "
//     >
//       {number}
//     </motion.span>
//   );
// }
