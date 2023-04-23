"use client";

import { useState } from "react";
import shortid from "shortid";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaArrowAltCircleLeft,
  FaArrowLeft,
  FaChevronLeft,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import RootLayout from "../../Layout";

const Demo = () => {
  const [linkItems, setLinkItems] = useState<LinkItem[]>([]);
  const [btnicon, setBtnicon] = useState<any>(<FaChevronLeft />);
  const [titleInput, setTitleInput] = useState<string>("");
  const [linkInput, setLinkInput] = useState<string>("");
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [editLinkId, setEditLinkId] = useState<string>("");
  const [editLinkTitle, setEditLinkTitle] = useState<string>("");
  const [editLinkLink, setEditLinkLink] = useState<string>("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInput(event.target.value);
  };

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkInput(event.target.value);
  };

  const handleAddLink = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const urlPattern = new RegExp(
      "^https?:\\/\\/[\\w\\d\\-]+(\\.[\\w\\d\\-]+)*(\\/[\\w\\d\\-\\./?%&=]*)?$"
    );

    if (urlPattern.test(linkInput)) {
      if (
        !linkInput.startsWith("http://") &&
        !linkInput.startsWith("https://")
      ) {
        setLinkInput("https://" + linkInput);
      }

      setLinkItems([
        ...linkItems,
        { id: shortid.generate(), title: titleInput, link: linkInput },
      ]);
      setTitleInput("");
    } else {
      toast.error("Invalid URL");
    }
  };

  const handleEditClick = (linkId: string) => {
    const linkItem = linkItems.find((link) => link.id === linkId);
    if (linkItem) {
      setEditLinkId(linkItem.id);
      setEditLinkTitle(linkItem.title);
      setEditLinkLink(linkItem.link);
      setShowEditModal(true);
    }
  };

  const handleEditTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditLinkTitle(event.target.value);
  };

  const handleEditLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditLinkLink(event.target.value);
  };

  const handleSaveEditLink = () => {
    const updatedLinks = linkItems.map((link) => {
      if (link.id === editLinkId) {
        return { ...link, title: editLinkTitle, link: editLinkLink };
      } else {
        return link;
      }
    });
    setLinkItems(updatedLinks);
    setShowEditModal(false);
  };

  const handleDeleteClick = (linkId: string) => {
    const updatedLinks = linkItems.filter((link) => link.id !== linkId);
    setLinkItems(updatedLinks);
  };

  return (
    <RootLayout>
      {" "}
      <div className="  flex flex-col justify-center items-center bg-[#f3e8b9] p-4 rounded ">
        {/* <Link
     href={"/"}
     className="flex gap-2 bg-[#f3a4d5] items-center p-2 absolute top-8 right-8 rounded font-bold"
     onMouseOver={() => setBtnicon(<FaArrowLeft />)}
     onMouseLeave={() => setBtnicon(<FaChevronLeft />)}
   >
     {btnicon}
     Home
   </Link> */}
        <h1 className="text-4xl font-bold  mb-4 ">Linkify</h1>
        <div className="bg-white rounded-lg p-8 grid gap-4">
          <div className="grid grid-cols-1  ">
            <input
              type="text"
              placeholder="Title"
              value={titleInput}
              onChange={handleTitleChange}
              className="w-full p-2 border border-gray-400 rounded-md"
            />
            <input
              type="text"
              placeholder="Link"
              value={linkInput}
              onChange={handleLinkChange}
              className="w-full p-2 border border-gray-400 rounded-md"
            />
          </div>
          <button
            className="py-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 flex items-center justify-center "
            onClick={handleAddLink}
          >
            <FaPlus className="mr-2" />
            Add Link
          </button>
          <ToastContainer />
          {/* Render each link item */}
          {linkItems.map((link) => (
            <div key={link.id} className="flex items-center gap-2">
              <div className="flex-1">
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-700  font-bold bg-blue-400 px-4 py-2 rounded"
                >
                  {link.title.toUpperCase()}
                </a>
              </div>
              <button
                className="py-1 px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => handleEditClick(link.id)}
              >
                <FaEdit />
              </button>
              <button
                className="py-1 px-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={() => handleDeleteClick(link.id)}
              >
                <FaTrash />
              </button>
            </div>
          ))}{" "}
          {/* Edit modal */}
          {showEditModal && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Edit Link</h2>
                <div className="grid grid-cols-1 p-4">
                  <input
                    type="text"
                    placeholder="Title"
                    value={editLinkTitle}
                    onChange={handleEditTitleChange}
                    className="w-full p-2 border border-gray-400 rounded-md mb-4"
                  />
                  <input
                    type="text"
                    placeholder="Link"
                    value={editLinkLink}
                    onChange={handleEditLinkChange}
                    className="w-full p-2 border border-gray-400 rounded-md mb-4"
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                    onClick={() => setShowEditModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 flex gap-8"
                    onClick={handleSaveEditLink}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </RootLayout>
  );
};

export default Demo;
