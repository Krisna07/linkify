import React from "react";
import Input from "../Formcomponents/Input";
import { FaLock } from "react-icons/fa";
import { getCurrentUser } from "@/lib/session";

const verify = async () => {
  let code;
  const user = await getCurrentUser();
  console.log(user);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    code = value;
  };

  return (
    <div className="w-fit ">
      Email has been sent to
      <h2>Verify the email</h2>
      <Input
        label=""
        name="code"
        type="string"
        placeholder="code"
        icon={<FaLock />}
        color="green"
        data={code}
        onchange={handleInputChange}
      />
    </div>
  );
};

export default verify;
