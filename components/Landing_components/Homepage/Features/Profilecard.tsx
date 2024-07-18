"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
interface ProfilecardProps {
  cardStyle: string;
  icon: any;
}

export default function Profilecard() {
  const profiles: ProfilecardProps[] = [
    {
      cardStyle: "bg-[red] z-50 bottom-0 left-0",
      icon: <FaTiktok size={32} />,
    },
    {
      cardStyle:
        "bg-[blue] z-40  z-40 hover:translate-y-[-40px] transition-all",
      icon: <FaFacebook size={32} />,
    },
    {
      cardStyle: "bg-[Yellow]  z-30 hover:translate-y-[-40px] transition-all",
      icon: <FaSnapchat size={32} />,
    },
    {
      cardStyle: "bg-[blue]  z-20 hover:translate-y-[-40px] transition-all",
      icon: <FaTwitter size={32} />,
    },
    {
      cardStyle:
        "bg-gradient-to-r from-[indigo] via-[purple] to-[pink]  z-10 hover:translate-y-[-40px] transition-all",
      icon: <FaInstagram size={32} />,
    },
  ];
  return (
    <>
      {profiles.map((card: ProfilecardProps, x) => (
        <motion.div
          initial={{}}
          whileInView={{
            left: 40 * profiles.indexOf(card),
            bottom: 40 * profiles.indexOf(card),
          }}
          transition={{
            type: "bounce",
            damping: 10,
            stiffness: 100,
          }}
          viewport={{ once: false }}
          key={x}
          className={`laptop:w-60 laptop:h-60 tablet:w-40 tablet:h-40  ${card.cardStyle} rounded-[10px] p-4 flex justify-between absolute left-0 bottom-0 transition:all`}
        >
          <div className="w-full flex items-start justify-between">
            <span className="w-20 h-20 rounded-full bg-rose-200 overflow-hidden bg-primary">
              <img
                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1LzUwNC1meC0xMy1qb2IxNzU4XzEucG5n.png"
                alt=""
              />
            </span>
            <span>{card.icon}</span>
          </div>
        </motion.div>
      ))}
    </>
  );
}
