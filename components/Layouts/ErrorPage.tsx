import Link from "next/link";
import React from "react";
import Button from "../Global_components/Button";

const ErrorPage = () => {
  return (
    <html>
      <body>
        <div className="w-full h-screen grid items-center justify-center px-16 py-8">
          <div className="grid place-items-center h-fit w-fit bg-primary text-white rounded-md">
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
