import { toast } from "react-toastify";
import { getVerificationDetails } from "./getVerification";

const VerifyCode = async (data: any) => {
  const code = data.code; // Extract the code from data
  console.log(data);
  // Await verification details to ensure you get the resolved value
  const verificationDetails = await getVerificationDetails();
  console.log(verificationDetails);
  if (verificationDetails.isExpired) {
    const patchResponse = await handlePatchRequest(data.id); // Call the function to handle the PATCH request
    console.log(patchResponse);
  } // Log the resolved verification details
};

export const handlePatchRequest = async (id: any) => {
  try {
    console.log(id);
    const response = await fetch("/api/user/verification", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        /* Add necessary data for the PATCH request */
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
