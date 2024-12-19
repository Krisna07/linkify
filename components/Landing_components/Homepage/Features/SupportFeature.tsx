import { FaFacebookF, FaSlack, FaXTwitter } from "react-icons/fa6";
import { TbBrandTeams } from "react-icons/tb";
import FeatureCard from "./FeatureCard";

const SupportFeature = () => {
  return (
    <FeatureCard
      heading="Support"
      subheading="Create board Generate link, share in internet for insights"
      description="Our support infrastructure is crafted to guide you at every turn. Whether it's navigating our platform, understanding its functionalities, or addressing any concerns, our committed team is on hand to deliver a smooth experience."
    >
      <div className="w-full grid gap-8 relative z-10 my-16">
        <div className="max-w-full flex justify-between relative translate-y-12">
          <div className="w-fit grid bg-[blue] rounded-2xl shadow-bs p-2">
            <span className="flex place-items-center font-[600] gap-2">
              <FaFacebookF color="white" size={50} />
            </span>
          </div>
          <div className="w-fit grid bg-dark rounded-2xl shadow-bs p-2 relative -translate-y-16">
            <span className="flex place-items-center font-[600] gap-2">
              <FaXTwitter color="white" size={50} />
            </span>
          </div>
          <div className="w-fit grid bg-white rounded-2xl shadow-bs p-2 relative -translate-y-8">
            <span className="flex place-items-center font-[600] gap-2">
              <FaSlack color="aubergine" size={50} />
            </span>
          </div>
          <div className="w-fit grid bg-white rounded-2xl shadow-bs p-2 relative -translate-y-16">
            <span className="flex place-items-center font-[600] gap-2">
              <TbBrandTeams color="#6264A7" size={50} />
            </span>
          </div>
        </div>
      </div>
    </FeatureCard>
  );
};

export default SupportFeature;
