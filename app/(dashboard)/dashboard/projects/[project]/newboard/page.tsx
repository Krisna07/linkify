"use client";
import React, { useState, useCallback, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { uploadImageToStorage } from "../../../../../../components/Dashboard_components/utils/storage";
import { AddBoard } from "../../../../../../components/Dashboard_components/utils/boardactions";

interface AddBoardFormProps {
  projectId: string;
  creator: string;
}

export interface newBoardFormData {
  title: string;
  description: string;
  category: string;
  tags: string;
  image?: string;
}

const AddBoardForm: React.FC<{ params: { project: string } }> = ({
  params,
}) => {
  const router = useRouter();
  const [projectName, setProjectName] = useState<string>(params.project);
  const [formData, setFormData] = useState<newBoardFormData>({
    title: "",
    description: "",
    category: "",

    tags: "",
    image: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setImageURL(URL.createObjectURL(selectedFile));
    }
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setLoading(true);

      let uploadedImage = "";
      if (file) {
        toast.info("Uploading image...");
        const result = await uploadImageToStorage(
          file,
          formData.title,
          "Boards"
        );
        console.log(result);
        if (!result) {
          toast.error("Image upload failed");
          setLoading(false);
          return;
        }
        uploadedImage = `https://tudodowthzxrdinszdhz.supabase.co/storage/v1/object/public/Boards/${result}`;
      }

      const tagsArray = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      const data = {
        projectName: projectName.split("_").join(" "),
        title: formData.title,
        description: formData.description,
        image: uploadedImage || undefined,
        category: formData.category,
        tags: tagsArray,
        likes: 0,
      };

      try {
        const response = await AddBoard(data);
        if (response.status === 201) {
          toast.success("Board created successfully");
          router.refresh();
          router.push(`/dashboard/projects/${projectName}`);
        } else {
          toast.error("Failed to create board");
        }
      } catch (err) {
        toast.error("Error creating board");
      } finally {
        setLoading(false);
      }
    },
    [file, formData, projectName]
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-4 shadow-lg rounded-lg space-y-6"
    >
      <h2 className="text-2xl font-bold text-center">Add New Board</h2>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-2 bg-transparent border border-white/25"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full bg-transparent border border-white/25 rounded-md p-2"
            required
          />
        </div>
        {/* <div>
          <label className="block text-sm font-medium text-gray-700">
            Link (optional)
          </label>
          <input
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="mt-1 block w-full bg-transparent border border-white/25 rounded-md p-2"
          />
        </div> */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full bg-transparent border border-white/25 rounded-md p-2"
            required
          />
        </div>
        {/* <div>
          <label className="block text-sm font-medium text-gray-700">
            Board Color
          </label>
          <input
            name="boardColor"
            value={formData.boardColor}
            onChange={handleChange}
            placeholder="#ffffff"
            className="mt-1 block w-full bg-transparent border border-white/25 rounded-md p-2"
            required
          />
        </div> */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tags (comma separated)
          </label>
          <input
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="mt-1 block w-full bg-transparent border border-white/25 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Board Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full"
          />
          {imageURL && (
            <div className="mt-2">
              <Image
                src={imageURL}
                width={200}
                height={200}
                alt="Preview"
                className="object-contain rounded-md"
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className="mt-4 px-6 py-2 shadow-bs rounded-md hover:bg-blue-700 transition"
        >
          {loading ? "Creating..." : "Create Board"}
        </button>
      </div>
    </form>
  );
};

export default AddBoardForm;
