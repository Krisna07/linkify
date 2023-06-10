import React from "react";

import { Presentation, ShieldCheck, Smile, Zap } from "lucide-react";
const Values = () => {
  const values = [
    {
      title: "Trustworthy",
      icon: <ShieldCheck />,
      des: "We respect privacy and abide by all regulations, we are transparent in our business practices and will be forthcoming and honest. We say what we mean and we do what we say.",
    },
    {
      title: "Transformational",
      icon: <Presentation />,
      des: "Placeat repudiandae tempora repellendus dolores we are transparent in our business practices and will be forthcoming and honest. provident quasi dicta non, voluptatum laudantium.",
    },
    {
      title: "Approachable",
      icon: <Smile />,
      des: "Lorem ipsum, dolor sit amet consectetur adipisicin elit. Sapiente ipsum placeat repudiandae tempora repellendus dolores quibusdam sequi consequatur beatae officiis maxime ducimus incidunt ipsam voluptatibus voluptates est ",
    },
    {
      title: "Modern",
      icon: <Zap />,
      des: "Molestiae eveniet, quas praesentium Vel libero debitis provident quasi dicta non, voluptatum laudantium labore ipsum ipsa dolorum eius tempora nam aperiam nisi doloribus!",
    },
  ];
  return (
    <div className="w-full grid place-items-center gap-8 bg-gradient-to-r from-slate-900 to-slate-700 text-white p-8">
      <div className="md:w-[80%] grid p-8 box-border gap-4">
        <h2 className="text-3xl font-bold">Our Values</h2>
        <p className="md:w-3/6 font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
          blanditiis fugiat ex? Dolorem est ratione ut mollitia repellat rem?
          Tenetur?
        </p>
        <div className="w-full flex items-center gap-8">
          <div className="md:w-3/4 grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="grid gap-4 ">
                <div className="p-4 bg-yellow-200/25 w-fit rounded-[8px] text-green-500">
                  {value.icon}
                </div>
                <div className="grid gap-2">
                  <h2 className="font-bold">{value.title}</h2>
                  <p>{value.des}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/4 h-full bg-gradient-to-r from-yellow-600 to-sky-200 animate-text rounded-[40px] relative">
            <div className="w-4 h-4 bg-black rounded-full absolute transition-all randomball "></div>
            <div className="w-4 h-4 bg-black rounded-full absolute transition-all randomball "></div>
            <div className="w-4 h-4 bg-black rounded-full absolute transition-all randomball  "></div>
            <div className="w-4 h-4 bg-black rounded-full absolute transition-all randomball "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
