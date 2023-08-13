"use client";
import React, { useRef, useEffect, useState } from "react";
import { useDrag } from "react-dnd";

const DraggableBox: React.FC = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="w-10 h-10 bg-blue-500 rounded-lg shadow-md flex items-center justify-center text-white cursor-move"
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}>
      Box
    </div>
  );
};

export default DraggableBox;
