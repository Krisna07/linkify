export default async function getBoards() {
  try {
    const response = await fetch("/api/user/boards");
    if (!response.ok) {
      throw new Error("Failed to fetch boards");
    }
    const data = await response.json();
    console.log(data);

    return data.data;
  } catch (error) {
    return error;
  }
}
