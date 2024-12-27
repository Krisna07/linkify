export async function deleteBoard(
  boardId: string,
  image: string | undefined
): Promise<boolean> {
  console.log("Attempting to delete board with ID:", boardId);

  try {
    const response = await fetch(`/api/user/boards/${boardId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json", // Important if your API expects JSON
      },
    });

    if (!response.ok) {
      // More detailed error handling
      const errorText = await response.text(); // Get the error text from the response body

      let errorMessage = `Failed to delete board (Status: ${response.status})`;
      try {
        const errorData = JSON.parse(errorText); // Try to parse as JSON
        if (errorData.message) {
          errorMessage = errorData.message; // Use API's error message if available
        }
      } catch (jsonError) {
        // If parsing JSON fails, just use the status code and text
        console.error("Failed to parse JSON error response:", jsonError);
        errorMessage = `${errorMessage}: ${errorText}`;
      }

      throw new Error(errorMessage); // Throw the detailed error message
    }

    return true;
  } catch (error: any) {
    // Type the error as any to access message
    console.error("Error deleting board:", error);
    if (error.message === "Failed to delete board (Status: 404)") {
      // Handle 404 specifically, if needed
      console.log("Board not found on the server.");
    }
    return false; // Return false to indicate failure
  }
}
