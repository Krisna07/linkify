import React from "react";
import { BiShield, BiSmile } from "react-icons/bi";
import { GiLightningElectron } from "react-icons/gi";
import { RiPresentationLine } from "react-icons/ri";

const Values = () => {
  const values = [
    {
      title: "Trustworthy",
      icon: <BiShield />,
      des: "We respect privacy and abide by all regulations, we are transparent in our business practices and will be forthcoming and honest. We say what we mean and we do what we say.",
    },
    {
      title: "Transformational",
      icon: <RiPresentationLine />,
      des: "Placeat repudiandae tempora repellendus dolores we are transparent in our business practices and will be forthcoming and honest. provident quasi dicta non, voluptatum laudantium.",
    },
    {
      title: "Approachable",
      icon: <BiSmile />,
      des: "Lorem ipsum, dolor sit amet consectetur adipisicin elit. Sapiente ipsum placeat repudiandae tempora repellendus dolores quibusdam sequi consequatur beatae officiis maxime ducimus incidunt ipsam voluptatibus voluptates est ",
    },
    {
      title: "Modern",
      icon: <GiLightningElectron />,
      des: "Molestiae eveniet, quas praesentium Vel libero debitis provident quasi dicta non, voluptatum laudantium labore ipsum ipsa dolorum eius tempora nam aperiam nisi doloribus!",
    },
  ];
  return (
    <div className="w-full grid place-items-center gap-8 bg-gradient-to-r from-slate-900 to-slate-700 text-white p-8">
      <div className="laptop:w-[1200px] grid p-8 box-border gap-4">
        <h2 className="text-3xl font-bold">Our Values</h2>
        <p className="md:w-3/6 font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
          blanditiis fugiat ex? Dolorem est ratione ut mollitia repellat rem?
          Tenetur?
        </p>
        <div className="w-full flex items-center gap-8">
          <div className=" grid laptop:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="grid gap-4 bg-white shadow-bs text-black rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 p-4">
                  {" "}
                  <div className="p-2 text-[30px] bg-indigo-400/50 w-fit rounded-[8px] text-green-800">
                    {value.icon}
                  </div>
                  <h2 className="font-bold">{value.title}</h2>
                </div>
                <div className="grid p-4 bg-gray-200">
                  <p>{value.des}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/4 h-full hidden bg-gradient-to-r from-yellow-600 to-sky-200 animate-text rounded-[40px] relative md:grid place-items-center">
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
