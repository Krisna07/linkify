// const VerifyCode = async (data: any) => {
//   const verificationDetails = await GetVerificationDetails();
//   console.log(verificationDetails);
// };

export const handleVerification = async (data: any) => {
  const { id, code } = data;
  try {
    const response = await fetch("/api/user/verification", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, code }),
    });
    if (!response.ok) throw new Error("Failed to send PATCH request");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const GetVerificationDetails = async () => {
  try {
    const response = await fetch("/api/user/verification");
    if (!response.ok) throw new Error("Failed to fetch verification details");
    return (await response.json()).data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const HandleNewCode = async (id: string) => {
  try {
    const response = await fetch("/api/user/verification", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (!response.ok) throw new Error("Failed to send PATCH request");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// export default VerifyCode;
