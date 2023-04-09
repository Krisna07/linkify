import { useState } from "react";
import shortid from "shortid";
import { FaPlus } from "react-icons/fa";

const HomePage = () => {
  const [linkItems, setLinkItems] = useState<LinkItem[]>([]);
  const [titleInput, setTitleInput] = useState<string>("");
  const [linkInput, setLinkInput] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("white");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInput(event.target.value);
  };

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkInput(event.target.value);
  };

  const handleBackgroundColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBackgroundColor(event.target.value);
  };

  const handleAddLink = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLinkItems([
      ...linkItems,
      { id: shortid.generate(), title: titleInput, link: linkInput },
    ]);
    setTitleInput("");
    setLinkInput("");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Linkify</h1>
      <div className="bg-white rounded-lg p-8 grid gap-4">
        <div className="grid grid-cols-1">
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
          <input
            type="color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
            className="w-full p-2 border border-gray-400 rounded-md"
          />
        </div>
        <button
          className="py-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 flex items-center justify-center"
          onClick={handleAddLink}
        >
          <FaPlus className="mr-2" />
          Add Link
        </button>
        {linkItems.map((linkItem) => (
          <a
            key={linkItem.id}
            href={linkItem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-2 font-semibold text-lg hover:underline"
            style={{ backgroundColor }}
          >
            {linkItem.title}
          </a>
        ))}
      </div>
    </div>
  );
};

type LinkItem = {
  id: string;
  title: string;
  link: string;
};

export default HomePage;
