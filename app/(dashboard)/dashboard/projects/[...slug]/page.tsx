"use client";
import React, { useEffect, useState } from "react";
import { ProjectProps } from "../../../../../components/Dashboard_components/utils/Interfaces";
import Loading from "../../../../(auth)/auth/Formcomponents/Loading";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaLock, FaRegTrashCan } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import {
  deleteProject,
  updateProject,
} from "../../../../../components/Dashboard_components/UI/components/projects/projectactions";
import Image from "next/image";
import { uploadImageToStorage } from "../../../../../components/Dashboard_components/utils/storage";
import RandomCodeGenerator from "../../../../../lib/radomcodegenerator";
import GenerateLink from "../../../../../lib/linksluggenerator";

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const [project, setProject] = useState<ProjectProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedProject, setEditedProject] = useState<ProjectProps | null>(
    project
  );
  const [imageUrl, setImageUrl] = useState<string | null>(null);
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
        setEditedProject(data.data);
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
      <div className="flex items-center space-x-2">
        <FaRegTrashCan /> Deleting....
      </div>
    );
    if (project) {
      const response = await deleteProject(project?.id);
      if (response && response.ok) {
        toast.dismiss();
        toast.success(`${project.name} deleted successfully`);
        router.push("/dashboard/projects");
      } else {
        console.error("Failed to delete project");
      }
    }
  };
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      toast.loading("Uploading image....");
      if (e.target?.files[0]) {
        const file = e.target.files?.[0];
        if (project) {
          const Projectimageurl = await uploadImageToStorage(
            file,
            project.name,
            "Projects"
          );

          if (Projectimageurl) {
            setImageUrl(Projectimageurl.toString());
            toast.dismiss();
            setEditedProject({
              ...editedProject,
              image: Projectimageurl,
            } as ProjectProps);
            toast.success("Image uploaded successfully");
          }
        }
      }
    }
  };

  const handleEditProject = async () => {
    if (editedProject) {
      const data = {
        ...editedProject,
        image:
          editedProject.image ||
          `https://picsum.photos/200/200?random=${RandomCodeGenerator()}`,
      };
      const response = await updateProject(editedProject.id, data);
      if (response.status === 200) {
        toast.success(`${editedProject.name} updated successfully`);
        setProject(editedProject);
        router.refresh();
        router.push(
          `/dashboard/projects/${editedProject.name.split(" ").join("_")}`
        );
        setIsEditMode(false);
      } else {
        console.error("Failed to update project");
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
    <div className="container mx-auto py-8 px-4 grid gap-4">
      <div className="bg-accent/50  shadow-md rounded-lg overflow-hidden tablet:flex p-2">
        <div className="h-full  box-border rounded-full overflow-hidden">
          {isEditMode ? (
            <div className="flex items-center justify-center relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full h-full text-sm text-gray-500 absolute opacity-0"
              />
              <Image
                src={`${
                  imageUrl
                    ? `https://kbglzqgrxnmdqvauagdb.supabase.co/storage/v1/object/public/projects/${imageUrl}`
                    : project.image
                    ? project.image
                    : "https://picsum.photos/200/200?random=${project.id}"
                }`}
                width={200}
                height={200}
                alt={project.name}
              />
            </div>
          ) : (
            <Image
              src={`${
                project.image
                  ? project.image
                  : "https://picsum.photos/200/200?random=${project.id}"
              }`}
              width={200}
              height={200}
              alt={project.name}
            />
          )}
        </div>
        <div className="w-full p-4 ">
          <div className="tablet:flex grid place-content-start justify-between items-center mb-6 gap-2">
            {isEditMode ? (
              <input
                type="text"
                value={editedProject?.name || ""}
                onChange={(e) =>
                  setEditedProject({
                    ...editedProject,
                    name: e.target.value,
                  } as ProjectProps)
                }
                className="text-3xl font-bold text-black capitalize bg-transparent border-b border-black focus:outline-none"
              />
            ) : (
              <h1 className="text-3xl font-bold text-white  capitalize whitespace-nowrap">
                {project.name}
              </h1>
            )}
            <div className="flex space-x-2 leading-4 text-sm">
              {isEditMode ? (
                <button
                  onClick={handleEditProject}
                  className="px-2 py-[2px] bg-[green]/50 text-white rounded hover:bg-[green] transition duration-300"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setIsEditMode(true)}
                  className="px-2 py-[2px]  bg-[blue]/50 text-white rounded hover:bg-[blue] transition duration-300"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => setIsDeleteModalOpen(true)}
                className="px-4 py-[2px] bg-[red]/50 text-white rounded hover:bg-[red] transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex-1 space-y-2">
              <div className="flex items-center space-x-2">
                {isEditMode ? (
                  <select
                    value={editedProject?.type || ""}
                    onChange={(e) =>
                      setEditedProject({
                        ...editedProject,
                        type: e.target.value,
                      } as ProjectProps)
                    }
                    className="px-2 py-1 rounded-full text-xs font-semibold bg-transparent"
                  >
                    {["Educational", "Personal", "Professional", "Other"].map(
                      (type, index) => (
                        <option
                          key={index}
                          value={type}
                          className="capitalize bg-dark"
                          // selected={editedProject?.type === type}
                        >
                          {type}
                        </option>
                      )
                    )}
                  </select>
                ) : (
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      project.type === "Personal"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {project.type}
                  </span>
                )}
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    project.isPrivate
                      ? "bg-gray-100 text-black"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                  onClick={(e) =>
                    isEditMode &&
                    setEditedProject({
                      ...editedProject,
                      isPrivate: !editedProject?.isPrivate,
                    } as ProjectProps)
                  }
                >
                  {editedProject?.isPrivate ? (
                    editedProject.isPrivate ? (
                      <FaLock />
                    ) : (
                      <FiEye />
                    )
                  ) : project.isPrivate ? (
                    <FaLock />
                  ) : (
                    <FiEye />
                  )}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Created on{" "}
                {project.createdOn &&
                  new Date(project.createdOn).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>Boards will be displayed here</div>

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
  );
};

export default ProjectPage;
