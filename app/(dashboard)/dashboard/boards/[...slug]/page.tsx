"use client";
import { useEffect, useState } from "react";
import getBoards from "../../../../../components/Dashboard_components/utils/Fetchbaords";
import { boardProps } from "../../../../../components/Dashboard_components/utils/Interfaces";
import { toast } from "react-toastify";
import Loading from "../../../../(auth)/auth/Formcomponents/Loading";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  updateBoard,
  deleteBoard,
} from "../../../../../components/Dashboard_components/utils/editBoards";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const [board, setBoard] = useState<boardProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [updatedData, setUpdatedData] = useState<{
    title: string;
    boardColor: string;
  }>({ title: "", boardColor: "" });
  const route = useRouter();

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const data = await getBoards();
        const thisData = data.find((board: boardProps) => board.id == slug);
        if (thisData) {
          setBoard(thisData);
          setUpdatedData({
            title: thisData.title,
            boardColor: thisData.boardColor,
          }); // Initialize form with current board data
        } else {
          route.push("/dashboard/boards");
        }
      } catch (err: any) {
        toast.error(err.message || "An error occurred");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchBoards();
  }, []);

  const handleUpdateBoard = async () => {
    const result = await updateBoard(slug, updatedData);
    if (result) {
      toast.success("Board updated successfully!");
      setIsEditing(false); // Close the edit form
      setBoard((prev) => (prev ? { ...prev, ...updatedData } : null)); // Update local state safely
    } else {
      toast.error("Failed to update board.");
    }
  };

  const handleDeleteBoard = async () => {
    console.log("Attempting to delete board with slug:", slug); // Log the slug
    const result = await deleteBoard(slug); // Ensure slug is the correct board ID
    if (result) {
      toast.success("Board deleted successfully!");
      route.push("/dashboard/boards"); // Redirect after deletion
    } else {
      toast.error("Failed to delete board.");
    }
  };

  if (loading || !board) {
    return <Loading />;
  } else {
    return (
      <div className="w-full grid text-left tablet:px-8 px-4 gap-8">
        <h2 className="text-3xl">{board.title}</h2>
        <div
          style={{
            background: `${board.boardColor}`,
          }}
          className="w-full tablet:min-h-[500px] h-[300px] relative opacity-[.8] group-hover:opacity-100 transition-all duration-500 "
        >
          {board.image && (
            <Image
              src={`https://kbglzqgrxnmdqvauagdb.supabase.co/storage/v1/object/public/Boards/${board.image}`}
              alt={`${board.title + "_image"}`}
              fill
              className="object-cover object-start"
            />
          )}
        </div>

        {/* Edit Form */}
        {isEditing ? (
          <div className="mt-4">
            <h3 className="text-xl">Edit Board</h3>
            <input
              type="text"
              value={updatedData.title}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, title: e.target.value })
              }
              placeholder="Board Title"
              className="border p-2 w-full"
            />
            <input
              type="text"
              value={updatedData.boardColor}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, boardColor: e.target.value })
              }
              placeholder="Board Color"
              className="border p-2 w-full mt-2"
            />
            <button
              onClick={handleUpdateBoard}
              className="bg-blue-500 text-white p-2 mt-2"
            >
              Update Board
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white p-2 mt-2 ml-2"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-green-500 text-white p-2 mt-4"
          >
            Edit Board
          </button>
        )}

        {/* Delete Button */}
        <button
          onClick={handleDeleteBoard}
          className="bg-red-500 text-white p-2 mt-4"
        >
          Delete Board
        </button>
      </div>
    );
  }
}
