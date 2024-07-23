import React from "react";
import { FaExpandAlt, FaLink, FaShareSquare } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { motion } from "framer-motion";
interface FeaturesProps {}
const Featurecards = () => {
  const features = [
    {
      id: 1,
      icon: <FaExpandAlt className=" text-gray-800" />,
      title: "Scalable",
      description: "Linkify can handle any number of links you throw at it. ",
    },
    {
      id: 2,
      icon: <FaLink className=" text-gray-800" />,
      title: "Easy to Use",
      description: "Linkify has a simple and intuitive interface t",
    },
    {
      id: 3,
      icon: <GiAutoRepair className=" text-gray-800" />,
      title: "Automatic ",
      description:
        "Linkify automatically detects broken links and removes them from your list.",
    },
    {
      id: 4,
      icon: <FaShareSquare className=" text-gray-800" />,
      title: "Share Everywhere",
      description:
        "Linkify provides you with a single link that you can share on all platforms.",
    },
  ];
  return (
    <>
      {features.map((feature) => (
        <motion.div
          initial={{ left: -200 * features.indexOf(feature) }}
          whileInView={{ left: 0 }}
          transition={{
            type: "bounce",
            damping: 10,
            stiffness: 100,
          }}
          viewport={{ once: true }}
          className="group relative min-h-fit p-4 box-border bg-silver hover:bg-bermuda  text-dark text-light rounded   transition-all duration-300 hover:shadow-lg"
          key={feature.id}
        >
          <h3 className="w-full text-lg font-bold mb-2 flex items-center relaxed justify-between">
            {feature.title}
            <span className="group-hover:scale-[1.1] group-hover:text-accent ">
              {" "}
              {feature.icon}
            </span>
          </h3>
          <p className="text-slate-200 font-600 text-sm">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </>
  );
};

export default Featurecards;
