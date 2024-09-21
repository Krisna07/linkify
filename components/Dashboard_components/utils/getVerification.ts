export const getVerificationDetails = async () => {
  try {
    const response = await fetch("/api/user/verification");
    if (!response.ok) {
      throw new Error("Failed to fetch verification details");
    }
    const data = await response.json(); // Parse the JSON response
    return data.data; // Return the parsed data
  } catch (error) {
    console.error(error); // Log the error
    return null; // Return null on error
  }
};
