"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Verify from "../Forms/verificationForm/Verify";
import Counter from "../../../Landing_components/Homepage/Features/Counter";
import { userProps, VerificationProps } from "../../utils/Interfaces";
import Timer from "../../utils/Timer";
import { HandleNewCode, handleVerification } from "../../utils/verify";
import { fetchVerificationData } from "../../utils/FetchDatas";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Time {
  hours: number;
  minutes: number;
  seconds: number;
  exceeded: boolean;
  days: number;
}
interface Verification {
  user: userProps;
  updateVerificationData?: any;
}

const Verification = ({ user }: Verification) => {
  const [time, setTime] = useState<Time | null>(null);
  const timestampRef = useRef(user.timestamp);
  const memoizedUser = useMemo(() => user, [user.id]);
  const [verification, setVerification] = useState<VerificationProps | null>(
    null
  );
  const { data: session } = useSession();
  const router = useRouter();

  const updateVerificationData = async () => {
    await fetchVerificationData().then((response: any) => {
      const data = response.data;
      setVerification({
        isVerified: data.isVerified,
        isExpired: data.isExpired,
        expiryTime: data.expiryTime,
      });
      // Refresh the session by reloading the current route so that the updated `verified`
      // property (or session) is fetched from the backend.
    });
  };

  useEffect(() => {
    updateVerificationData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [HandleNewCode, handleVerification]);

  useEffect(() => {
    timestampRef.current = memoizedUser.timestamp;
  }, [memoizedUser.timestamp, verification]);

  useEffect(() => {
    const updateTimer = () => {
      const timeValue = Timer(timestampRef.current as number);
      setTime(timeValue);
    };

    updateTimer();
    const intervalId = setInterval(updateTimer, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div>
        {user.isVerified || verification?.isVerified ? (
          <RiVerifiedBadgeFill color="skyblue" />
        ) : (
          verification && (
            <Verify
              user={user}
              verification={verification}
              updateVerificationData={updateVerificationData}
            />
          )
        )}
      </div>
      {!user.isVerified && !verification?.isVerified && time && (
        <div
          className={`px-3 cursor-pointer group relative py-[2px] gap-1 flex items-center justify-center rounded ${
            time.exceeded ? "bg-[red]/75" : "bg-accent"
          } transition-all duration-500`}
        >
          {time.exceeded && <span className="-translate-y-[1px]">-</span>}
          <Counter number={time.days} size={12} /> :
          <Counter number={time.hours} size={12} />:
          <Counter number={time.minutes} size={12} />
        </div>
      )}
    </>
  );
};

export default Verification;
