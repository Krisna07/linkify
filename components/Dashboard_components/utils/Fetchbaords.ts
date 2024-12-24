let cachedBoards: any = null; // Cache variable

export default async function getBoards() {
  if (cachedBoards) {
    return cachedBoards; // Return cached data if available
  }

  try {
    const response = await fetch("/api/user/boards");
    if (!response.ok) {
      throw new Error("Failed to fetch boards");
    }
    const data = await response.json();
    cachedBoards = data.data; // Cache the fetched data
    return cachedBoards; // Return the fetched data
  } catch (error) {
    return error;
  }
}
