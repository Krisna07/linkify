import React from "react";
import Button from "../../g_components/Button";
import { FiLayout, FiShoppingBag, FiMapPin } from "react-icons/fi";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookMessenger,
} from "react-icons/fa";

import { FcLike } from "react-icons/fc";

const Page: React.FC = () => {
  const templates = [
    {
      title: "Creative Portfolio",
      description: "Showcase your creative work in a stunning portfolio.",
      icon: <FiLayout size={32} />,
      gradientColors: "from-blue-400 to-purple-500",
    },
    {
      title: "E-Commerce Store",
      description: "Create a feature-rich online store to sell your products.",
      icon: <FiShoppingBag size={32} />,
      gradientColors: "from-teal-400 to-cyan-500",
    },
    {
      title: "Travel Blog",
      description:
        "Share your adventures and travel experiences with the world.",
      icon: <FiMapPin size={32} />,
      gradientColors: "from-orange-400 to-yellow-500",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="laptop:w-[1200px] p-8 space-y-8">
        {/* Hero Section with Creative Gradients */}
        <section className="laptop:w-[1400px] py-32 flex gap-8 items-center relative ">
          {/* Left Side */}
          <div className="w-full laptop:w-1/2 grid gap-4 ">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-600 ">
              Your Creative Templates Hub
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Explore and Create with Our Templates
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Choose from a wide variety of stunning templates for your
              projects. Whether you're a designer, developer, or content
              creator, we have templates to suit your needs.
            </p>
            <Button
              children="Start"
              variant={"default"}
              size={"default"}
              icon={true}
            />
          </div>

          <div className=" laptop:w-1/2 w-full h-[600px] relative hidden laptop:flex">
            <div className=" w-full h-full animate-gradient bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-200 animate-gradient"></div>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-3xl font-bold mb-4">Explore Our Templates</h2>
          <div className="grid grid-cols-1 laptop:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md p-6 relative"
              >
                <div
                  className={`w-full h-40 md:h-64 overflow-hidden rounded-lg hover:scale-[1.1] transition-all top-0 left-0 bg-gradient-to-tl ${template.gradientColors}`}
                ></div>

                <h3 className=" flex  justify-between text-xl md:text-2xl font-bold mt-4">
                  {template.title}
                  <div className="flex items-center justify-center mb-4">
                    {template.icon}
                  </div>
                </h3>
                <p className="text-sm laptop:text-base text-gray-600 mt-2">
                  {template.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-8">
          <div className="bg-white rounded-lg shadow-md p-4 ">
            <h2 className="w-full text-3xl font-bold mb-4 ">
              Free to Use Options
            </h2>
            <ul className="list-disc pl-6 grid gap-x-12 laptop:grid-cols-2">
              <li className="text-lg my-2">
                <span className="text-blue-500">High-Quality Design:</span> Our
                templates are crafted with attention to detail to ensure
                top-notch quality for your projects.
              </li>
              <li className="text-lg my-2">
                <span className="text-blue-500">Responsive Layouts:</span> Each
                template is designed to adapt to different screen sizes,
                providing a seamless experience across devices.
              </li>
              <li className="text-lg  my-2">
                <span className="text-blue-500">Easy Customization:</span>{" "}
                Customize the templates effortlessly to match your brand and
                preferences with our user-friendly editing tools.
              </li>
              <li className="text-lg  my-2">
                <span className="text-blue-500">No Attribution Required:</span>{" "}
                You are free to use the templates without any obligation to
                provide attribution.
              </li>
            </ul>
          </div>
        </section>
        <section className="my-8 grid laptop:grid-cols-2 p-4 bg-white rounded shadow-lg gap-8">
          <div className="flex flex-col justify-center gap-4">
            <div className="grid gap-2 leading-[120%]">
              {" "}
              <div className="text-lg font-semibold">
                a simple yet powerful{" "}
              </div>
              <div className="text-2xl ">
                A Tool To Ramp Up Your Social Media With Colors
              </div>
              <div className="text-gray-600">
                We do have the verity of templates that you can use. Choose one
                add the links and drag the items. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Ad, nihil. Lorem ipsum dolor sit
                amet.{" "}
              </div>
            </div>

            <div className="flex gap-2">
              {" "}
              <Button
                children="Choose"
                icon={true}
                variant={"primary"}
                size={"sm"}
              />
              <Button
                children="Explore"
                icon={true}
                variant={"primary"}
                className="shadow-bs bg-white"
                size={"sm"}
              />
            </div>
          </div>
          <div className="h-[500px] w-[100%] bg-gray-200/50 grid place-items-center relative">
            <FaFacebookMessenger size={88} color="skyblue" />
            <FcLike className="absolute top-20 left-20 " size={80} />
            <div className="flex gap-2 absolute top-[60%] left-[35%]">
              <div className="w-4 h-4 rounded-full bg-black animate-pulse "></div>
              <div className="w-4 h-4 rounded-full bg-black animate-pulse animate-10"></div>
              <div className="w-4 h-4 rounded-full bg-black animate-pulse animate-20"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
