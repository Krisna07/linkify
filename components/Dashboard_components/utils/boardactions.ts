// import { newBoardFormData } from "../../../app/(dashboard)/dashboard/projects/[project]/newboard/page";

interface newBoardFormData {
  title: string;
  description: string;
  category: string;

  tags: string[];
  image?: string;
}

export async function getBoards() {
  try {
    const response = await fetch("/api/user/boards");
    if (!response.ok) {
      throw new Error("Failed to fetch boards");
    }
    const data = await response.json();

    return data.data;
  } catch (error) {
    return error;
  }
}

export async function AddBoard(formdata: newBoardFormData) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/Json",
    },
    body: JSON.stringify(formdata),
  };

  const api = "/api/user/boards";
  try {
    const response = await fetch(api, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Network error");
  }
}

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
