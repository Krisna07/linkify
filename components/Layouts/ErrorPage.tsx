import Link from "next/link";
import React from "react";
import Button from "../Global_components/Button";
import Background from "../Landing_components/Background";

const ErrorPage = () => {
  return (
    <html>
      <body>
        <div className="w-full h-screen grid items-center justify-center box-border">
          <Background />
          <div className="grid place-items-center h-fit w-fit   rounded-md bg-white text-dark relative z-20">
            Restricted area, user not authorized !!
            <Link href={"/auth/signin"}>
              <Button children="Sign In" size={"sm"} variant={"default"} />
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
};

export default ErrorPage;
