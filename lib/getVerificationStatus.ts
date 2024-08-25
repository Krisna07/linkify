export async function getVerificationStatus() {
  try {
    const response = await fetch("/api/user/verification");
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.data; // Returning the verification status data
  } catch (error) {
    console.error("Failed to fetch verification status:", error);
    return null; // Handle errors appropriately in your app
  }
}
