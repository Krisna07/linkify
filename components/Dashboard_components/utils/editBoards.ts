export async function updateBoard(boardId: string, updatedData: any) {
  try {
    const response = await fetch(`/api/user/boards/${boardId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Failed to update board");
    }

    return await response.json(); // Return the updated board data
  } catch (error) {
    console.error("Error updating board:", error);
    return null; // Handle the error as needed
  }
}

export async function deleteBoard(boardId: string) {
  try {
    const response = await fetch(`/api/user/boards/${boardId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete board");
    }

    return true; // Return true if deletion was successful
  } catch (error) {
    console.error("Error deleting board:", error);
    return false; // Handle the error as needed
  }
}
