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
