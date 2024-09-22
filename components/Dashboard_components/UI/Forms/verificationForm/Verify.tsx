"use client";
import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { toast } from "react-toastify";

import useOutsideClick from "../../../../../lib/outsideclick";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import VerifyCode, {
  HandleNewCode,
  handleVerification,
} from "../../../utils/verify";

import { userProps } from "../../../utils/Interfaces";
import { VerificationProps } from "../../Navbar/Appnav";
import Counter from "../../../../Landing_components/Homepage/Features/Counter";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

interface TimerProps {
  mins: number;
  sec: number;
}

const useTimer = (expiryTime: any, isExpired: boolean) => {
  const [timer, setTimer] = useState<TimerProps | null>(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isExpired) {
        const currentTime = Math.floor(new Date().getTime() / 1000);
        const willexpireIn = Math.floor(expiryTime / 1000) + 3600;
        const timeLeft = willexpireIn - currentTime;

        const mins = Math.floor((timeLeft % 3600) / 60);
        const sec = Math.floor(timeLeft % 60);
        setTimer({ mins, sec });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [expiryTime, isExpired]);
  return timer;
};

const useOTP = (user: userProps) => {
  const [otp, setOtp] = useState<string>("");
  const [isverifying, setIsverifying] = useState(false);

  const submitOTP = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (otp.length !== 4) {
      toast("otp must be 4 digits");
    } else {
      handleVerification({ code: otp, id: user.id }).then((res) =>
        console.log(res)
      );
    }
  };

  return { otp, setOtp, submitOTP };
};

export default function Verify({
  user,
  verification,
}: {
  user: userProps;
  verification: VerificationProps;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const verifyRef = useRef(null);

  useOutsideClick(verifyRef, () => setIsOpen(false));

  const timer = useTimer(verification.expiryTime, verification.isExpired);
  const { otp, setOtp, submitOTP } = useOTP(user);

  const ActionResendCode = async () => {
    setIsLoading(true);
    console.log("Sending new code");
    const patchResponse = await HandleNewCode(user.id);
    console.log(patchResponse);
    setIsLoading(false);
  };
  // console.log(verification);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="tablet:relative grid place-items-center"
      ref={verifyRef}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary hidden px-3 py-[2px] tablet:flex items-center rounded-full text-[10px] font-[600]"
      >
        {!verification.isVerified && "Not verified"}
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="tablet:hidden text-[red] bg-[gray]/50 px-3 py-[2px] flex items-center rounded-full font-[600]"
      >
        <RiVerifiedBadgeFill />
        <FaTimes />
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
        className="absolute text-center w-full z-[100] inset-0 inset-y-[50%] tablet:inset-y-[150%] tablet:w-fit h-fit p-4 bg-white text-dark grid place-items-center gap-2"
      >
        {!verification.isExpired ? (
          <>
            <motion.div variants={itemVariants}>
              <div className="font-semibold text-2xl">
                <p>Email Verification</p>
              </div>
              <div className="flex text-center flex-col gap-1 text-sm font-medium text-dark">
                <p className="whitespace-nowrap">
                  We have sent a code to your email
                </p>
                <span className="text-primary"> {user.email}</span>
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
                    <div className="relative flex flex-col space-x-2">
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
                        className="pl-[3rem] py-2 text-2xl tracking-[4rem] bg-transparent relative outline-none"
                      />
                    </div>
                    <div className="">
                      {timer && (
                        <div className="flex items-center gap-2 justify-center">
                          <span>code expires in </span>
                          <div className="w-fit flex  px-1 bg-accent text-xl font-bold text-white items-center justify-center leading-[100%] gap-1 ">
                            <Counter number={timer.mins} />:
                            <Counter number={timer.sec} />
                          </div>
                          {/* {timer.mins}:{timer.sec} */}
                        </div>
                      )}
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
                      <p>Didn't receive code?</p>
                      <div
                        className="w-fit font-bold text-primary cursor-pointer"
                        onClick={ActionResendCode}
                      >
                        {isLoading ? "Sending..." : "Resend"}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.form>
            </div>
          </>
        ) : (
          <>
            <motion.div variants={itemVariants}>
              <div className="font-semibold text-2xl">
                <p>Email Verification</p>
              </div>
              <div className="flex text-center flex-col gap-1 text-sm font-medium text-dark">
                <p className="whitespace-nowrap">
                  Your verification email has expired.
                </p>
              </div>
            </motion.div>
            <div>
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="flex flex-row px-4 items-center justify-center text-center w-full border rounded-xl outline-none py-2 bg-primary border-none text-white text-sm shadow-sm"
                onClick={ActionResendCode}
              >
                {isLoading ? "Sending..." : "Resend Code"}
              </motion.button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
