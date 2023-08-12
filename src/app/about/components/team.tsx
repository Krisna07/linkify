"use client";
import Button from "@/app/g_components/Button";
import React, { useState } from "react";

const OurTeam: React.FC = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "John is a visionary leader with a track record of driving business growth and innovation. As the CEO, he provides strategic direction to the company and ensures our mission and values are upheld.",
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      bio: "Jane is a technology expert with a passion for leveraging cutting-edge solutions. She leads our technical team, driving the development of innovative products and overseeing the implementation of robust systems.",
    },
    {
      name: "Michael Johnson",
      position: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      bio: "Michael is a seasoned developer who leads our talented team of developers. With his expertise in coding and problem-solving, he plays a crucial role in delivering high-quality software solutions.",
    },
    {
      name: "Sarah Thompson",
      position: "Marketing Manager",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      bio: "Sarah is a results-driven marketing professional who develops and executes effective marketing strategies. She drives brand awareness, leads generation, and customer engagement through creative campaigns.",
    },
    {
      name: "David Lee",
      position: "Senior Designer",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      bio: "David is a creative and detail-oriented designer who brings our brand and product vision to life. He creates visually appealing and user-friendly designs that enhance the overall user experience.",
    },
    {
      name: "Emily Rodriguez",
      position: "Customer Success Manager",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      bio: "Emily is dedicated to ensuring our customers' success and satisfaction. She builds strong relationships with clients, provides personalized support, and helps them maximize the value of our products and services.",
    },
    {
      name: "Robert Williams",
      position: "Sales Director",
      image: "https://randomuser.me/api/portraits/men/20.jpg",
      bio: "Robert is a dynamic sales leader who drives revenue growth and builds strategic partnerships. He leads our sales team, identifies new business opportunities, and fosters strong relationships with key stakeholders.",
    },
    {
      name: "Jennifer Davis",
      position: "Finance Manager",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
      bio: "Jennifer is a detail-oriented finance professional who oversees our financial operations. She ensures financial accuracy, manages budgets, and provides valuable insights for effective decision-making.",
    },
    {
      name: "Daniel Wilson",
      position: "Operations Manager",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
      bio: "Daniel is a process-driven professional who optimizes our operations for efficiency and productivity. He streamlines workflows, manages resources, and ensures smooth day-to-day business operations.",
    },
    {
      name: "Olivia Brown",
      position: "Human Resources Specialist",
      image: "https://xsgames.co/randomusers/avatar.php?g=female",

      bio: "Olivia is a people-oriented HR specialist who fosters a positive work environment and supports the professional growth of our team. She handles recruitment, employee relations, and talent development initiatives.",
    },
    {
      name: "William Thompson",
      position: "Quality Assurance Engineer",
      image: "https://randomuser.me/api/portraits/men/11.jpg",

      bio: "William is a meticulous QA engineer who ensures the high quality and reliability of our products. He performs rigorous testing, identifies and resolves issues, and maintains our product's exceptional standards.",
    },
    {
      name: "Sophia Harris",
      position: "Project Manager",
      image: "https://randomuser.me/api/portraits/women/80.jpg",
      bio: "Sophia is a highly organized and proactive project manager who oversees the successful execution of our projects. She coordinates cross-functional teams, manages timelines, and ensures timely project delivery.",
    },
  ];
  const [show, setShow] = useState(4);

  return (
    <section className="w-full py-12 grid  place-items-center gap-8 bg-slate-100  relative ">
      <div className="w-[80%] mx-auto grid   gap-8  ">
        <div className="w-full grid place-items-left gap-4 ">
          <h2 className="text-3xl font-bold grid">Our Team</h2>
          <p className="md:w-3/4">
            A team of elite enginners working together to grasp the potential of
            the link sharing platform. We will ensure that our customers made
            the right decison by choosing us.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
          {teamMembers.slice(0, show).map((member, index) => (
            <div
              key={index}
              className="bg-white  shadow-bs  p-4 rounded-[20px]  grid text-left gap-2">
              <div className="w-full bg-gradient-to-r from-gray-600 to-red-100">
                <img
                  src={member.image}
                  alt=""
                  width={"100%"}
                />
              </div>
              <div>
                {" "}
                <h3 className="text-lg font-semibold ">{member.name}</h3>
                <p className="text-gray-600 ">{member.position}</p>
              </div>
              {/* <p className="text-gray-800">{member.bio}</p> */}
              <Button
                variant={"default"}
                children={"Connect"}
                icon={true}
                className={"w-fit text-[12px] py-1 px-2 bg-slate-600"}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[80%] flex justify-between">
        {" "}
        <Button
          children={show === 4 ? "View more" : "Show less"}
          variant={"default"}
          className={"w-fit"}
          icon={true}
          onClick={() => setShow(show === 4 ? 13 : 4)}
        />
        <Button
          children={"Join our team"}
          variant={"default"}
          icon={true}
        />
      </div>
    </section>
  );
};

export default OurTeam;
