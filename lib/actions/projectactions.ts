import { NewProjectProps } from "../../components/Dashboard_components/UI/components/projects/ProjectPage";
import { ProjectProps } from "../../components/Dashboard_components/utils/Interfaces";

let cachedProjects: ProjectProps[] | null = null;
export default async function getProjects() {
  if (cachedProjects) {
    return cachedProjects;
  }
  try {
    const response = await fetch("/api/user/projects");
    if (!response.ok) {
      throw new Error("Failed to fetch Projects");
    }
    const projects = await response.json();
    cachedProjects = projects.data;
    return cachedProjects;
  } catch (error) {
    console.log(error);
  }
}

//get project by id
export async function getProjectBySlug(slug: string) {
  // console.log(slug);
  if (cachedProjects?.length) {
    const project = await cachedProjects.find(
      (project) => project.name === slug
    );

    return project;
  }
  try {
    const response = await fetch(`/api/user/projects/${slug}`);
    if (!response.ok) {
      throw new Error("Failed to fetch project");
    }
    const project = await response.json();
    return project.data;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

export async function createProject(formdata: NewProjectProps) {
  cachedProjects = null; // Clear cache
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
  cachedProjects = null; // Clear cache
  try {
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

// Function to update a project
export async function updateProject(id: string, formdata: NewProjectProps) {
  cachedProjects = null; // Clear cache
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
