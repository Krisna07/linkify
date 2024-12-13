import React from "react";

import { motion } from "framer-motion";
import Button from "../../../Global_components/Button";
import Counter from "./Counter";

import { Feature } from "./features";

const Featurecards = (feature: Feature) => {
  return (
    <motion.div
      initial={{ opacity: "0", y: 50 }}
      whileInView={{
        y: 0,
        opacity: "1",
      }}
      transition={{
        type: "bounce",
        damping: 10,
        stiffness: 100,
      }}
      viewport={{ once: true }}
      style={{ backgroundColor: `${feature.background}` }}
      className="min-w-full h-[80vh]  text-dark grid group overflow-hidden "
    >
      <div className="text-left grid ">
        <h2 className="text-3xl p-4 group-hover:underline font-semibold">
          {feature.title}
        </h2>
      </div>
      <motion.div className="w-full bg-[#51c49d]/75  box-border p-4  transition-all ease-in-out grid place-self-end translate-y-[200px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="text-lg font-bold mb-2 flex items-center w-full relaxed justify-between">
          {feature.description}
        </span>
        <span className=" text-xl font-bold mb-2 flex items-center gap-4 text-gray-400">
          <Counter number={1222333} />
          <span>{feature.icon}</span>
        </span>
        <Button
          children="Discover more"
          variant={"default"}
          size={"lg"}
          icon={true}
        />
      </motion.div>
    </motion.div>
  );
};

export default Featurecards;

// <motion.div
//   initial={{ left: -200 * features.indexOf(feature) }}
//   whileInView={{ left: 0 }}
//   transition={{
//     type: "bounce",
//     damping: 10,
//     stiffness: 100,
//   }}
//   viewport={{ once: true }}
//   className="group relative min-h-fit p-4 box-border bg-silver hover:bg-bermuda  text-dark text-light rounded   transition-all duration-300 hover:shadow-lg"
//   key={feature.id}
// >
//   <h3 className="w-full text-lg font-bold mb-2 flex items-center relaxed justify-between">
//     {feature.title}
//     <span className="group-hover:scale-[1.1] group-hover:text-accent ">
//       {" "}
//       {feature.icon}
//     </span>
//   </h3>
//   <p className="text-slate-200 font-600 text-sm">
//     {feature.description}
//   </p>
// </motion.div>
