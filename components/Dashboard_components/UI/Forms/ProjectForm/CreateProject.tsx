import React, { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Button from "../../../../Global_components/Button";
import { BsEye } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { toast } from "react-toastify";
import RandomCodeGenerator from "../../../../../lib/radomcodegenerator";
import { NewProjectProps } from "../../components/projects/ProjectPage";
import { createProject } from "../../components/projects/projectactions";
import { ProjectProps } from "../../../utils/Interfaces";

interface CreateProjectProps {
  setProjects: React.Dispatch<React.SetStateAction<ProjectProps[]>>;
}
const CreateProject = ({ setProjects }: CreateProjectProps) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [formData, setFormData] = useState<NewProjectProps>({
    name: "",
    type: "",
    isPrivate: false,
    image: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePrivate = () => {
    setFormData((prev) => ({ ...prev, isPrivate: !prev.isPrivate }));
  };

  const setImage = () => {
    const randomImage = `https://picsum.photos/200/200?random=${RandomCodeGenerator()}`;
    setFormData((prev) => ({ ...prev, image: randomImage }));
  };

  const handleCreateNew = async (e: FormEvent) => {
    e.preventDefault();
    setImage();
    console.log(formData);
    if (formData.name && formData.type) {
      toast.loading(
        <>
          <p className="animate-pulse">Creaing new board</p>
        </>
      );
      const response = await createProject(formData);
      if (response.status !== 201) {
        return toast.error(response.message);
      }

      toast.dismiss();
      setProjects((prev) => [...prev, response.newProject]);
      setFormData({
        name: "",
        type: "",
        isPrivate: false,
        image: "",
      });
      return toast.success(response.message);
    } else {
      toast.error("Please enter the name and select type.");
    }
    toast.success("Project created successfully!");
  };

  return (
    <form className="grid gap-2 relative" onSubmit={handleCreateNew}>
      <div className={`w-full relative flex items-center gap-2 px-4`}>
        <input
          required
          type="text"
          name="name"
          className={`w-full px-2 py-1 bg-dark outline-none   border border-accent duration-300 rounded-lg box-border overflow-hidden relative z-20 ${
            showOptions && "shadow-bs"
          } transition-all ease-in-out`}
          value={formData.name}
          onFocus={() => setShowOptions(true)}
          onBlur={() => !formData.name && setShowOptions(false)}
          onChange={handleInputChange}
          placeholder="Enter project name"
        />
        <Button
          children="Create New"
          variant="default"
          className="min-w-fit shadow-bs border-silver/25 text-silver/75 hover:border-silver/75 px-2 text-sm p-1"
          type="submit"
        />
      </div>

      <div className="w-full absolute top-full p-1 z-10 flex justify-between px-4">
        <div className="w-full flex flex-wrap items-center gap-2">
          {["Educational", "Personal", "Professional", "Other"].map(
            (type, index) => (
              <motion.label
                key={index}
                initial={{ y: -24, opacity: 0 }}
                animate={
                  showOptions ? { y: 0, opacity: 1 } : { y: -24, opacity: 0 }
                }
                transition={{
                  type: "spring",
                  duration: 1,
                  delay: index * 0.1,
                }}
                className="flex gap-2 items-center bg-accent rounded-full px-2 leading-[150%] text-sm"
              >
                <input
                  type="radio"
                  name="type"
                  value={type}
                  checked={formData.type === type}
                  onChange={handleInputChange}
                />
                <span>{type}</span>
              </motion.label>
            )
          )}
        </div>

        <div
          onClick={togglePrivate}
          className="h-full text-[12px] flex items-center rounded-full relative box-border shadow-bs"
        >
          <div className="w-6 p-1 justify place-items-center h-full z-20">
            <BsEye />
          </div>
          <div
            className={`w-4 h-4 bg-accent left-1 absolute transition-transform ease-in-out rounded-full z-10 ${
              formData.isPrivate ? "translate-x-6" : ""
            }`}
          ></div>
          <div className="w-6 p-1 justify place-items-center h-full z-20">
            <CiLock />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateProject;
