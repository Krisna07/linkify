import React from "react";
import Button from "../Landingpage/Components/ui/Button";
import { FaCheck, FaCoins,  } from "react-icons/fa";
import { X } from "lucide-react";
import { BiX } from "react-icons/bi";



const Pricing = () => {
  const pricingTiers = [
    {
      tierName: "Free",
      price: "$0/mo",
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
      tierName: "Basic",
      price: "$9.99/mo",
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
      tierName: "Standard",
      price: "$19.99/mo",
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
      price: "$29.99/mo",
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
      <h2 className="text-[32px] font-bold ">Pricing Plans </h2>
      <p>Start With Our Free Plan. No Credit Card Needed.Cancel Anytime</p>
        <div className="lg:w-[1000px] grid md:grid-cols-2 gap-x-6 gap-y-8 box-border md:p-8  ">
        
        {
          pricingTiers.map((tier)=> <div className="shadow-bs w-full flex items-start box-border py-4 px-8 gap-4 hover:bg-sky-200/25 "> <div key={tier.tierName} className="w-full p-4 grid gap-4">
          <h3 className="font-semibold text-gray-600">{tier.tierName}</h3>
          <h2 className="text-xl font-bold">{tier.price}</h2>
         <table  className="font-semibold text-gray-600">
       <tr>  
         <td >Storage</td>
          <td >{tier.storage}</td>
          </tr>
          <tr>   
            <td>Users</td>
          <td>{tier.usersIncluded}</td>
          </tr>
          <tr> 
              <td>Basic Features</td>
          <td>{tier.features.basic?<FaCheck color="skyblue" />:<X color="red"/>}</td>
          </tr>
          <tr>
            <td>Advance Features</td>
            <td>{tier.features.advanced?<FaCheck color="skyblue"/>:<X color="red"/>}</td>
          </tr>
          <tr> 
              <td>Premium Features</td>
              <td>{tier.features.premium?<FaCheck color="skyblue"/>:<X color="red"/>}</td>
          </tr>
          <tr> 
              <td>Priority Support</td>
              <td>{tier.prioritySupport?<FaCheck color="skyblue"/>:<X color="red"/>}</td>
          </tr>
          <tr> 
              <td>Customization</td>
              <td>{tier.customization?<FaCheck color="skyblue"/>:<X color="red"/>}</td>
          </tr>
          <tr> 
              <td>Free Trial</td>
              <td>{tier.freeTrial?<FaCheck color="skyblue"/>:<X color="red"/>}</td>
          </tr>
       
         </table>
          <Button
            children="Start"
            variant={"default"}
            icon={true}
            className="h-fit"
          />
        </div>
        <div className="p-2 bg-gray-600 rounded-lg relative  ">
          <FaCoins size={40} color="white" className="blur absolute animate-pulse"/>
          <FaCoins size={40} color="white" className="relative"/>
        </div>
      </div>)
        }
          
          
         
          
        </div>
      </div>
    </div>
  );
};

export default Pricing;

// git config --global user.email "krisnachhetri07@gmail.com"
// git config --global user.name "Krisna07"