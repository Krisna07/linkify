import Link from "next/link";
import React from "react";
import Button from "../Global_components/Button";

const ErrorPage = () => {
  return (
    <html>
      <body>
        <div className="w-full h-screen grid items-center justify-center">
          Restricted area, user not authorized !!
          <Link href={"/auth/signin"}>
            <Button children="Sign In" size={"sm"} variant={"primary"} />
          </Link>
        </div>
      </body>
    </html>
  );
};

export default ErrorPage;
