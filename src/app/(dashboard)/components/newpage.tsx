"use client";
import Button from "@/app/g_components/Button";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

interface newpageProps {}

export default function Newpage({ item }: any) {
  const [social, setSocial] = useState<string>("social");
  const [username, setUsername] = useState<string>("");

  const getIcon = () => {
    if (social == "facebook") {
      return <FaFacebook />;
    }
    if (social == "twitter") {
      return <FaTwitter />;
    }
    if (social == "instagram") {
      return <FaInstagram />;
    }
  };
  const [obj, setObj] = useState();

  const handleChange = (e: React.SyntheticEvent<HTMLOptionElement>) => {
    setSocial(e.target.value);
  };
  console.log(social);

  const submitForm = (e: React.SyntheticEvent<HTMLOptionElement>) => {
    e.preventDefault();
    const newSocial: any = {
      social: social,
      link: `https://www.${social}.com/${username}`,
      icon: getIcon(),
    };
    return item(newSocial);
  };

  return (
    <form
      className="w-fit bg-white absolute p-4 top-[120%] right-0  rounded-lg z-40 text-black grid gap-2 transition-all"
      onSubmit={submitForm}>
      <h2 className="w-full text-center text-lg font-[600]">Social</h2>
      <select
        name="social"
        value={social}
        onChange={handleChange}
        id="social"
        className="bg-gray-800 text-white">
        <option value="facebook">Facebook</option>
        <option value="twitter">Twitter</option>
        <option value="instagram">Instagram</option>
      </select>
      <label htmlFor="link">
        <h2>Link</h2>
        <span className="text-sm flex">
          https://www.{social}.com/
          <div className="border-b border-gray-900">
            <input
              type="text"
              className="text-sm bg-white outline-none border-none  border-none w-[100px]"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </span>
      </label>
      <Button
        children="submit"
        variant={"primary"}
        size={"sm"}
      />
    </form>
  );
}
