import { ProjectProps } from "../../../utils/Interfaces";

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

export async function createProject(formdata: ProjectProps) {
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
    const response = await fetch(`/api/user/projects/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete project");
    }

    return response.status; // Return true if deletion was successful
  } catch (error) {
    console.error("Error deleting project:", error);
    return false; // Return false to indicate failure
  }
}
