"use client";

import {
  ChangeEvent,
  ClipboardEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, Variants } from "framer-motion";
import { toast } from "react-toastify";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
// import { useSession } from "next-auth/react";
import { userProps, VerificationProps } from "../../../utils/Interfaces";
import useOutsideClick from "../../../../../lib/outsideclick";
import { HandleNewCode, handleVerification } from "../../../utils/verify";
import Counter from "../../../../Landing_components/Homepage/Features/Counter";
// import { useSession } from "next-auth/react";

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

interface VerificationComponentProps {
  verification: VerificationProps;
  user: userProps;
  updateVerificationData: () => void;
}

const useTimer = (expiryTime: number, isExpired: boolean) => {
  const [timer, setTimer] = useState<TimerProps | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isExpired) {
        const currentTime = Math.floor(new Date().getTime() / 1000);
        const willExpireIn = expiryTime;
        const timeLeft = willExpireIn - currentTime;

        if (timeLeft <= 0) {
          clearInterval(intervalId);
          setTimer(null);
        } else {
          const mins = Math.floor((timeLeft % 3600) / 60);
          const sec = Math.floor(timeLeft % 60);
          setTimer({ mins, sec });
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [expiryTime, isExpired]);

  return timer;
};

export default function Verify({
  verification,
  user,
  updateVerificationData,
}: VerificationComponentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const verifyRef = useRef(null);
  const [code, setCode] = useState(["", "", "", ""]);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const [isVerifying, setIsVerifying] = useState(false);
  // const { data: session, update } = useSession();
  const handleChange = (index: number, value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const newCode = [...code];
    newCode[index] = numericValue;
    setCode(newCode);

    if (numericValue && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (
      !/^[0-9]$/.test(e.key) &&
      !["Backspace", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key) &&
      !(e.metaKey || e.ctrlKey)
    ) {
      e.preventDefault();
      toast("Please enter only numeric values.");
    }

    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight" && index < 3) {
      inputs.current[index + 1]?.focus();
    }

    if (e.key === "ArrowLeft" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, 4);
    const newCode = [...code];
    for (let i = 0; i < 4; i++) {
      newCode[i] = pastedData[i] || "";
    }
    setCode(newCode);
    if (pastedData.length === 4) {
      inputs.current[3]?.focus();
    } else {
      inputs.current[pastedData.length]?.focus();
    }
  };

  useOutsideClick(verifyRef, () => setIsOpen(false));

  const timer = useTimer(verification.expiryTime, verification.isExpired);

  const submitOTP = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsVerifying(true);
    const otp = code.join("");

    if (otp.length !== 4) {
      toast("OTP must be 4 digits");
      setIsVerifying(false);
    } else {
      try {
        await handleVerification({ code: otp, id: user.id }).then((res) => {
          if (res.status === 200) {
            updateVerificationData();
            return toast("Account verified");
          } else {
            toast(res.message);
          }
        });
      } catch (error) {
        toast("An error occurred during verification");
      } finally {
        setIsVerifying(false);
      }
    }
  };

  const ActionResendCode = async () => {
    setIsLoading(true);
    try {
      await HandleNewCode(user.id).then((response) => {
        if (response.status === 200) {
          updateVerificationData();

          return toast("New code sent");
        } else {
          toast(response.message);
        }
      });
    } catch (error) {
      toast("An error occurred while resending the code");
    } finally {
      setIsLoading(false);
    }
  };

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
        {!verification.isExpired && timer ? (
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
                    <div className="flex gap-2">
                      {code.map((digit, index) => (
                        <input
                          key={index}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleChange(index, e.target.value)
                          }
                          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                            handleKeyDown(index, e)
                          }
                          onPaste={handlePaste}
                          ref={(el) => (inputs.current[index] = el)}
                          className="w-14 h-14 text-center text-2xl border-2 border-teal-600 rounded"
                        />
                      ))}
                    </div>
                    <div className="">
                      {timer && (
                        <div className="flex items-center gap-2 justify-center">
                          <span>code expires in </span>
                          <div className="w-fit flex  px-1 bg-accent text-xl font-bold text-white items-center justify-center leading-[100%] gap-1 ">
                            <Counter number={timer.mins} />:
                            <Counter number={timer.sec} />
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-2 bg-primary border-none text-white text-sm shadow-sm"
                        disabled={isVerifying}
                      >
                        {isVerifying ? "Verifying Account" : "Verify Account"}
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
