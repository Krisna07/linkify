"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "John Doe",
      company: "ABC Company",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/john-doe.jpg",
    },
    {
      name: "Jane Smith",
      company: "XYZ Inc.",
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "/images/jane-smith.jpg",
    },
    {
      name: "Michael Johnson",
      company: "123 Corporation",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      image: "/images/michael-johnson.jpg",
    },
    {
      name: "Sarah Thompson",
      company: "456 Corporation",
      quote:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/sarah-thompson.jpg",
    },
    {
      name: "David Wilson",
      company: "789 Corp",
      quote:
        "Excepteur sint occaecat cupidata sunt ia deserunt mollit anim id est laborum.",
      image: "/images/david-wilson.jpg",
    },
    {
      name: "Emily Davis",
      company: "ABC Company",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/emily-davis.jpg",
    },
    {
      name: "Robert Johnson",
      company: "XYZ Inc.",
      quote: "Ut enim ad minim veniam, qitation ullamco laboris.",
      image: "/images/robert-johnson.jpg",
    },
    {
      name: "Olivia Taylor",
      company: "123 Corporation",
      quote: "Duis aute irure dolor it esse cillum dolore.",
      image: "/images/olivia-taylor.jpg",
    },
    {
      name: "Daniel Anderson",
      company: "456 Corporation",
      quote:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/daniel-anderson.jpg",
    },
    {
      name: "Sophia Thompson",
      company: "789 Corp",
      quote: "Excepteur sint occaecat cupidatat non lrum.",
      image: "/images/sophia-thompson.jpg",
    },
  ];

  return (
    <section className="w-4/5 py-12 overflow-hidden">
      <div className=" w-full  ">
        <h2 className="text-3xl font-semibold mb-8">Customer Testimonials</h2>

        <div className="w-full relative ">
          <div
            className={`w-[100%]  flex  space-x-8 transition-transform ease-in-out duration-300 transform 
         `}
          >
            <Marquee>
              {" "}
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-[400px] h-[200px] bg-white shadow-md text-center p-6 overflow-hidden mx-4 rounded-lg "
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{testimonial.company}</p>
                  <p className="text-gray-800">{testimonial.quote}</p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
