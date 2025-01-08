"use client";
import React, { useEffect, useState } from "react";
import { ProjectProps } from "../../../../../components/Dashboard_components/utils/Interfaces";
import Loading from "../../../../(auth)/auth/Formcomponents/Loading";
import { useRouter } from "next/navigation";
import Button from "../../../../../components/Global_components/Button";
import { deleteProject } from "../../../../../components/Dashboard_components/UI/components/projects/projectactions";
import { toast } from "react-toastify";
import { FaLock, FaRegTrashCan } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const [project, setProject] = useState<ProjectProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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
    toast.loading(
      <>
        <FaRegTrashCan /> Deleting....
      </>
    );
    if (project) {
      const response = await deleteProject(project.id);
      if (response && response.ok) {
        toast.dismiss();
        toast.success(`${project.name} deleted successfully`);
        router.push("/dashboard/projects");
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
    <div className="container mx-auto py-8 px-4">
      <div className="bg-accent/50  shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 capitalize">
              {project.name}
            </h1>
            <div className="flex space-x-2">
              <button
                onClick={() =>
                  router.push(`/dashboard/projects/edit/${project.name}`)
                }
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => setIsDeleteModalOpen(true)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex-1 space-y-2">
              <div className="flex items-center space-x-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    project.type === "Personal"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {project.type}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    project.isPrivate
                      ? "bg-gray-100 text-gray-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {project.isPrivate ? <FaLock /> : <FiEye />}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Created on{" "}
                {project.createdOn &&
                  new Date(project.createdOn).toLocaleDateString()}
              </p>
            </div>
            {project.image && (
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
        {/* <div className="border-t border-gray-200 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Boards</h2>
          {project.boards && project.boards.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {project.boards.map((board) => (
                <div key={board.id} className="bg-gray-50 rounded-lg p-4 shadow">
                  <h3 className="font-bold text-lg mb-2">{board.title}</h3>
                  <p className="text-gray-600 mb-4">{board.description}</p>
                  <a
                    href={board.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Board
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No boards available for this project.</p>
          )}
        </div> */}
      </div>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-primary rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-6">
              Are you sure you want to delete this project? This action cannot
              be undone.
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteProject}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    // <div className="project-page p-4">
    //   <div className="flex justify-between items-center mb-4">
    //     <h1 className="text-2xl font-bold">{project.name}</h1>
    //     <div className="flex gap-2">
    //       <Button
    //         children="Edit"
    //         variant="default"
    //         size="default"
    //         onClick={() =>
    //           router.push(`/dashboard/projects/edit/${project.name}`)
    //         }
    //       />
    //       <Button
    //         children="Delete"
    //         variant="accent"
    //         size="default"
    //         onClick={handleDeleteProject}
    //       />
    //     </div>
    //   </div>
    //   <p className="mb-2">Type: {project.type}</p>
    //   <p className="mb-2">
    //     Created On:{" "}
    //     {project.createdOn && new Date(project.createdOn).toLocaleDateString()}
    //   </p>
    //   <p className="mb-4">Private: {project.isPrivate ? "Yes" : "No"}</p>
    //   {project.image && (
    //     <img src={project.image} alt={project.name} className="mb-4" />
    //   )}

    //   <h2 className="text-xl font-semibold mb-2">Boards</h2>
    //   {/* <div className="grid gap-4">
    //     {project.boards && project.boards.length > 0 ? (
    //       project.boards.map((board: boardProps) => (
    //         <div key={board.id} className="p-4 border rounded-lg shadow-sm">
    //           <h3 className="font-bold">{board.title}</h3>
    //           <p>{board.description}</p>
    //           <a
    //             href={board.link}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="text-blue-500 hover:underline"
    //           >
    //             View Board
    //           </a>
    //         </div>
    //       ))
    //     ) : (
    //       <p>No boards available for this project.</p>
    //     )}
    //   </div> */}
    // </div>
  );
};

export default ProjectPage;
