import React from "react";
import Button from "../Landingpage/Components/ui/Button";
import { FiLayout, FiShoppingBag, FiMapPin } from "react-icons/fi";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

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
      <div className="md:w-[1200px] p-8 space-y-8">
        {/* Hero Section with Creative Gradients */}
        <section className="w-[1400px] py-32 flex gap-8 items-center relative">
          {/* Left Side */}
          <div className=" w-1/2 grid gap-4 ">
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
              icon={true}
            />
          </div>

          {/* Right Side (Gradient Animation) */}
          <div className=" w-1/2 h-[600px] relative  z-10">
            <div className="w-full h-full bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-200 animate-gradient"></div>
          </div>
        </section>

        {/* Show Some Templates */}
        <section className="my-8">
          <h2 className="text-3xl font-bold mb-4">Explore Our Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md p-6 relative">
                <div
                  className={`w-full h-40 md:h-64  top-0 left-0 bg-gradient-to-tl ${template.gradientColors}`}></div>

                <h3 className=" flex  justify-between text-xl md:text-2xl font-bold mt-4">
                  {template.title}{" "}
                  <div className="flex items-center justify-center mb-4">
                    {template.icon}
                  </div>
                </h3>
                <p className="text-sm md:text-base text-gray-600 mt-2">
                  {template.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Method of Creation */}

        {/* Free to Use Options */}
        <section className="my-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Free to Use Options
            </h2>
            <ul className="list-disc pl-6 grid gap-4 md:grid-cols-2">
              <li className="text-lg md:text-xl my-2">
                <span className="text-blue-500">High-Quality Design:</span> Our
                templates are crafted with attention to detail to ensure
                top-notch quality for your projects.
              </li>
              <li className="text-lg md:text-xl my-2">
                <span className="text-blue-500">Responsive Layouts:</span> Each
                template is designed to adapt to different screen sizes,
                providing a seamless experience across devices.
              </li>
              <li className="text-lg md:text-xl my-2">
                <span className="text-blue-500">Easy Customization:</span>{" "}
                Customize the templates effortlessly to match your brand and
                preferences with our user-friendly editing tools.
              </li>
              <li className="text-lg md:text-xl my-2">
                <span className="text-blue-500">No Attribution Required:</span>{" "}
                You are free to use the templates without any obligation to
                provide attribution.
              </li>
            </ul>
          </div>
        </section>

        {/* Social Media Options */}
        <section className="my-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-3xl font-bold">Connect with Us</h2>
            <ul className="list-none flex space-x-4 mt-4">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 rounded-full transition-colors duration-300 hover:bg-blue-100">
                  <FaFacebookSquare className="text-4xl text-blue-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 rounded-full transition-colors duration-300 hover:bg-blue-100">
                  <FaTwitterSquare className="text-4xl text-blue-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 rounded-full transition-colors duration-300 hover:bg-pink-100">
                  <FaInstagramSquare className="text-4xl text-pink-500" />
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Design Colors */}
        <section className="my-8">
          <h2 className="text-3xl font-bold">Explore Design Colors</h2>
          <div className="flex space-x-4 mt-4">
            <div className="w-12 h-12 bg-red-500 rounded-full"></div>
            <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
            <div className="w-12 h-12 bg-green-500 rounded-full"></div>
            <div className="w-12 h-12 bg-yellow-500 rounded-full"></div>
            <div className="w-12 h-12 bg-purple-500 rounded-full"></div>
            <div className="w-12 h-12 bg-pink-500 rounded-full"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
