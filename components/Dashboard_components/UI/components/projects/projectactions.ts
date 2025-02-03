import { NewProjectProps } from "./ProjectPage";

export default async function getProjects() {
  try {
    const response = await fetch("/api/user/projects");
    if (!response.ok) {
      throw new Error("Failed to fetch boards");
    }
    const projects = await response.json();
    return projects.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createProject(formdata: NewProjectProps) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/Json",
    },
    body: JSON.stringify({
      name: formdata.name,
      type: formdata.type,
      isPrivate: formdata.isPrivate,
      image: formdata.image,
    }),
  };
  const api = "/api/user/projects";
  try {
    const response = await fetch(api, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Network error");
  }
}

// Function to delete a project by slug
export async function deleteProject(id: string) {
  try {
    // console.log(id);
    const response = await fetch(`/api/user/projects/${id}`, {
      method: "DELETE",
    });
    console.log(response);
    if (response.status != 200) {
      throw new Error("Failed to delete project");
    }

    return response; // Return true if deletion was successful
  } catch (error) {
    console.error("Error deleting project:", error);
    return false; // Return false to indicate failure
  }
}

//function to update a project
export async function updateProject(id: string, formdata: NewProjectProps) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formdata.name,
      type: formdata.type,
      isPrivate: formdata.isPrivate,
      image: formdata.image,
    }),
  };
  const api = `/api/user/projects/${id}`;
  try {
    const response = await fetch(api, options);
    if (!response.ok) {
      throw new Error("Failed to update project");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating project:", error);
    return null;
  }
}
