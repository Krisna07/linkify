"use client";
import React, { useEffect, useState } from "react";
import { ProjectProps } from "../../../../../components/Dashboard_components/utils/Interfaces";
import Loading from "../../../../(auth)/auth/Formcomponents/Loading";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaLock, FaRegTrashCan, FaTrashCan } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import {
  deleteProject,
  updateProject,
} from "../../../../../components/Dashboard_components/UI/components/projects/projectactions";
import Image from "next/image";
import {
  deleteImageFromStorage,
  uploadImageToStorage,
} from "../../../../../components/Dashboard_components/utils/storage";
import RandomCodeGenerator from "../../../../../lib/radomcodegenerator";

import { getProjectBySlug } from "../../../../../lib/actions/projectactions";
import DisplayBoards from "../../../../../components/Dashboard_components/UI/components/Home/DisplayBoards";

const ProjectPage = ({ params }: { params: { project: string } }) => {
  const [project, setProject] = useState<ProjectProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedProject, setEditedProject] = useState<ProjectProps | null>(null);
  const [imageurl, setImageUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectName = params.project.split("_").join(" ");
        const response: ProjectProps | null = await getProjectBySlug(
          projectName
        );
        setProject(response);
        setEditedProject(response);
      } catch (error) {
        console.error("Error fetching project:", error);
        router.push("/dashboard/projects"); // Redirect if project not found
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [params.project, router]);

  const handleDeleteProject = async () => {
    toast.loading(
      <div className="flex items-center space-x-2">
        <FaRegTrashCan /> Deleting....
      </div>
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFile(file);
      const reader = URL.createObjectURL(file);
      setImageUrl(reader);
      setEditedProject({
        ...editedProject,
        image: reader,
      } as ProjectProps);
    }
  };

  const handleEditProject = async () => {
    let cacheProject = project;
    if (editedProject) {
      let imageUrl = editedProject.image;

      if (file) {
        if (
          cacheProject?.image &&
          cacheProject.image.includes(cacheProject?.id)
        ) {
          console.log(cacheProject.image);
          const filePath = cacheProject.image.split(
            "https://tudodowthzxrdinszdhz.supabase.co/storage/v1/object/public/Projects/"
          )[1];
          const deleteImage = await deleteImageFromStorage(
            filePath,
            "Projects"
          );
          if (deleteImage) {
            console.log("Image deleted successfully");
          } else {
            toast.error("Failed to delete image");
            return;
          }
        }

        const uploadedImageUrl = await uploadImageToStorage(
          file,
          editedProject.id,
          "Projects"
        );
        // console.log(uploadedImageUrl);
        if (uploadedImageUrl !== undefined) {
          imageUrl = `https://tudodowthzxrdinszdhz.supabase.co/storage/v1/object/public/Projects/${uploadedImageUrl}`;
          setImageUrl(imageUrl);
          toast.dismiss();
        } else {
          toast.dismiss();
          toast.error("Failed to upload image");
          return;
        }
      }

      const data = {
        ...editedProject,
        image:
          imageUrl ||
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
    <div className="w-full mx-auto py-8 px-4 grid gap-4">
      <div className="bg-accent/25  hover:shadow-bs transition-shadow duration-500 ease-in-out rounded-lg overflow-hidden grid grid-cols-[150px_1fr] p-2 place-items-center">
        <div className=" max-w-fit shadow-bs box-border rounded-full overflow-hidden  relative">
          {isEditMode ? (
            <div className="flex items-center justify-center relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full h-full text-sm text-gray-500 absolute opacity-0"
              />
              <Image
                src={
                  imageurl ||
                  project.image ||
                  `https://picsum.photos/200/200?random=${project.id}`
                }
                width={200}
                height={200}
                alt={project.name}
                className="w-[150px] h-[150px] object-cover"
                loading="lazy"
                // priority
              />
            </div>
          ) : (
            <Image
              src={
                project.image ||
                `https://picsum.photos/200/200?random=${project.id}`
              }
              width={200}
              height={200}
              alt={project.name}
              className="w-[150px] h-[150px] object-center rounded-full"
              loading="lazy"
              // priority
            />
          )}
        </div>
        <div className="w-full p-4">
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
              <h1 className="text-3xl font-bold text-silver/75 capitalize tablet:whitespace-nowrap leading-[120%]">
                {project.name}
              </h1>
            )}
            <div className="flex space-x-4 leading-4 text-sm">
              {isEditMode ? (
                <button
                  onClick={handleEditProject}
                  className="px-2 py-[2px]  text-white shadow-bs rounded hover:bg-[green] transition duration-300"
                >
                  Save
                </button>
              ) : (
                <>
                  {" "}
                  <button
                    onClick={() => setIsEditMode(true)}
                    className="px-4 py-[4px] shadow-bs text-white/75 hover:text-white  rounded hover:bg-[blue] transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setIsDeleteModalOpen(true)}
                    className="px-4 py-[4px] shadow-bs text-white/75 hover:text-white bg-[red]/25  rounded flex items-center gap-2 transition duration-300"
                  >
                    Delete <FaTrashCan size="12px" />
                  </button>
                </>
              )}
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
      <div>
        <DisplayBoards boardList={project.boards} list={false} />
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
  );
};

export default ProjectPage;
