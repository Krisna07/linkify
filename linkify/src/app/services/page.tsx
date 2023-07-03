import React from "react";
import Button from "../Landingpage/Components/ui/Button";

const page = () => {
  const services = [
    {
      title: "Innovative",
      des: "Creative link solutions like never before",
    },
    {
      title: "Efficient",
      des: "Upgrade your social media to next level",
    },
    {
      title: "Secure",
      des: "Protecting data is always our priority",
    },
    {
      title: "Adaptive",
      des: "We have more than app you use under",
    },
    {
      title: "Versatile",
      des: "Versatality is a key for our app",
    },
    {
      title: "Sync",
      des: "We sync your social media more than loreem",
    },
  ];
  return (
    <div className="w-full grid mb-20">
      <div className="w-full bg-gradient-to-r from-slate-800 to-slayte-600 py-40 grid gap-4 place-items-center ">
        <h2 className="font-bold text-[32px]">Some Serious Service Heading</h2>
        <p className="font-bold">
          Some serious service paragraph Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nisi, consectetur.
        </p>
        <Button children="Contact us" variant={"default"} icon={false} />
      </div>
      <div className="w-full py-40 grid gap-4 place-items-center">
        <div className="md:w-[80%] grid gap-4">
          <h3 className="font-semibold">Our services</h3>
          <h2 className="font-bold text-2xl md:w-3/4 lg:w-1/2">
            We provide the best service for your social media accounts
          </h2>
          <div className="grid md:grid-cols-2 gap-x-[40px] gap-y-[20px] lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="w-full grid place-items-center gap-4 shadow-bs py-8 px-4 bg-gradient-to-r from-indigo-300 to-pink-200 rounded-xl "
              >
                <div className="w-12 h-12 rounded-full shadow-bs bg-white"></div>
                <div className="w-full grid gap-2 place-items-center">
                  <h2 className="font-bold text-[20px]">{service.title}</h2>
                  <p>{service.des}</p>
                </div>
              </div>
            ))}
          </div>
          <Button children="Learn More" variant={"default"} icon={true} />
        </div>
      </div>
      <div className="w-full  gap-[20px] bg-gradient-to-r from-indigo-500 to-pink-500  skew-y-[-5deg] ">
        <div className="w-full grid place-items-center skew-y-[5deg] py-20 gap-4 p-4">
          <h2 className="font-bold text-[32px]">
            This app will change the way you share
          </h2>
          <p className="md:w-[60%] text-center">
            Our social media reach is just amaxing Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ut perspiciatis qui illo ipsum harum
            natus corporis, labore commodi. Veritatis, exercitationem?
          </p>
          <div className="md:w-[80%] grid place-items-center lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[40px]">
            <div className="w-full  p-4 shadow-bs bg-white rounded-xl grid">
            <p className="font-semibold">Subtopic</p>
              <h2 className="text-2xl font-bold">A topic</h2>
            <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ratione dignissimos maxime repellendus. Ipsa consectetur, suscipit esse voluptatum consequatur perspiciatis?</div>
              </div>
              <div className="w-full  p-4 shadow-bs bg-white rounded-xl grid">
            <p className="font-semibold">Subtopic</p>
              <h2 className="text-2xl font-bold">A topic</h2>
            <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ratione dignissimos maxime repellendus. Ipsa consectetur, suscipit esse voluptatum consequatur perspiciatis?</div>
              </div>   <div className="w-full  p-4 shadow-bs bg-white rounded-xl grid">
            <p className="font-semibold">Subtopic</p>
              <h2 className="text-2xl font-bold">A topic</h2>
            <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ratione dignissimos maxime repellendus. Ipsa consectetur, suscipit esse voluptatum consequatur perspiciatis?</div>
              </div>
              <div className="w-full  p-4 shadow-bs bg-white rounded-xl grid">
            <p className="font-semibold">Subtopic</p>
              <h2 className="text-2xl font-bold">A topic</h2>
            <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ratione dignissimos maxime repellendus. Ipsa consectetur, suscipit esse voluptatum consequatur perspiciatis?</div>
              </div>
          
          </div>
        </div>
      </div>
      <div className="w-full py-40 grid gap-4 place-items-center">
        <h2 className="font-bold text-[32px]">Lets talk</h2>
        <p className="font-bold">
          Some serious service paragraph Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nisi, consectetur.
        </p>
        <Button children="Contact us" variant={"default"} icon={false} />
      </div>
    </div>
  );
};

export default page;
