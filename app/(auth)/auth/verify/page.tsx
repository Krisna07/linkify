import React, { useState } from "react";
import Input from "../Formcomponents/Input";
import { FaLock } from "react-icons/fa";
import { getCurrentUser } from "@/lib/session";
import Button from "../../../components/Global_components/Button";

const verify = async () => {
  let code;
  // const [verify, setVerify] = useState<boolean>(false);
  const user = await getCurrentUser();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    code = value;
  };

  return (
    <div className="w-fit grid  gap-2 place-items-center  p-4 rounded-full">
      <h2 className="text-center">
        Verification email has been sent to <br />
        <span className="font-semibold"> {user?.email}</span>
      </h2>
      <Input
        label=""
        name="code"
        type="string"
        placeholder="code"
        icon={<FaLock />}
        color="green"
      />
      <Button
        className=""
        variant={"default"}
        size={"sm"}
        children="Verify Later"
        icon={true}
      />
    </div>
  );
};

export default verify;
