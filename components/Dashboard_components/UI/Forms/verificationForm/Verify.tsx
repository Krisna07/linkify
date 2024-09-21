"use client";
import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { toast } from "react-toastify";

import useOutsideClick from "../../../../../lib/outsideclick";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import VerifyCode, { handlePatchRequest } from "../../../utils/verify";
import { sendEmail } from "../../../../../lib/mailer";
import { userProps } from "../../../utils/Interfaces";
import { getVerificationDetails } from "../../../utils/getVerification";
import Timer from "../../../utils/Timer";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Verify({ user }: { user: userProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [otp, setOtp] = useState<string>("");
  const [verificationData, setVerificationData] = useState({
    isVerified: false,
    isExpired: false,
    lastupdated: 0,
  });
  const clickhandler = () => setIsOpen(false);
  // const scrollHandler = () => setIsOpen(false);
  const [timer, setTimer] = useState({
    mins: 0,
    sec: 0,
  });

  const verifyRef = useRef(null);
  useOutsideClick(verifyRef, clickhandler);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getVerificationDetails();
        console.log(data);
        setVerificationData({
          isVerified: data.isVerified, // Ensure isVerified is included
          isExpired: data.isExpired,
          lastupdated: data.timeSinceLastUpdate,
        });
      } catch (error) {
        console.error("Failed to fetch verification details:", error);
      }
    };
    getData();
  }, []);

  // Added the missing third argument
  // console.log(
  //   `${
  //     Math.floor(60 - Math.floor(verificationData.lastupdated / 1000 / 60)) +
  //     ":" +
  //     Math.floor(60 - Math.floor(verificationData.lastupdated / 1000 / 60 / 60))
  //   }`
  // );
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!verificationData.isExpired) {
        const mins = Math.floor(60 - verificationData.lastupdated / 1000 / 60);
        const sec = Math.floor(
          60 - Math.floor(verificationData.lastupdated / 1000 / 60 / 60)
        );
        setTimer({
          mins: mins,
          sec: sec,
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [verificationData.lastupdated, verificationData.isExpired]);

  console.log(timer);
  //   const expiryTime = updatedTime + 60 * 60 * 1000;
  //   const timeLeft = expiryTime - currentTime;
  //   if (timeLeft >= 0) {
  //     const intervalId = setInterval(() => {
  //       setTimer(Math.floor(timeLeft / 1000)); // Decrease timer by 1 second
  //     }, 1000);
  //     console.log(timer);
  //     return () => clearInterval(intervalId); // Cleanup interval on component unmount
  //   } else {
  //     setTimer(0); // Reset timer if expired
  //   }
  // }, []); // Added dependency to re-run effect when lastupdated changes

  const submitOTP = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (otp.length !== 4) {
      toast("otp must be 4 digits");
    } else {
      const data = {
        code: otp,
        id: user.id,
      };
      VerifyCode(data);
    }
  };

  const ActionResendCode = async () => {
    console.log("Sending new code ");
    const patchResponse = await handlePatchRequest(user.id); // Call the function to handle the PATCH request
    console.log(patchResponse);
  }; // console.log(user);
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="tablet:relative grid place-items-center "
      ref={verifyRef}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary hidden  px-3  py-[2px] tablet:flex items-center rounded-full text-[10px] font-[600] "
      >
        {!verificationData.isVerified && "Not verified"}
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="tablet:hidden text-[red] bg-[gray]/50 px-3  py-[2px] flex items-center rounded-full  font-[600] "
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
        {!verificationData.isExpired ? (
          <>
            <motion.div variants={itemVariants}>
              <div className="font-semibold text-2xl">
                <p>Email Verification</p>
              </div>
              <div className="flex text-center flex-col gap-1 text-sm font-medium text-dark">
                <p className="whitespace-nowrap">
                  We have sent a code to your email{" "}
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
                    {/* <div className="">{timer && timer}</div> */}
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
                      <div
                        className="w-fit font-bold text-primary cursor-pointer"
                        onClick={() => ActionResendCode()}
                      >
                        Resend
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
                  Your verification email has been expired.
                </p>
              </div>
            </motion.div>
            <div>
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="flex flex-row px-4 items-center justify-center text-center w-full border rounded-xl outline-none py-2 bg-primary border-none text-white text-sm shadow-sm"
                onClick={() =>
                  setVerificationData({ ...verificationData, isExpired: false })
                }
              >
                Resend Code
              </motion.button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
