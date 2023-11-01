import React from "react";
// import { useLocalStorage } from "./useLocalStorage";

const FileCard = ({ image }) => {
  const [isSelected, setIsSelected] = React.useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
  };

  const handleDelete = () => {
    // TODO: Delete the image from LocalStorage.
  };

  return (
    <div className="file-card">
      <input type="checkbox" checked={isSelected} onChange={handleSelect} />
      <img src={image.src} alt={image.name} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default FileCard;
