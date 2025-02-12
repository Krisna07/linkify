"use client";
import { useEffect, useState } from "react";
import { boardProps } from "../../../../../components/Dashboard_components/utils/Interfaces";
import { toast } from "react-toastify";
import Loading from "../../../../(auth)/auth/Formcomponents/Loading";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  deleteBoard,
  getBoards,
  updateBoard,
} from "../../../../../components/Dashboard_components/utils/boardactions";
import { uploadImageToStorage } from "../../../../../components/Dashboard_components/utils/storage";

export default function Page({ params }: { params: { slug: string } }) {
  const slug: string = params.slug[0];
  const router = useRouter();

  const [board, setBoard] = useState<boardProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  // For text data
  const [title, setTitle] = useState("");
  // We now manage images as two arrays:
  // existingImages comes from board.image CSV (if any)
  const [existingImages, setExistingImages] = useState<string[]>([]);
  // newFiles holds the File objects selected for upload
  const [newFiles, setNewFiles] = useState<File[]>([]);

  // Generates preview URLs for new files
  const [newPreviews, setNewPreviews] = useState<string[]>([]);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const data = await getBoards();
        console.log(data);

        const thisBoard = data.find((b: boardProps) => b.link === slug);

        if (thisBoard) {
          setBoard(thisBoard);
          setTitle(thisBoard.title);
          if (thisBoard.image) {
            // Assume images are stored as comma-separated values
            const imgs = thisBoard.image
              .split(",")
              .filter((img: string) => img.trim() !== "");
            setExistingImages(imgs);
          }
        } else {
          router.push("/dashboard/boards");
        }
      } catch (err: any) {
        toast.error(err.message || "An error occurred while fetching board");
      } finally {
        setLoading(false);
      }
    };

    fetchBoards();
  }, [slug, router]);

  // Handle change for the file input (multiple allowed)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedFiles = Array.from(e.target.files);
    // Remove duplicates based on file name (or you could use size/type)
    const uniqueFiles = selectedFiles.filter(
      (f) => !newFiles.find((nf) => nf.name === f.name)
    );

    // Check total images count (existing + new) does not exceed 3
    if (existingImages.length + newFiles.length + uniqueFiles.length > 3) {
      const allowed = 3 - existingImages.length - newFiles.length;
      toast.info("You can upload maximum 3 images.");
      uniqueFiles.splice(allowed);
    }
    setNewFiles((prev) => [...prev, ...uniqueFiles]);

    // Create previews for new files
    const previews = uniqueFiles.map((file) => URL.createObjectURL(file));
    setNewPreviews((prev) => [...prev, ...previews]);
  };

  // Remove an existing image from the list
  const removeExistingImage = (imgUrl: string) => {
    setExistingImages((prev) => prev.filter((img) => img !== imgUrl));
  };

  // Remove a new file (and its preview) from the list
  const removeNewFile = (index: number) => {
    setNewFiles((prev) => prev.filter((_, i) => i !== index));
    setNewPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpdateBoard = async () => {
    // Overwrite existing image if any new file is provided.
    // Upload new files and then combine with existing (if no new file, keep them)
    let finalImages: string[] = [];
    // If new files exist, upload and then use only them.
    if (newFiles.length > 0) {
      for (const file of newFiles) {
        toast.loading("Uploading image(s)...");
        const uploadedPath = await uploadImageToStorage(file, title, "Boards");
        if (uploadedPath) {
          let filename = uploadedPath;
          console.log(filename);
          const url = `https://kbglzqgrxnmdqvauagdb.supabase.co/storage/v1/object/public/Boards/${filename}`;
          finalImages.push(url);
        } else {
          toast.dismiss();
          toast.error("Failed to upload one or more images.");
          return;
        }
      }
      toast.dismiss();
      toast.success("Image(s) uploaded successfully");
    } else {
      // No new file: keep the existing images.
      finalImages = existingImages;
    }
    // Remove duplicates if any by using a Set.
    finalImages = Array.from(new Set(finalImages));
    // Ensure maximum of 3 images
    if (finalImages.length > 3) {
      finalImages = finalImages.slice(0, 3);
    }
    // Prepare data for update – join images as CSV if any, or null.
    const updateData = {
      title,
      image: finalImages.length ? finalImages.join(",") : undefined,
    };
    const result = await updateBoard(slug, updateData);
    if (result) {
      toast.success("Board updated successfully!");
      setIsEditing(false);
      setBoard(
        (prev) =>
          (prev ? { ...prev, ...updateData } : null) as boardProps | null
      );
      // Reset file state
      setNewFiles([]);
      setNewPreviews([]);
      setExistingImages(finalImages);
    } else {
      toast.error("Failed to update board.");
    }
  };

  const handleDeleteBoard = async () => {
    console.log("Attempting to delete board with slug:", slug);
    await deleteBoard(slug, board?.image || "");
  };

  if (loading || !board) {
    return <Loading />;
  }

  return (
    <div className="w-full grid text-left tablet:px-8 px-4 gap-8">
      <h2 className="text-3xl">{board.title}</h2>
      <div
        style={{ background: board.boardColor }}
        className={`w-full tablet:min-h-[300px] h-[300px] relative  opacity-[.8] p-2 group-hover:opacity-100 transition-all duration-500`}
      >
        <div className={`grid grid-cols-[${existingImages.length}] p-4`}>
          {existingImages.length > 0 && (
            <Image
              src={existingImages[0]}
              alt={`${board.title}_image`}
              fill
              className="p-4 object-cover "
            />
          )}
        </div>
      </div>
      {/* Edit Form */}
      {isEditing ? (
        <div className="mt-4 grid gap-4">
          <h3 className="text-xl">Edit Board</h3>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Board Title"
            className="border p-2 w-full bg-transparent rounded-md"
          />
          <div className="grid gap-2">
            <label className="font-medium">Upload Images (max 3)</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="border p-2 w-full bg-transparent rounded-md"
            />
            <div className="flex flex-wrap gap-4">
              {/* Preview existing images */}
              {existingImages.map((img, idx) => (
                <div key={idx} className="relative w-24 h-24">
                  <Image
                    src={img}
                    alt={`existing-${idx}`}
                    fill
                    className="object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => removeExistingImage(img)}
                    className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-1"
                  >
                    X
                  </button>
                </div>
              ))}
              {/* Preview new files */}
              {newPreviews.map((preview, idx) => (
                <div key={idx} className="relative w-24 h-24">
                  <Image
                    src={preview}
                    alt={`new-${idx}`}
                    fill
                    className="object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => removeNewFile(idx)}
                    className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-1"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleUpdateBoard}
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Update Board
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                // Optionally reset new files if user cancels
                setNewFiles([]);
                setNewPreviews([]);
              }}
              className="bg-gray-500 text-white p-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-green-500 text-white p-2 mt-4 rounded-md"
          >
            Edit Board
          </button>
          <button
            onClick={handleDeleteBoard}
            className="bg-red-500 text-white p-2 mt-4 rounded-md"
          >
            Delete Board
          </button>
        </>
      )}
    </div>
  );
}
