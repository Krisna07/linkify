import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { toast } from "react-toastify";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Verify() {
  const [isOpen, setIsOpen] = useState(false);
  const [otp, setOtp] = useState<string>("");

  const submitOTP = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (otp.length !== 4) {
      toast("otp must be 4 digits");
    } else {
      setIsOpen(false);
      console.log(otp);
    }
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="relative grid place-items-center "
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Not verified
      </motion.button>
      <motion.div
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="absolute  z-[100]  inset-y-[150%] w-fit h-fit p-4 bg-white text-dark grid place-items-center gap-2"
      >
        <motion.div variants={itemVariants}>
          {" "}
          <div className="font-semibold text-2xl">
            <p>Email Verification</p>
          </div>
          <div className="flex text-center flex-col gap-1 text-sm font-medium text-dark">
            <p className="whitespace-nowrap">
              We have sent a code to your email{" "}
            </p>
            <span className="text-primary"> ba**@dipainhouse.com</span>
          </div>
        </motion.div>

        <div>
          <motion.form
            variants={itemVariants}
            action=""
            method="post"
            onSubmit={submitOTP}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col space-y-5">
                <div className="relative flex flex-col space-x-2 ">
                  <div className="absolute w-full h-full flex gap-2 items-center justify-between">
                    <div className="w-1/4 h-full ring-2 ring-primary rounded-xl"></div>
                    <div className="w-1/4 h-full ring-2 ring-primary rounded-xl"></div>
                    <div className="w-1/4 h-full ring-2 ring-primary rounded-xl"></div>
                    <div className="w-1/4 h-full ring-2 ring-primary rounded-xl"></div>
                  </div>
                  <input
                    type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setOtp(e.target.value)
                    }
                    value={otp}
                    maxLength={4}
                    className=" pl-[3rem] py-2 text-2xl tracking-[4rem] bg-transparent relative outline-none"
                  />
                </div>
                <div>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-2 bg-primary border-none text-white text-sm shadow-sm"
                  >
                    Verify Account
                  </motion.button>
                </div>

                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                  <p>Didn't recieve code?</p>{" "}
                  <a
                    className="flex flex-row items-center text-blue-600"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resend
                  </a>
                </div>
              </div>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </motion.div>
  );
}
