import { FcIdea } from "react-icons/fc";
import { BsPinAngleFill, BsRocketFill } from "react-icons/bs";
import { TbStarFilled } from "react-icons/tb";
import { MdOutlineAddReaction } from "react-icons/md";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";

const CollaborateFeature = () => {
  return (
    <FeatureCard
      heading="Collaborate"
      subheading="Enhance Team Collaboration with Tools and Communication Features"
      description="Discover how our platform's interactive features—likes, shares, and comments—bring your team's ideas to life, fostering a vibrant community of collaboration."
    >
      <div className="w-full grid gap-8 relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
          }}
          viewport={{ once: true }}
          className="w-fit px-4 grid bg-[lightgray]/25  rounded-2xl shadow-bs p-1 border-white border-4"
        >
          <span className=" text-sm text-[gray]/75 font-semibold flex items-center gap-2 whitespace-nowrap leading-4">
            Reviewed on <FcIdea className="text-dark bg-dark/25 rounded" /> AI
            Social
          </span>
        </motion.div>

        <div className="w-full grid place-items-center relative ">
          <div className="absolute w-[80%] h-full bg-white shadow-bs rounded-3xl z-[10] translate-y-4 "></div>
          <div className="w-full grid gap-2 shadow-bs p-4 rounded-3xl relative z-[20] bg-white ">
            <div className="flex  items-center gap-2 font-semibold text-[gray]/75 text-sm">
              <span className="p-2 bg-accent rounded-full w-8 h-8 font-semibold text-white flex items-center justify-center  ">
                L
              </span>
              Lucas Muller
            </div>
            <div className="grid gap-2">
              <div className="ml-4 text-sm flex gap-1 font-sans font-[700] relative overflow-hidden">
                <span className="text-[blue]">@Adam </span> the idea looks
                awsome !!
                <motion.div
                  viewport={{ once: true }}
                  initial={{ x: 0 }}
                  whileInView={{ x: "100%" }}
                  transition={{ type: "tween", duration: 1 }}
                  className="absolute bg-white w-full h-full"
                ></motion.div>
              </div>
              <div className="flex gap-2 items-cenetr">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1 }}
                  className="flex gap-[4px] items-center text-[gray]/75 text-sm"
                >
                  <BsPinAngleFill color="red" size={16} /> 8
                </motion.div>
                <motion.div
                  viewport={{ once: true }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.5 }}
                  className="flex gap-[4px] items-center text-[gray]/75 text-sm"
                >
                  <TbStarFilled color="orange" size={16} /> 3
                </motion.div>{" "}
                <motion.div
                  viewport={{ once: true }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 2 }}
                  className="flex gap-[4px] items-center text-[gray]/75 text-sm"
                >
                  <BsRocketFill
                    color="black"
                    size={16}
                    className="rotate-[45deg]"
                  />{" "}
                  7
                </motion.div>
                <motion.div
                  viewport={{ once: true }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 2.5 }}
                  className="flex gap-[4px] items-center text-[gray]/75 text-sm"
                >
                  <MdOutlineAddReaction color="gray" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeatureCard>
  );
};

export default CollaborateFeature;
