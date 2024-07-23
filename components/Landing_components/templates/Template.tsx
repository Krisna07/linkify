import Button from "../../../components/Global_components/Button";
import Link from "next/link";

import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

const templates = [
  {
    title: "Nature Bliss",
    profileGradient: "bg-gradient-to-r from-[#ff9a9e] to-[#fad0c4]",
    backgroundColorClass: "bg-green-400",
    socialMedia: ["FaFacebook", "FaTwitter", "FaInstagram"],
  },
  {
    title: "Modern Tech",
    profileGradient: "bg-gradient-to-r from-[#a8c0ff] to-[#3f2b96]",
    backgroundColorClass: "bg-blue-500",
    socialMedia: ["FaFacebook", "FaLinkedin", "FaGithub"],
  },
  {
    title: "Elegant Elegance",
    profileGradient: "bg-gradient-to-r from-[#ffecd2] to-[#fcb69f]",
    backgroundColorClass: "bg-orange-500",
    socialMedia: ["FaPinterest", "FaTumblr", "FaDribbble"],
  },
];

const Template = () => {
  const socialMediaIcons = (
    <div className="flex w-full items-center gap-2 justify-center">
      <FaFacebook />
      <RiTwitterXLine />
      <FiInstagram />
    </div>
  );

  return (
    <div className="grid tablet:grid-cols-3 gap-8">
      {templates.map((template, index) => (
        <div key={index} className="p-4  grid gap-4">
          <h2 className="text-xl font-semibold">{template.title}</h2>
          <div
            className={`relative grid gap-8 p-4 px-8 rounded-xl shadow-bs ${template.backgroundColorClass} w-full  place-items-center`}
          >
            <div
              className={`w-16 h-16 ${template.profileGradient} rounded-full `}
            ></div>
            <div className="grid gap-4">
              {socialMediaIcons}
              <Button
                children="Facebook"
                icon={true}
                size={"default"}
                rightIcon={<FaFacebook />}
                variant={"primary"}
                className="w-full"
              />
              <Button
                children="Twitter"
                icon={true}
                size={"default"}
                rightIcon={<RiTwitterXLine />}
                variant={"primary"}
                className="w-full"
              />
              <Button
                children="Instagram"
                icon={true}
                size={"default"}
                rightIcon={<FiInstagram />}
                variant={"primary"}
                className="w-full"
              />
            </div>
            <Link href={"./user_auth/signup"}>
              {" "}
              <Button
                children="Choose"
                icon={true}
                size={"default"}
                variant={"default"}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Template;
