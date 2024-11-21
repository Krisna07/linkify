import React from "react";
import { FaExpandAlt, FaLink, FaShareSquare } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { motion } from "framer-motion";
import Button from "../../../Global_components/Button";
import Counter from "./Counter";
const Featurecards = () => {
  const features = [
    {
      id: 1,
      icon: <FaExpandAlt className=" text-gray-800" />,
      title: "Scalable",
      description: "Linkify can handle any number of links you throw at it. ",
      color: "orange",
    },
    {
      id: 2,
      icon: <FaLink className=" text-gray-800" />,
      title: "Easy to Use",
      description:
        "Linkify has a simple and intuitive interface the app is eay to use",
      color: "skyblue",
    },
    {
      id: 3,
      icon: <GiAutoRepair className=" text-gray-800" />,
      title: "Automatic ",
      description:
        "Linkify automatically detects broken links and removes them from your list.",
      color: "olive",
    },
    {
      id: 4,
      icon: <FaShareSquare className=" text-gray-800" />,
      title: "Share Everywhere",
      description:
        "Linkify provides you with a single link that you can share on all platforms.",
      color: "yellow",
    },
  ];
  return (
    <>
      {features.map((feature) => (
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
          style={{ backgroundColor: `${feature.color}` }}
          className="min-w-full h-fit  text-dark grid "
        >
          <div className="text-left grid ">
            <h2 className="text-3xl p-4 hover:underline">{feature.title}</h2>
          </div>
          <div className="h-[400px]"></div>

          <div className="w-full bg-[#51c49d]/75  box-border p-4  grid place-self-end">
            <h3 className="text-lg font-bold mb-2 flex items-center w-full relaxed justify-between">
              {feature.description}
            </h3>
            <h3 className=" text-xl font-bold mb-2 flex items-center gap-4 text-gray-400">
              <Counter number={1222333} />
              <span>{feature.icon}</span>
            </h3>
            <Button
              children="Discover more"
              variant={"default"}
              size={"lg"}
              icon={true}
            />
          </div>
        </motion.div>

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
      ))}
    </>
  );
};

export default Featurecards;
