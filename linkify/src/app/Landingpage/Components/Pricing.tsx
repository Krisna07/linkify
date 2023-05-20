import React from "react";

const PricingTable: React.FC = () => {
  return (
    <div className="w-2/4 flex items-center flex-col justify-center gap-8 py-12">
      <div className="w-full text-left">
        <h2 className="text-4xl font-bold mb-4">Pricing</h2>
        <p className="w-3/4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          veritatis labore, ad suscipit ullam similique sequi ratione culpa
          nesciunt mollitia!
        </p>
      </div>
      <div className="w-fit bg-white   flex items-center justify-between gap-16 ">
        {/* Pricing Range 1 */}
        <div className="w-fit py-16 px-8 grid place-items-center gap-4 shadow-bs rounded-lg hover:scale-[1.1] transition-all">
          <h3 className="text-lg font-semibold mb-2">Basic</h3>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet.</p>
          <p className="text-3xl font-bold mb-2">$9.99/month</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Select
          </button>
        </div>

        {/* Pricing Range 2 */}
        <div className="w-fit py-16 px-8 grid place-items-center gap-4 shadow-bs rounded-lg scale-[1.1] transition-all">
          <h3 className="text-lg font-semibold mb-2">Standard</h3>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet.</p>
          <p className="text-3xl font-bold mb-2">$19.99/month</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Select
          </button>
        </div>

        {/* Pricing Range 3 */}
        <div className="w-fit py-16 px-8 grid place-items-center gap-4 shadow-bs rounded-lg hover:scale-[1.1] transition-all">
          <h3 className="text-lg font-semibold mb-2">Premium</h3>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet.</p>
          <p className="text-3xl font-bold mb-2">$29.99/month</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
