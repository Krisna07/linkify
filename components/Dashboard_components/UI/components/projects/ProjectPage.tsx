"use client";
import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { boardProps } from "../../../utils/Interfaces";
import Button from "../../../../Global_components/Button";

interface Project {
  name: string;
  type: string;
  boards: boardProps[];
}

const ProjectsPage = () => {
  const [projectName, setProjectName] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [projects, setProjects] = useState<Project[]>([]);

  const handleCreateNew = (e: FormEvent) => {
    e.preventDefault();
    const newProject: Project = {
      name: projectName,
      type: selectedType,
      boards: [],
    };
    console.log("Creating new project:", newProject);
    // Add your project creation logic here
    setProjects((prev) => [...prev, newProject]);
  };

  return (
    <div className="w-full laptop:w-[1000px] grid gap-8 box-border">
      <div className="px-4 tablet:flex grid gap-8 items-center justify-between border-b border-accent pb-8">
        <div>
          <h2 className="text-[2rem] font-semibold leading-12">
            Let's create something great together!!
          </h2>
          <p>To share your idea, let's get started with the projects</p>
        </div>
        <div className="w-fit p-1 relative grid place-items-center">
          <div className="absolute w-full h-full bg-gradient-radial from-bermuda via-accent to-primary blur animate-text"></div>
          <Button
            children="Collaborate With Pro trial"
            variant={"default"}
            size={"default"}
            className="rounded-lg border-accent hover:shadow-bs"
          />
        </div>
      </div>
      <form className="grid gap-2" onSubmit={handleCreateNew}>
        <div className="mx-4 p-1 flex border border-accent rounded-lg active:shadow-bs focus:shadow-bs box-border overflow-hidden relative z-20">
          <input
            type="text"
            className="w-full px-2 py-1 bg-dark border-none outline-none"
            value={projectName}
            onFocus={() => setShowOptions(true)}
            onBlur={() => !projectName && setShowOptions(false)}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <Button
            children="Create New"
            variant={"default"}
            size={"default"}
            className="shadow-bs border-silver/25 text-silver/75 hover:border-silver/75"
            onClick={handleCreateNew}
          />
        </div>
        {showOptions && (
          <div className="flex px-4 gap-2 relative z-10">
            {["Educational", "Personal", "Professional", "Other"].map(
              (type, index) => (
                <motion.label
                  key={index}
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    duration: 1,
                    delay: index * 0.1,
                  }}
                  className="flex gap-2 items-center bg-accent rounded-full px-2 leading-[150%] text-sm"
                >
                  <input
                    type="radio"
                    className="text-sm"
                    value={type}
                    checked={selectedType === type}
                    onChange={() => setSelectedType(type)}
                  />
                  <span>{type}</span>
                </motion.label>
              )
            )}
          </div>
        )}
      </form>
      <div className=""></div>
    </div>
  );
};

export default ProjectsPage;
