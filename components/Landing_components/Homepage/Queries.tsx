"use client";
import React from "react";
import { FaPencilRuler, FaUsers, FaCloud, FaMagic } from "react-icons/fa";
import { motion } from "framer-motion";

const Queries = () => {
  const queries = [
    {
      name: "Intuitive Design",
      icon: <FaPencilRuler />,
      description:
        "Crafted with a focus on user experience, ensuring easy navigation and interaction.",
      buttonText: "Learn More",
    },
    {
      name: "Collaborative",
      icon: <FaUsers />,
      description:
        "Share your boards and ideas with peers or the public, enhancing collaborative efforts.",
      buttonText: "Learn More",
    },
    {
      name: "Universal Compatibility",
      icon: <FaCloud />,
      description:
        "Designed to support seamless integration across all major platforms on the internet.",
      buttonText: "Learn More",
    },
    {
      name: "Automated Enhancements",
      icon: <FaMagic />,
      description:
        "Utilizes smart technology to automatically enhance your content for better engagement.",
      buttonText: "Learn More",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center py-8">
      <div className="mx-auto px-8 laptop:px-4">
        <div className="grid grid-cols-1 laptop:w-[1000px] gap-4 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "bounce", damping: 10, stiffness: 100 }}
            viewport={{ once: true }}
          >
            <h3 className="text-silver/75 text-xl font-bold mb-4">
              How It Works
            </h3>
            <h2 className="animate-slidein500 text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Empower Your Creative Process
            </h2>
            <p className="animate-slidein700 text-lg lg:text-xl mb-8">
              Discover how our platform makes it easier to organize, share, and
              enhance your creative ideas.
            </p>
            <div className="grid laptop:grid-cols-4 tablet:grid-cols-2 gap-4 text-dark">
              {queries.map((query, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", damping: 10, stiffness: 100 }}
                  viewport={{ once: true }}
                  className=" bg-white rounded-lg p-4 shadow-lg grid grid-flow-row grid-rows-3"
                >
                  <div className="flex place-items-center gap-4 leadin-[120%] border-b">
                    <div className="text-3xl mb-2">{query.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{query.name}</h3>
                  </div>
                  <p>{query.description}</p>
                  <button className="mt-4 bg-blue-500  rounded px-4 py-2">
                    {query.buttonText}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Queries;
