import React from "react";
import Button from "../../../g_components/Button";
import Link from "next/link";

const PricingTable: React.FC = () => {
  const pricings = [
    {
      type: "Basic",
      des: [
        "Generate 10 free tokens",
        "100 free request for a month",
        "Unique key for 1 login",
      ],
      price: "$9.99/month",
    },
    {
      type: "Standard",
      des: [
        "Generate 10 free tokens",
        "1000 free request for a month",
        "Unique key up to 3 login",
      ],
      price: "$14.99/month",
    },
    {
      type: "Premium",
      des: [
        "Generate unlimited free tokens",
        "Unlimited free request for a month",
        "Unique key for multiple devices",
      ],
      price: "$19.99/month",
    },
  ];
  return (
    <div className="w-full flex items-center flex-col justify-center gap-8 px-8 py-12 overflow-hidden text-white ">
      <div className="laptop:w-[1200px]  grid place-items-center text-center">
        <h2 className="text-4xl font-bold mb-4">Pricing</h2>
        <p className="laptop:w-1/2">
          Choose a plan that fits your needs. Enjoy the benefits of our
          feature-rich platform, designed to elevate your experience and offer
          exceptional value.
        </p>
      </div>
      <div className="w-full laptop:w-[1200px] p-4  grid place-items-center laptop:grid-cols-3 grid-cols-1 mb-8 gap-8 space-x-3 relative left-[-400]   ">
        {pricings.map((pricing) => (
          <div
            className={`laptop:w-fit w-[100%] py-16 px-8 grid place-items-center gap-4 shadow-bs rounded-lg hover:scale-[1.1] transition-all hover:bg-[#DD5746] ${
              pricings.indexOf(pricing) == 1
                ? "scale-[1.1] bg-[#4792AE]  text-black "
                : ""
            }`}
            key={pricing.type}
          >
            {pricings.indexOf(pricing) == 1 ? (
              <h2 className="text-sm font-bold color-sky-600">Recommended</h2>
            ) : (
              ""
            )}
            <h3 className="text-lg font-semibold mb-2">{pricing.type}</h3>
            <div className="w-full text-gray-300 ">
              {pricing.des.map((des) => (
                <li key={des}>{des}</li>
              ))}
            </div>
            <p className="text-3xl font-bold mb-2">{pricing.price}</p>
            <Button
              children={"Select"}
              size={"sm"}
              variant={"default"}
              icon={false}
            />
          </div>
        ))}
      </div>
      <Link href={"./pricings"}>
        <Button
          children={"Learn more"}
          variant={"primary"}
          size={"sm"}
          icon={true}
        />
      </Link>
    </div>
  );
};

export default PricingTable;
