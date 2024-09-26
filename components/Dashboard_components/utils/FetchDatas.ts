export async function fetchVerificationData() {
  try {
    const response = await fetch("/api/user/verification");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
