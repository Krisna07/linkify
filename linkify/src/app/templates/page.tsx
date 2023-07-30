import React from "react";

const Page: React.FC = () => {
  const templates = [
    {
      title: "Creative Portfolio",
      description: "Showcase your creative work in a stunning portfolio.",
      gradientColors:
        "rgba(114, 46, 209, 0.8) 0%, rgba(225, 132, 95, 0.8) 100%",
    },
    {
      title: "E-Commerce Store",
      description: "Create a feature-rich online store to sell your products.",
      gradientColors: "rgba(92, 184, 92, 0.8) 0%, rgba(3, 169, 244, 0.8) 100%",
    },
    {
      title: "Travel Blog",
      description:
        "Share your adventures and travel experiences with the world.",
      gradientColors:
        "rgba(248, 108, 107, 0.8) 0%, rgba(255, 195, 113, 0.8) 100%",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="templatesanimationshere max-w-5xl w-full p-8 space-y-8">
        {/* Hero Section with Creative Gradients */}
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-pink-400 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mt-8">
            Creative Templates for Your Projects
          </h1>
          <p className="text-xl md:text-2xl mt-4">
            Choose from a variety of stunning templates to bring your ideas to
            life.
          </p>
          <button className="bg-white text-pink-500 font-bold rounded-md px-6 py-3 mt-8 hover:bg-pink-100">
            Get Started
          </button>
        </section>

        {/* Show Some Templates */}
        <section className="my-8">
          <h2 className="text-3xl font-bold">Explore Our Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md p-4 relative overflow-hidden"
                style={{
                  background: `linear-gradient(45deg, ${template.gradientColors})`,
                }}>
                <div className="w-full h-40 md:h-64 bg-gradient-to-br from-pink-300 via-pink-200 to-white absolute top-0 left-0"></div>
                <h3 className="text-xl md:text-2xl font-bold mt-4">
                  {template.title}
                </h3>
                <p className="text-sm md:text-base">{template.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Method of Creation */}
        <section className="my-8">
          <h2 className="text-3xl font-bold">Our Method of Creation</h2>
          <p>
            We believe in creating templates that inspire and empower our users
            to unleash their creativity. Our team of talented designers and
            developers work together to craft unique and functional templates
            that cater to a wide range of projects and industries. From
            eye-catching designs to seamless user experiences, our templates are
            designed with excellence in mind.
          </p>
        </section>

        {/* Free to Use Options */}
        <section className="my-8">
          <h2 className="text-3xl font-bold">Free to Use Options</h2>
          <ul className="list-disc pl-6">
            <li>High-Quality Design</li>
            <li>Responsive Layouts</li>
            <li>Easy Customization</li>
            <li>No Attribution Required</li>
          </ul>
        </section>

        {/* Social Media Options */}
        <section className="my-8">
          <h2 className="text-3xl font-bold">Connect with Us</h2>
          <ul className="list-none flex space-x-4 mt-4">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fab fa-facebook-square text-4xl text-blue-600 hover:text-blue-800"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fab fa-twitter-square text-4xl text-blue-400 hover:text-blue-600"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fab fa-instagram-square text-4xl text-pink-500 hover:text-pink-700"></i>
              </a>
            </li>
          </ul>
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
