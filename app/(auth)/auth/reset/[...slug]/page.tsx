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

import { useParams, useRouter } from "next/navigation";
import { handleVerification } from "../../../../../components/Dashboard_components/utils/verify";
import Input from "../../Formcomponents/Input";
import { BiLock } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import calculatePasswordStrength from "../../lib/PasswordStrengthCheck";
import { FaLock } from "react-icons/fa";

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

// const useTimer = (expiryTime: number, isExpired: boolean) => {
//   const [timer, setTimer] = useState<TimerProps | null>(null);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (!isExpired) {
//         const currentTime = Math.floor(new Date().getTime() / 1000);
//         const willExpireIn = expiryTime;
//         const timeLeft = willExpireIn - currentTime;

//         if (timeLeft <= 0) {
//           clearInterval(intervalId);
//           setTimer(null);
//         } else {
//           const mins = Math.floor((timeLeft % 3600) / 60);
//           const sec = Math.floor(timeLeft % 60);
//           setTimer({ mins, sec });
//         }
//       }
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [expiryTime, isExpired]);

//   return timer;
// };

export default function Verify() {
  const router = useRouter();
  const path = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [formdata, setFormData] = useState({
    code: "",
    password: "",
    passwordmatch: "",
  });
  const [strength, setStrength] = useState<number>(0);

  useEffect(() => {
    setStrength(calculatePasswordStrength(formdata.password));
  }, [formdata.password]);

  // useOutsideClick(verifyRef, () => setIsOpen(false));

  //   const timer = useTimer(verification.expiryTime, verification.isExpired);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsVerifying(true);

    switch (true) {
      case !formdata.code:
        toast.error("Please enter the code");
        setIsVerifying(false);
        return;
      case !formdata.password:
        toast.error("Please enter the password");
        setIsVerifying(false);
        return;
      case formdata.password != formdata.passwordmatch:
        toast.warn("Passwords doesnot match");
        setIsVerifying(false);
        return;
      case formdata.password.length < 6:
        toast.warn("Make sure the password is longer");
        setIsVerifying(false);
        return;
      case strength < 60:
        toast.warn("Passwords doesnot meet the criteria");
        setIsVerifying(false);
        return;
    }

    if (formdata.code) {
      toast.loading("verifying code");
      const id = path.slug[0].split("%")[0];
      const data = { id, code: formdata.code };
      const response = await handleVerification(data);
      if (response.status !== 200) {
        toast.dismiss();
        setIsVerifying(false);
        return toast.error(`${response.message}`);
      }
      if (id) {
        const response = await fetch("/api/user", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: id, password: formdata.password }),
        });
        const resetStatus = await response.json();
        if (resetStatus !== 200) {
          toast.error(resetStatus.message);
        }
        toast.success(`${resetStatus.message}`);
        setIsVerifying(false);
        toast.dismiss();
        router.push("/auth/signin");
      }
    }
  };

  return (
    <motion.div
      //   initial={false}
      // animate={isOpen ? "open" : "closed"}
      className="tablet:relative grid place-items-center border-r"
      // ref={verifyRef}
    >
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
        // style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="w-full z-[100] inset-0 inset-y-[50%] tablet:inset-y-[150%] tablet:w-fit h-fit p-4  text-dark grid place-items-center gap-2"
      >
        <>
          <motion.div variants={itemVariants} className="w-full">
            <div className="font-semibold text-2xl">
              <p>Reset password</p>
            </div>
            <div className="w-full  text-sm font-medium text-dark">
              <p className="whitespace-nowrap">
                We have sent a code to your email
              </p>
            </div>
          </motion.div>

          <div className="w-[400px] grid gap-2">
            <motion.form
              variants={itemVariants}
              action=""
              method="post"
              onSubmit={resetPassword}
              className="w-full grid gap-1"
            >
              <Input
                label="Code"
                placeholder="0000"
                icon={<BiLock />}
                color="blue"
                type="number"
                data={formdata.code}
                onchange={handleInputChange}
              />
              <Input
                label="Password"
                type="password"
                placeholder="Password"
                icon={<BsEyeSlash />}
                secondIcon={<BsEye />}
                color="green"
                data={formdata.password}
                onchange={handleInputChange}
              />
              <Input
                label="Retype Password"
                name="passwordmatch"
                type="password"
                placeholder="Retype-Password"
                icon={<BsEyeSlash />}
                secondIcon={<BsEye />}
                color="green"
                data={formdata.passwordmatch}
                onchange={handleInputChange}
              />
              {formdata.password ? (
                <div className="w-full h-2   shadow relative  text-white  rounded-full flex items-center">
                  <div
                    style={{ width: `${strength}%` }}
                    className={`rounded-full relative transition-all h-full  ${
                      strength < 80
                        ? "bg-gradient-to-r from-[red]/25 to-[red]/75 "
                        : "bg-primary"
                    } flex items-center`}
                  >
                    <FaLock
                      size={8}
                      color="black"
                      className="absolute right-2"
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-2 bg-primary border-none text-white text-sm shadow-sm"
                disabled={isVerifying}
              >
                {isVerifying ? "Reseting Password..." : "Reset Password"}
              </motion.button>
            </motion.form>
            <motion.button
              whileTap={{ scale: 0.97 }}
              className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-2 bg-primary border-none text-white text-sm shadow-sm"
              onClick={() => router.push("/auth/signin")}
            >
              Sign in
            </motion.button>
          </div>
        </>
      </motion.div>
    </motion.div>
  );
}
