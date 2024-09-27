import React, { useEffect, useMemo, useRef, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Verify from "../Forms/verificationForm/Verify";
import Counter from "../../../Landing_components/Homepage/Features/Counter";
import { userProps, VerificationProps } from "../../utils/Interfaces";

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
  updateVerificationData?: any;
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
  }, [memoizedUser.timestamp, verification]);

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
        {verification.isVerified ? (
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
          className={`px-3 cursor-pointer group relative py-[2px] gap-1 flex items-center justify-center rounded ${
            time.exceeded ? "bg-[red]/75" : "bg-accent"
          } transition-all duration-500`}
        >
          {time.exceeded && <span className="-translate-y-[1px]">-</span>}
          <Counter number={time.hours} size={12} />:
          <Counter number={time.minutes} size={12} />:
          <Counter number={time.seconds} size={12} />
        </div>
      )}
    </>
  );
};

export default Verification;
