"use client";
import React from "react";
import { FaPencilRuler, FaUsers, FaCloud, FaMagic } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "../../Global_components/Button";

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
    <div className="desktop:w-[1400px] w-full grid place-items-center  py-8">
      <div className="w-full mx-auto px-8 laptop:px-4">
        <div className="w-full grid grid-cols-1  gap-4 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "bounce", damping: 10, stiffness: 100 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h3 className="text-silver/75 text-xl font-[500] font-serif mb-4">
              How It Works
            </h3>
            <h2 className="animate-slidein500 text-5xl text-silver/75  mb-2 leading-tight  ">
              Empower Your
              <span className="font-serif text-white"> Creative </span> Process
            </h2>
            <p className="w-[80%] animate-slidein700 text-lg lg:text-xl mb-8">
              Explore how our platform simplifies the organization, sharing, and
              enhancement of your creative projects, providing you with
              intuitive tools to elevate your creative output and collaborate
              more effectively.
            </p>
            <div className="grid place-items-center gap-16 text-dark my-16">
              {queries.map((query, index) => (
                <div
                  className={`laptop:w-[80%] w-full px-8  grid ${
                    index % 2 != 1 ? "place-items-end" : ""
                  }`}
                  key={index}
                >
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      rotateZ: index % 2 != 1 ? -15 : 15,
                    }}
                    whileHover={{ rotateZ: index % 2 != 1 ? -12 : 12 }}
                    transition={{ type: "spring", damping: 10, stiffness: 100 }}
                    viewport={{ once: true }}
                    className={`tablet:max-w-[350px] bg-white h-full rounded-lg p-4 shadow-lg grid gap-4 place-items-center ${
                      index % 2 != 1 ? "rotate-45" : "-rotate-45"
                    }  `}
                  >
                    <div className="w-12 h-12 bg-dark rounded-full grid place-items-center">
                      <div className="w-4 h-4 bg-primary rounded-full"></div>
                    </div>
                    <div className="grid gap-2 bg-primary/25 mt-16 p-4 rounded-3xl">
                      <div className="grid  gap-2 leading-4 ">
                        <div className=" text-[gray] ">{query.icon}</div>
                        <span className="font-bold mb-2">{query.name}</span>
                      </div>
                      <p className="w-[80%] text-left">{query.description}</p>
                      <Button
                        children={`${query.buttonText}`}
                        variant={"accent"}
                        size={"sm"}
                        icon={true}
                        className="leading-4 mt-8"
                      />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Queries;
