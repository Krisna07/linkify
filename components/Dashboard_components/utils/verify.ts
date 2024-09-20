const VerifyCode = async (data: any) => {
  const code = data.code; // Extract the code from data

  // Await verification details to ensure you get the resolved value
  const verificationDetails = await getVerificationDetails();
  console.log(verificationDetails); // Log the resolved verification details
};

const getVerificationDetails = async () => {
  try {
    const response = await fetch("/api/user/verification");
    if (!response.ok) {
      throw new Error("Failed to fetch verification details");
    }
    const data = await response.json(); // Parse the JSON response
    return data; // Return the parsed data
  } catch (error) {
    console.error(error); // Log the error
    return null; // Return null on error
  }
};

export default VerifyCode;
