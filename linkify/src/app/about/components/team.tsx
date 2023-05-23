import Button from "@/app/Landingpage/Components/ui/Button";
import React from "react";

const OurTeam: React.FC = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Smith",
      position: "CTO",
      bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      name: "Michael Johnson",
      position: "Lead Developer",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    },
  ];

  return (
    <section className="w-5/6 py-12 grid  ">
      <div className="w-full mx-auto grid  gap-8 text-center">
        <div className="w-full grid place-items-center gap-8">
          <h2 className="text-3xl font-bold grid after:w-full after:h-1 after:bg-gray-900">
            Our Team
          </h2>
          <p className="md:w-3/4">
            A team of elite enginners working together to grasp the potential of
            the link sharing platform. We will ensure that our customers made
            the right decison by choosing us.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white to-slate-200 shadow-md rounded-lg p-6 grid place-items-center gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-red-100 rounded-full border-2 border-red-200"></div>
              <h3 className="text-lg font-semibold ">{member.name}</h3>
              <p className="text-gray-600 ">{member.position}</p>
              <p className="text-gray-800">{member.bio}</p>
              <Button variant={"default"} children={"Connect"} icon={"true"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
