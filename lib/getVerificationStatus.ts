import { VerificationProps } from "../components/Dashboard_components/utils/Interfaces";

let cachedVerificationStatus: VerificationProps | null = null;
export async function getVerificationStatus() {
  if (cachedVerificationStatus) {
    return cachedVerificationStatus; // Return the cached verification status
  } else {
    try {
      const response = await fetch("/api/user/verification");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      cachedVerificationStatus = data.data; // Cache the verification status data
      return cachedVerificationStatus; // Returning the verification status data
    } catch (error) {
      console.error("Failed to fetch verification status:", error);
      return null; // Handle errors appropriately in your app
    }
  }
}
