import React, { useEffect, useMemo, useRef, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Verify from "../Forms/verificationForm/Verify";
import Counter from "../../../Landing_components/Homepage/Features/Counter";
import { userProps } from "../../utils/Interfaces";
import { VerificationProps } from "./Appnav";
import Timer from "../../utils/Timer";

interface Time {
  hours: number;
  minutes: number;
  seconds: number;
  exceeded: boolean;
}
interface Verification {
  verification: VerificationProps;
  user: userProps;
  updateVerificationData: () => void;
}
const Verification = ({
  verification,
  user,
  updateVerificationData,
}: Verification) => {
  const [time, setTime] = useState<Time | null>(null);
  const timestampRef = useRef(user.timestamp);
  const memoizedUser = useMemo(() => user, [user.id]);

  useEffect(() => {
    timestampRef.current = memoizedUser.timestamp;
  }, [memoizedUser.timestamp]);

  useEffect(() => {
    const updateTimer = () => {
      const timeValue = Timer(timestampRef.current as number);
      setTime(timeValue);
    };

    updateTimer();
    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div>
        {verification?.isVerified ? (
          <RiVerifiedBadgeFill color="skyblue" />
        ) : (
          <Verify
            user={user}
            verification={verification}
            updateVerificationData={updateVerificationData}
          />
        )}
      </div>
      {!verification?.isVerified && time && (
        <div
          className={`${
            time.exceeded ? "bg-[red]/75" : "bg-accent"
          } px-3 cursor-pointer group relative py-[2px] gap-1 flex items-center justify-center rounded hover:rounded-[8px] transition-all duration-500 text-[10px] font-[600]`}
        >
          {time.exceeded ? <span className=" -translate-y-[1px]">-</span> : ""}
          <Counter number={time.hours} size={12} />:
          <Counter number={time.minutes} size={12} />:
          <Counter number={time.seconds} size={12} />
        </div>
      )}
    </>
  );
};

export default Verification;
