import React from "react";
import Button from "../Landingpage/Components/ui/Button";
import { FaCheck, FaCoins } from "react-icons/fa";
import { X } from "lucide-react";
import { BiX } from "react-icons/bi";

const Pricing = () => {
  const pricingTiers = [
    {
      tierName: "Free",
      des: "Unlimited links and a customizable Linktree to connect your community to everything you are.",
      price: "0",
      usersIncluded: 1,
      storage: "1 GB",
      features: {
        basic: true,
        advanced: false,
        premium: false,
      },
      prioritySupport: false,
      customization: false,
      freeTrial: true,
    },
    {
      tierName: "Strater",
      des: "More customization and control for creators ready to drive more traffic to and through their Linktree.",
      price: "9.99",
      usersIncluded: 1,
      storage: "10 GB",
      features: {
        basic: true,
        advanced: true,
        premium: false,
      },
      prioritySupport: false,
      customization: false,
      freeTrial: true,
    },
    {
      tierName: "Pro",
      price: "19.99",
      des: "Grow, learn about and own your following forever with a branded Linktree. ",

      usersIncluded: 5,
      storage: "50 GB",
      features: {
        basic: true,
        advanced: true,
        premium: true,
      },
      prioritySupport: true,
      customization: false,
      freeTrial: true,
    },
    {
      tierName: "Premium",
      price: "29.99",
      des: "The VIP support plan for businesses ready to monetize and sell on a larger scale.      ",
      usersIncluded: 10,
      storage: "100 GB",
      features: {
        basic: true,
        advanced: true,
        premium: true,
      },
      prioritySupport: true,
      customization: true,
      freeTrial: true,
    },
  ];

  return (
    <div className="w-full  grid place-items-center">
      <div className="w-full bg-gray-300 grid place-items-center h-[400px] p-[40px]">
        <div className="lg:w-[1000px] grid place-items-center gap-4 text-center">
          <h2 className="font-bold text-[32px]  text-center uppercase">
            Lorem ipsum dolor sit amet{" "}
            <span className="border-b border-[4] border-red-400">
              consectetur
            </span>{" "}
            aut
          </h2>
          <p className="w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            neque! Aperiam ullam pariatur iure reprehenderit similique officiis
            inventore sequi dolores.
          </p>
        </div>
      </div>
      <div className="w-full  grid place-items-center py-8 px-4 gap-4 ">
        <h2 className="text-[32px] font-bold text-left ">
          Pick the perfect plan{" "}
        </h2>
        <p>Start with our free plan. No credit card needed.Cancel Anytime</p>
        <div className="lg:w-[1000px] grid md:grid-cols-2 gap-x-6 gap-y-8 box-border md:p-8  ">
          {pricingTiers.map((tier) => (
            <div className="shadow-bs w-full flex items-start box-border py-4 px-8 gap-4 hover:bg-sky-200/25">
              {" "}
              <div key={tier.tierName} className="w-full p-4 grid gap-4">
                <h3 className="font-semibold text-gray-600">{tier.tierName}</h3>
                <h2 className="text-xl font-bold">{tier.price}</h2>
                <Button
                  children="Start"
                  variant={"default"}
                  icon={true}
                  className="h-fit w-full text-center grid rounded-lg"
                />
                <table className="font-semibold text-gray-600">
                  <tr>
                    <td>Storage</td>
                    <td>{tier.storage}</td>
                  </tr>
                  <tr>
                    <td>Users</td>
                    <td>{tier.usersIncluded}</td>
                  </tr>
                  <tr>
                    <td>Basic Features</td>
                    <td>
                      {tier.features.basic ? (
                        <FaCheck color="skyblue" />
                      ) : (
                        <X color="red" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Advance Features</td>
                    <td>
                      {tier.features.advanced ? (
                        <FaCheck color="skyblue" />
                      ) : (
                        <X color="red" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Premium Features</td>
                    <td>
                      {tier.features.premium ? (
                        <FaCheck color="skyblue" />
                      ) : (
                        <X color="red" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Priority Support</td>
                    <td>
                      {tier.prioritySupport ? (
                        <FaCheck color="skyblue" />
                      ) : (
                        <X color="red" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Customization</td>
                    <td>
                      {tier.customization ? (
                        <FaCheck color="skyblue" />
                      ) : (
                        <X color="red" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Free Trial</td>
                    <td>
                      {tier.freeTrial ? (
                        <FaCheck color="skyblue" />
                      ) : (
                        <X color="red" />
                      )}
                    </td>
                  </tr>
                </table>
              </div>
              <div className="p-2 bg-gray-600 rounded-lg relative  ">
                <FaCoins
                  size={40}
                  color="white"
                  className="blur absolute animate-pulse"
                />
                <FaCoins size={40} color="white" className="relative" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-[32px] font-bold "> </h2>
    </div>
  );
};

export default Pricing;

// git config --global user.email "krisnachhetri07@gmail.com"
// git config --global user.name "Krisna07"
