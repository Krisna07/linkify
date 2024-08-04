export default async function getBoards() {
  try {
    //need to add  the api to the .env file
    const response = await fetch("/api/user/boards");
    if (!response.ok) {
      throw new Error("Failed to fetch boards");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
