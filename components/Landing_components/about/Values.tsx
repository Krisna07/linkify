import React from "react";
import { BiShield, BiSmile } from "react-icons/bi";
import { GiLightningElectron } from "react-icons/gi";
import { RiPresentationLine } from "react-icons/ri";

const Values = () => {
  const values = [
    {
      title: "Trustworthy",
      icon: <BiShield />,
      description:
        "We respect privacy and abide by all regulations, ensuring transparency in our business practices and honesty in our actions.",
    },
    {
      title: "Transformational",
      icon: <RiPresentationLine />,
      description:
        "We drive innovation, embracing change and progress, while maintaining transparency and honesty in our business dealings.",
    },
    {
      title: "Approachable",
      icon: <BiSmile />,
      description:
        "We foster a culture of openness, making it easy for everyone to engage with us and understand our values and mission.",
    },
    {
      title: "Modern",
      icon: <GiLightningElectron />,
      description:
        "We stay ahead of the curve, embracing the latest technologies and trends to deliver cutting-edge solutions.",
    },
  ];
  return (
    <div className="w-full grid place-items-center gap-8 bg-gradient-to-r from-slate-900 to-slate-700 text-white select-none">
      <div className="laptop:w-[1200px] grid p-4 box-border gap-4">
        <h2 className="text-3xl font-bold">Our Values</h2>
        <p className="md:w-3/6 text-base">
          Our values are the foundation of our company culture and guide our
          actions and decisions. They are the principles that shape our behavior
          and interactions with each other, our customers, and the wider
          community.
        </p>
        <div className="w-full flex items-center gap-8">
          <div className=" grid laptop:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="grid gap-4  hover:shadow-bs border-[1px] border-white/25 text-black rounded-lg overflow-hidden"
              >
                <div className="flex items-center gap-2 p-4 shadow-bs leading-[120%]">
                  <div className="p-2 text-[30px] bg-indigo-400/50 w-fit rounded-[8px] text-green-800">
                    {value.icon}
                  </div>
                  <h2 className="font-bold">{value.title}</h2>
                </div>
                <div className="grid p-4 bg-gray-200">
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/4 h-full hidden bg-gradient-to-r from-bermuda to-sky-200 animate-text rounded-[40px] relative md:grid place-items-center">
            <div className="w-[100px] h-[100px] relative animate-spin">
              <div className="w-4 h-4 bg-red-900 rounded-full absolute top-0 right-0 transition-all  "></div>
              <div className="w-4 h-4 bg-black rounded-full absolute top-0 left-0 transition-all  "></div>
              <div className="w-4 h-4 bg-red-900 rounded-full absolute bottom-0 left-0 transition-all   "></div>
              <div className="w-4 h-4 bg-black rounded-full absolute bottom-0 right-0 transition-all  "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
