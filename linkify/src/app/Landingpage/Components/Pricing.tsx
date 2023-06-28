import React from "react";
import Button from "./ui/Button";

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
    <div className="w-full flex items-center flex-col justify-center gap-8 px-8 py-12 overflow-hidden ">
      <div className="w-full  grid place-items-center text-center">
        <h2 className="text-4xl font-bold mb-4">Pricing</h2>
        <p className="md:w-1/2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          veritatis labore, ad suscipit ullam similique sequi ratione culpa
          nesciunt mollitia!
        </p>
      </div>
      <div className="w-full md:w-[80%] lg:w-[1000px] p-4  grid place-items-center md:grid-cols-3 grid-cols-1 mb-8 gap-8 space-x-3 relative left-[-400]   ">
        {pricings.map((pricing) => (
          <div
            className={`md:w-fit w-[100%] py-16 px-8 grid place-items-center gap-4 shadow-bs rounded-lg hover:scale-[1.1] transition-all hover:bg-sky-200 ${
              pricings.indexOf(pricing) == 1 ? "scale-[1.1] bg-sky-200" : ""
            }`}
            key={pricing.type}
          >
            {pricings.indexOf(pricing) == 1 ? (
              <h2 className="text-sm font-bold color-sky-600">Recommended</h2>
            ) : (
              ""
            )}
            <h3 className="text-lg font-semibold mb-2">{pricing.type}</h3>
            <div className="text-gray-600  text-center">
              {pricing.des.map((des) => (
                <li key={des}>{des}</li>
              ))}
            </div>
            <p className="text-3xl font-bold mb-2">{pricing.price}</p>
            <Button children={"Select"} variant={"default"} icon={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
