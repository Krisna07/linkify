import { FaRegUserCircle, FaRegClipboard, FaRegStar } from "react-icons/fa";
import { TbUsersGroup, TbProgress } from "react-icons/tb";
import FeatureCard from "./FeatureCard";

type FeatureItem = {
  icon: JSX.Element;
  label: string;
  value: number;
  suffix: string;
};

const ScaleableFeature = () => {
  const featureItems: FeatureItem[] = [
    {
      icon: <FaRegUserCircle color="blue" />,
      label: "Boards",
      value: 1212,
      suffix: "Created",
    },
    {
      icon: <FaRegClipboard color="orange" />,
      label: "Projects",
      value: 10,
      suffix: "Available",
    },
    {
      icon: <TbUsersGroup color="purple" />,
      label: "Shared",
      value: 18,
      suffix: "Groups",
    },
    {
      icon: <FaRegStar color="green" />,
      label: "Reviews",
      value: 22,
      suffix: "Reviews",
    },
  ];

  return (
    <FeatureCard
      heading="Scaleable"
      subheading="A single account can hold all the necessary boards"
      description="Our platform is designed for scalability, effortlessly managing large number of boards,  projects,  groups, and collective reviews to meet the growing needs of our users while ensuring optimal organization and efficiency."
    >
      <div className="w-full grid gap-8 relative z-10">
        <div className="w-full grid grid-cols-2 gap-8">
          {featureItems.map((item, index) => (
            <div
              key={index}
              className="w-full grid bg-white rounded-2xl shadow-bs p-2"
            >
              <span className="flex place-items-center font-[600] gap-2">
                {item.icon} {item.label}
              </span>
              <span className="flex text-[10px] uppercase text-[gray]/75 gap-1">
                <span className="font-bold">{item.value}</span>
                {item.suffix}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full grid place-items-center">
          <div className="flex items-center gap-2 font-[500] py-1 text-white bg-dark px-2 rounded-full">
            <TbProgress /> <span className="text-[10px]">Track</span>
          </div>
        </div>
      </div>
    </FeatureCard>
  );
};

export default ScaleableFeature;
