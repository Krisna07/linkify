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
    <div className="w-full flex items-center flex-col justify-center gap-8 px-8 py-12">
      <div className="w-full grid place-items-center text-center">
        <h2 className="text-4xl font-bold mb-4">Pricing</h2>
        <p className="md:w-1/2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          veritatis labore, ad suscipit ullam similique sequi ratione culpa
          nesciunt mollitia!
        </p>
      </div>
      <div className="md:w-fit bg-white   flex items-center justify-between md:gap-16 gap-32 ">
        {pricings.map((pricing) => (
          <div
            className="w-fit py-16 px-8 grid place-items-center gap-4 shadow-bs rounded-lg hover:scale-[1.1] transition-all"
            key={pricing.type}
          >
            <h3 className="text-lg font-semibold mb-2">{pricing.type}</h3>
            <p className="text-gray-600 mb-4 text-center">
              {pricing.des.map((des) => (
                <div key={des}>
                  <li>{des}</li>
                </div>
              ))}
            </p>
            <p className="text-3xl font-bold mb-2">{pricing.price}</p>
            <Button children={"Select"} variant={"default"} />
          </div>
        ))}
        {/* <div className="w-fit py-16 px-8 grid place-items-center gap-4 shadow-bs rounded-lg hover:scale-[1.1] transition-all">
          <h3 className="text-lg font-semibold mb-2">Basic</h3>
          <p className="text-gray-600 mb-4 text-center">
            
          </p>
          <p className="text-3xl font-bold mb-2">$9.99/month</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Select
          </button>
        </div>

        <div className="w-fit py-16 px-8 grid place-items-center gap-4 shadow-bs rounded-lg scale-[1.1] transition-all shadow-red-400">
          <h3 className="text-lg font-semibold mb-2">Standard</h3>
          <p className="text-gray-600 mb-4 text-center">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="text-3xl font-bold mb-2">$19.99/month</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Select
          </button>
        </div>

        <div className="w-fit py-16 px-8 grid place-items-center gap-4 shadow-bs rounded-lg hover:scale-[1.1] transition-all">
          <h3 className="text-lg font-semibold mb-2">Premium</h3>
          <p className="text-gray-600 mb-4 text-center">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="text-3xl font-bold mb-2">$29.99/month</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Select
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default PricingTable;
