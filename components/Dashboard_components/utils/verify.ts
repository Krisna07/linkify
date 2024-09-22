//handling the verificayion process
const VerifyCode = async (data: any) => {
  const verificationDetails = await GetVerificationDetails();
  console.log(verificationDetails);
};

//Getting the verification data from database

export const handleVerification = async (data: any) => {
  const id = data.id;
  const code = data.code;
  try {
    const response = await fetch("/api/user/verification", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id, // Use optional chaining to avoid errors if data is undefined
        code: code, // Use optional chaining to avoid errors if data is undefined
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to send PATCH request");
    }
    const data = await response.json(); // Parse the JSON response
    return data; // Return the parsed data
  } catch (error) {
    console.error(error); // Log the error
    return null; // Return null on error
  }
};

export const GetVerificationDetails = async () => {
  try {
    const response = await fetch("/api/user/verification");
    if (!response.ok) {
      throw new Error("Failed to fetch verification details");
    }
    const data = await response.json(); // Parse the JSON response
    return data.data; // Return the parsed data
  } catch (error) {
    console.error(error);
    return null;
  }
};

//sending new code when verification is expired
export const HandleNewCode = async (id: string) => {
  try {
    const response = await fetch("/api/user/verification", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to send PATCH request");
    }
    const data = await response.json(); // Parse the JSON response
    return data; // Return the parsed data
  } catch (error) {
    console.error(error); // Log the error
    return null; // Return null on error
  }
};

export default VerifyCode;
