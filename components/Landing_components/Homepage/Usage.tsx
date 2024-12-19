"use client";

import React, { useEffect, useRef, useState } from "react";
import Button from "../../Global_components/Button";
import { motion } from "framer-motion";

const Usage = () => {
  // const addLinks = <div>{/* <Demo /> */}</div>;
  // const Share = () => (
  //   <div className="grid place-items-center gap-4">
  //     <h2 className="font-[600]"> Share to any platform</h2>
  //     <div className="flex items-center gap-2">
  //       <FaFacebookSquare color="blue" />
  //       <FaTwitterSquare color="blue" />
  //       <FaInstagramSquare color="purple" />
  //       <FaPlusSquare />
  //     </div>
  //   </div>
  // );
  // const Insight = () => (
  //   <div>
  //     <h2 className="font-semibold ">Your insights</h2>
  //     Daily visits:2002
  //   </div>
  // );

  const discover = [
    {
      topic: "Social",
      title: "Social Hub",
      subtitle: "Manage all your social media accounts in one place",
      gradient: "bg-gradient-to-tr from-primary to-[red]",
      description:
        "Simplify your online presence by centralizing the management of your social media accounts. Access and interact with your feeds, messages, and notifications seamlessly.",
      image: "social_hub_image.jpg", // Placeholder image URL
      link: "/social-hub", // Placeholder link to the social hub component
    },
    {
      topic: "Content",
      title: "Content Discovery",
      gradient: "bg-gradient-to-tr from-[blue] to-[green]",
      subtitle: "Discover trending content tailored to your interests",
      description:
        "Explore trending topics and discover new content based on your interests. Stay informed and engaged with the latest news, articles, and videos curated just for you.",
      image: "content_discovery_image.jpg", // Placeholder image URL
      link: "/content-discovery", // Placeholder link to the content discovery component
    },
    {
      topic: "Community",
      title: "Community Engagement",
      gradient: "bg-gradient-to-tr from-accent to-[yellow]",
      subtitle: "Connect with like-minded individuals and communities",
      description:
        "Join vibrant communities and engage with like-minded individuals who share your interests and passions. Foster meaningful connections, participate in discussions, and collaborate on projects.",
      image: "community_engagement_image.jpg", // Placeholder image URL
      link: "/community-engagement", // Placeholder link to the community engagement component
    },
    {
      topic: "Dashboard",
      title: "Engaging Dashboard",
      gradient: "bg-gradient-to-tr from-[blue] to-[gray]",
      subtitle: "Track your social media analytics at a glance",
      description:
        "Get insights into your social media performance with customizable dashboards. Monitor key metrics, track audience engagement, and optimize your social media strategy for maximum impact.",
      image: "dashboard_image.jpg", // Placeholder image URL
      link: "/dashboard", // Placeholder link to the dashboard component
    },
  ];
  const [des, setDes] = useState(discover[0].description);
  const [index, setIndex] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const activeTabRef = useRef<HTMLDivElement>(null);

  const getWidthandPos = (e: any) => {
    const element = e.target.getBoundingClientRect();
    const parent = e.target?.offsetParent.getBoundingClientRect();
    setWidth(element.width);
    setPosition(element.x - parent.x);
    console.log(element.x);
  };
  useEffect(() => {
    // Get initial width and position of the first tab
    if (activeTabRef.current) {
      const element = activeTabRef.current.getBoundingClientRect();
      const parent =
        activeTabRef.current?.offsetParent?.getBoundingClientRect();
      if (parent) {
        setWidth(element.width);
        setPosition(element.x - parent.x);
      }
    }
  }, []);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 10, stiffness: 100 }}
      className="laptop:w-[1400px] w-full  py-16 text-white "
    >
      <div className="w-full grid place-items-center  laptop:px-8 gap-4  box-border  ">
        <div className="w-full  flex flex-col items-center justify-center p-2  box-border gap-8  ">
          <div className="w-full grid gap-2 text-left">
            <h2 className="text-3xl font-[700] animate-slidein500">Discover</h2>
            <p className="w-full   tablet:w-[60%] animate-slidein700">
              Dive into a world of curated content, connect effortlessly with
              others, and fully unlock your online potential through our
              comprehensive discovery features. Experience a seamless journey of
              exploration and engagement that enhances your digital
              interactions.
            </p>
          </div>
          <div className="w-full grid tablet:grid-cols-2 grid-cols-1  gap-4 overflow-hidden ">
            <motion.div
              initial={{ y: 100, x: 400, opacity: 0 }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 100,
              }}
              className="w-full  hover:shadow-lg  border overflow-hidden shadow-bs box-border  flex  rounded  relative "
            >
              {discover.map((usuage) => (
                <motion.div
                  className={`min-w-full h-[400px]   grid gap-2  relative transition-all overflow-hidden ${usuage.gradient}`}
                  style={{
                    left: `-${index * 100}%`,
                  }}
                  key={discover.indexOf(usuage)}
                ></motion.div>
              ))}
            </motion.div>
            <div className="w-full  ">
              <div className="w-full h-fit  flex items-center justify-between  font-[600] relative px-2 border-b">
                {discover.map((usuage, x) => (
                  <motion.div
                    ref={
                      discover.indexOf(usuage) === index ? activeTabRef : null
                    }
                    initial={{ x: `-${discover.indexOf(usuage) * 50}px` }}
                    whileInView={{ x: 0 }}
                    className={
                      index === discover.indexOf(usuage) || index == 0
                        ? `px-4 py-2 my-2 rounded  text-white/75    `
                        : `  px-4 py-2 my-2 rounded  hover:text-white hover:shadow-bs transition-all  `
                    }
                    key={discover.indexOf(usuage)}
                    onClick={(e) => {
                      getWidthandPos(e);
                      setDes(usuage.description);
                      setIndex(discover.indexOf(usuage));
                    }}
                  >
                    {usuage.topic}
                  </motion.div>
                ))}
                <span className="w-full absolute bottom-[4px] left-[2px]  h-2  flex items-center justify-center">
                  <span
                    className={`h-[1px]  bg-white absolute  transition-all transition-ease`}
                    style={{
                      width: `${width}px`,
                      left: `${position}px`,
                    }}
                  ></span>
                </span>
              </div>

              <div className="w-full    box-border tablet:text-left text-center flex  rounded  relative overflow-hidden">
                {discover.map((usuage) => (
                  <div
                    className={`min-w-full  text-left grid gap-2 rounded p-4 relative transition-all overflow-hidden `}
                    style={{
                      left: `-${index * 100}%`,
                    }}
                    key={discover.indexOf(usuage)}
                  >
                    <h3 className="w-[24ch] leading-tight text-xl font-[600] text-gray-300">
                      {usuage.subtitle}
                    </h3>
                    <span className="w-full text-gray-400">
                      {" "}
                      {usuage.description}
                    </span>
                    <Button
                      children="Read"
                      size={"default"}
                      variant={"accent"}
                      icon={true}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Usage;
