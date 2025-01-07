"use client";
import React, { useEffect, useState } from "react";
import { ProjectProps } from "../../../../../components/Dashboard_components/utils/Interfaces";
import Loading from "../../../../(auth)/auth/Formcomponents/Loading";
import { useRouter } from "next/navigation";
import Button from "../../../../../components/Global_components/Button";
import { deleteProject } from "../../../../../components/Dashboard_components/UI/components/projects/projectactions";

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const [project, setProject] = useState<ProjectProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/user/projects/${params.slug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch project");
        }
        const data = await response.json();
        setProject(data.data);
      } catch (error) {
        console.error("Error fetching project:", error);
        router.push("/dashboard/projects"); // Redirect if project not found
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [params.slug, router]);

  const handleDeleteProject = async () => {
    if (project) {
      const result = await deleteProject(project.id);
      if (result) {
        console.log(result);
        // router.push("/dashboard/projects");
      } else {
        console.error("Failed to delete project");
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{project.name}</h1>
        <div className="flex gap-2">
          <Button
            children="Edit"
            variant="default"
            size="default"
            onClick={() =>
              router.push(`/dashboard/projects/edit/${project.slug}`)
            }
          />
          <Button
            children="Delete"
            variant="accent"
            size="default"
            onClick={handleDeleteProject}
          />
        </div>
      </div>
      <p className="mb-2">Type: {project.type}</p>
      <p className="mb-2">
        Created On:{" "}
        {project.createdOn && new Date(project.createdOn).toLocaleDateString()}
      </p>
      <p className="mb-4">Private: {project.isPrivate ? "Yes" : "No"}</p>
      {project.image && (
        <img src={project.image} alt={project.name} className="mb-4" />
      )}

      <h2 className="text-xl font-semibold mb-2">Boards</h2>
      {/* <div className="grid gap-4">
        {project.boards && project.boards.length > 0 ? (
          project.boards.map((board: boardProps) => (
            <div key={board.id} className="p-4 border rounded-lg shadow-sm">
              <h3 className="font-bold">{board.title}</h3>
              <p>{board.description}</p>
              <a
                href={board.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Board
              </a>
            </div>
          ))
        ) : (
          <p>No boards available for this project.</p>
        )}
      </div> */}
    </div>
  );
};

export default ProjectPage;
