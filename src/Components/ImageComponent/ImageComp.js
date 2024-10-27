import React from "react";

const ImageComp = ({ photos, onClick }) => {
  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className="image__container">
      {photos.map((photo, index) => (
        <div
          onClick={() => handleClickImage(index)}
          key={index}
          className="image__item"
        >
          <img src={photo.src} alt={`parent-meeting-${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageComp;
