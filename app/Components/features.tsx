import Image from "next/image";
import {
  FaChevronUp,
  FaExpandAlt,
  FaLink,
  FaShareSquare,
} from "react-icons/fa";
import { GiAutoRepair, GiDiploma } from "react-icons/gi";

const features = [
  {
    id: 1,
    icon: <FaExpandAlt className=" text-gray-800" />,
    title: "Scalable",
    description:
      "Linkify can handle any number of links you throw at it. Whether you have just a few social media accounts or a hundred, Linkify can manage them all with ease.",
  },
  {
    id: 2,
    icon: <FaLink className=" text-gray-800" />,
    title: "Easy to Use",
    description:
      "Linkify has a simple and intuitive interface that allows you to add, remove, and reorder links quickly and easily.",
  },
  {
    id: 3,
    icon: <GiAutoRepair className=" text-gray-800" />,
    title: "Automatic Link Repair",
    description:
      "Linkify automatically detects broken links and removes them from your list. You don't have to worry about manually checking and updating your links.",
  },
  {
    id: 4,
    icon: <FaShareSquare className=" text-gray-800" />,
    title: "Share Everywhere",
    description:
      "Linkify provides you with a single link that you can share on all your social media accounts. This makes it easy for your followers to find and connect with you on all platforms.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full ">
      <div className="container sm:px-6 lg:px-8 gap-16  box-border p-4">
        <div className="flex items-center justify-between box-border gap-16 ">
          <div className="w-3/5">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900 mb-8 text-gray-700">
              Features
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto magnam nostrum enim quod maxime! Nemo similique optio
              veniam sunt ex. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Repellendus libero eveniet tempora sunt commodi.
              Ut ea eos cupiditate rerum eligendi explicabo quibusdam totam
            </p>
          </div>
          <div className="w-2/5 box-border rounded flex">
            <img
              src={
                "https://cdn.dribbble.com/users/239075/screenshots/6128789/media/9419c0a3cba0175c78dcb3c339160427.gif"
              }
              width={"100%"}
              className="box-border  rounded"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((features) => (
            <div
              className="min-h-fit p-6 box-border bg-red-100/50 rounded hover:scale-[1.1] transition"
              key={features.id}
            >
              <h3 className="text-lg font-bold mb-2 flex items-center w-full relaxed justify-between">
                {features.title} {features.icon}
              </h3>
              <p className="text-gray-600">{features.description}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between gap-8">
          <div className="w-[50%] bg-blue-500 box-border p-4 rounded">
            <h3 className="text-lg font-bold mb-2 flex items-center w-full relaxed justify-between">
              Users <FaChevronUp />
            </h3>
            <h3 className=" text-lg font-bold mb-2 flex items-center">
              {Math.floor(Math.random() * 10000)}
            </h3>
          </div>
          <div className="w-[50%] bg-blue-500 box-border p-4 rounded">
            <h3 className="text-lg font-bold mb-2 flex items-center w-full relaxed justify-between">
              Request <FaChevronUp />
            </h3>
            <h3 className=" text-lg font-bold mb-2 flex items-center">
              {Math.floor(Math.random() * 10000)}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
