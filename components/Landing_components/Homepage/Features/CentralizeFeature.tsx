import { FaPencilAlt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import FeatureCard from "./FeatureCard";

const CentralizeFeature = () => {
  return (
    <FeatureCard
      heading="Centralize"
      subheading="Track your boards and make changes from single place"
      description="Our platform's features are meticulously crafted to boost your productivity and simplify your project management tasks."
    >
      <div className="w-full flex gap-4 relative z-10">
        <div className="grid place-content-start gap-2">
          <span className="w-fit h-fit rounded-full shadow-bs p-2 ">
            <FaPencilAlt color="gray" />
          </span>
          <span className="w-fit h-fit rounded-full shadow-bs p-2 ">
            <CiSettings color="gray" />
          </span>
        </div>
        <div className="w-full h-full grid place-items-center   relative ">
          <div className="relative w-full grid gap-4 z-[20] bg-white p-4 shadow-bs rounded-3xl">
            <img
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1LzUwNC1meC0xMy1qb2IxNzU4XzEucG5n.png"
              width={40}
              height={40}
              alt="image"
              className="w-[60px] h-[60px] rounded-full object-cover bg-bermuda"
            />
            <h2 className="font-semibold">Ugon Times</h2>
            <table className="text-[12px] font-bold text-[gray]">
              <tr>
                <td className="text-[12px] font-bold ">Projects</td>
                <td className="text-dark">40</td>
              </tr>
              <tr>
                <td className="text-[12px] font-bold ">Completed</td>
                <td className="text-dark">15</td>
              </tr>
            </table>
            <div className="flex gap-2">
              <div className="w-fit flex items-center gap-2  font-[500] py-1 text-white bg-dark px-2 rounded-full">
                <BsTelephone size={10} />{" "}
                <span className="text-[10px]">Call</span>
              </div>{" "}
              <div className="w-fit flex items-center gap-2  font-[500] py-1  bg-dark/25 text-dark px-2 rounded-full">
                <span className="text-[10px]">Message</span>
              </div>
            </div>
          </div>
          <div className="absolute w-[80%] h-full bg-white shadow-bs rounded-3xl z-[10] translate-y-4"></div>
        </div>
        <div className=" grid place-items-center gap-4 ">
          <div className="bg-dark w-8 h-8   rounded-full border-2 border-white  shadow-bs grid place-items-center">
            <div className="w-2 h-2 bg-white  rounded-full self-center"></div>
          </div>
          <div className="grid ">
            <div className="bg-primary w-8 h-8   rounded-full border-2 border-white  shadow-bs grid place-items-center"></div>{" "}
            <div className="bg-[orange] w-8 h-8   rounded-full border-2 border-white shadow-bs grid place-items-center -translate-y-4"></div>{" "}
            <div className="bg-accent w-8 h-8   rounded-full border-2 border-white shadow-bs grid place-items-center -translate-y-8"></div>
          </div>
        </div>
      </div>
    </FeatureCard>
  );
};

export default CentralizeFeature;
