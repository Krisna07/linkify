"use client";
import Button from "@/app/g_components/Button";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaEye,
  FaFacebookSquare,
  FaInstagramSquare,
  FaKey,
  FaLink,
  FaPlusSquare,
  FaShare,
  FaTwitterSquare,
} from "react-icons/fa";

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
      gradient: "bg-gradient-to-tr from-blue-200 to-red-600",
      description:
        "Simplify your online presence by centralizing the management of your social media accounts. Access and interact with your feeds, messages, and notifications seamlessly.",
      image: "social_hub_image.jpg", // Placeholder image URL
      link: "/social-hub", // Placeholder link to the social hub component
    },
    {
      topic: "Content",
      title: "Content Discovery",
      gradient: "bg-gradient-to-tr from-blue-600 to-green-400",
      subtitle: "Discover trending content tailored to your interests",
      description:
        "Explore trending topics and discover new content based on your interests. Stay informed and engaged with the latest news, articles, and videos curated just for you.",
      image: "content_discovery_image.jpg", // Placeholder image URL
      link: "/content-discovery", // Placeholder link to the content discovery component
    },
    {
      topic: "Community",
      title: "Community Engagement",
      gradient: "bg-gradient-to-tr from-blue-400 to-yellow-600",
      subtitle: "Connect with like-minded individuals and communities",
      description:
        "Join vibrant communities and engage with like-minded individuals who share your interests and passions. Foster meaningful connections, participate in discussions, and collaborate on projects.",
      image: "community_engagement_image.jpg", // Placeholder image URL
      link: "/community-engagement", // Placeholder link to the community engagement component
    },
    {
      topic: "Dashboard",
      title: "Engaging Dashboard",
      gradient: "bg-gradient-to-tr from-blue-300 to-gray-600",
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

  const getWidthandPos = (e: any) => {
    const element = e.target.getBoundingClientRect();
    const parent = e.target?.offsetParent.getBoundingClientRect();
    setWidth(element.width);
    setPosition(element.x - parent.x);
    console.log(element.x);
  };

  return (
    <div className="w-full flex items-center justify-center py-16 text-white">
      <div className="w-full laptop:w-[1024px]  grid place-items-center sm:px-6 laptop:px-8 gap-4  box-border p-4 ">
        <div className="w-full  flex flex-col items-center justify-center p-2  box-border gap-8  ">
          <div className="grid gap-2 text-center">
            <h2 className="text-3xl font-[700]">Discover</h2>
            <p className="w-full text-xl font-[500] tablet:w-[50ch]">
              Explore curated content, connect effortlessly, and unlock your
              online potential with our discovery features.
            </p>
          </div>
          <div className="grid tablet:grid-cols-2   gap-4 overflow-hidden ">
            <div className="w-full  hover:shadow-lg border-l-2 border-sky-900 box-border  flex  rounded  relative overflow-hidden">
              {discover.map((usuage) => (
                <div
                  className={`min-w-full   grid gap-2  relative transition-all overflow-hidden ${usuage.gradient}`}
                  style={{
                    left: `-${index * 100}%`,
                  }}
                  key={discover.indexOf(usuage)}
                ></div>
              ))}
            </div>
            <div className="w-full grid gap-0 ">
              <div className="w-full h-fit  flex items-center justify-between  font-[600] relative px-2">
                {discover.map((usuage, x) => (
                  <span
                    className={
                      index === discover.indexOf(usuage)
                        ? `px-4 py-2 my-2 rounded ${usuage.gradient} text-white shadow-[4px_-2px_2px_1px_white] border-b border-b-white border-b-[2px]`
                        : `  px-4 py-2 my-2 rounded hover:bg-sky-500 hover:text-white hover:shadow-[4px_-2px_2px_2px_white] `
                    }
                    key={discover.indexOf(usuage)}
                    onClick={(e) => {
                      getWidthandPos(e);
                      setDes(usuage.description);
                      setIndex(discover.indexOf(usuage));
                    }}
                  >
                    {usuage.topic}
                  </span>
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

              <div className="w-full  hover:shadow-lg  box-border tablet:text-left text-center flex  rounded  relative overflow-hidden">
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
                      variant={"submit"}
                      icon={true}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="laptop:w-1/2 w-full  laptop:flex items-center box-border gap-4  p-2">
          <div className=" laptop:w-3/5 w-full grid gap-4 leading-[120%]">
            <div>
              <h3 className="font-[600] text-lg">Discover</h3>
              <h2 className="font-[700] text-2xl ">
                Connect and Share with Ease
              </h2>
              <p className="text-sm">
                Seamlessly share your favorite links with friends and followers.
                Our platform lets you stay connected and engaged, bringing
                people closer through shared content and discussions.
              </p>
            </div>
            <Link href={"/marketplace"}>
              {" "}
              <Button
                children="Learn more"
                variant={"default"}
                size={"sm"}
                icon={true}
              />
            </Link>
          </div>
          <div className="laptop:w-2/5  bg-gray-100 rounded text-center hover:shadow-lg">
            <img
              src="https://img.freepik.com/free-vector/image-viewer-concept-illustration_114360-4532.jpg?w=826&t=st=1681968634~exp=1681969234~hmac=28c31796a43307c4988128c10cb50b02137fb2e4b2ef1996b2e5dbed22cf4f54"
              alt=""
              width={"100%"}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Usage;
