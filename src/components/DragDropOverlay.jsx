import React from "react";

const DragDropOverlay = ({ dragging, draggedIndex, image }) => {
  return (
    // <img
    //   className={`absolute top-0 left-0 h-full w-full flex justify-center items-center bg-white border-1 border-dashed rounded-lg ${
    //     dragging && Number(draggedIndex) === Number(image.id) ? "z-50" : ""
    //   }`}
    //   src={image.thumbnail}
    // />
    dragging &&
    Number(draggedIndex) === Number(image.id) && (
      <div>
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-white border-1 border-dashed rounded-lg z-50">
          <div className="flex flex-col items-center">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M31 14l-9 9-9-9"
              ></path>
            </svg>
            <span className="text-sm text-gray-400">Drop here</span>
          </div>
        </div>
      </div>
    )
  );
};

export default DragDropOverlay;
