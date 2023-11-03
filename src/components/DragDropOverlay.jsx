import React from "react";

const DragDropOverlay = ({ dragging, draggedIndex, image }) => {
  return (
    <img
      className={`absolute top-0 left-0 h-full w-full flex justify-center items-center bg-white border-1 border-dashed rounded-lg ${
        dragging && Number(draggedIndex) === Number(image.id) ? "z-50" : ""
      }`}
      src={image.thumbnail}
    />
  );
};

export default DragDropOverlay;
