import React from "react";
import FileCard from "./FileCard";
import { useLocalStorage } from "./useLocalStorage";

const FileGrid = () => {
  const [images, setImages] = useLocalStorage("images", []);

  const handleAddImage = () => {
    // TODO: Add a new image to the grid.
  };

  const handleDeleteImage = (image) => {
    setImages((prevImages) => prevImages.filter((img) => img !== image));
  };

  return (
    <div className="file-grid">
      {images.map((image) => (
        <FileCard key={image.id} image={image} />
      ))}
      <button onClick={handleAddImage}>Add Image</button>
    </div>
  );
};

export default FileGrid;
