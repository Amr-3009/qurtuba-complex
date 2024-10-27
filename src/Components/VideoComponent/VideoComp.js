import React from "react";

const VideoComp = ({ videos, onClick }) => {
  // const handleClickVideo = (index) => {
  //   onClick(index);
  // };
  return (
    <div className="image__container">
      {videos.map((video, index) => (
        <div
          // onClick={() => handleClickVideo(index)}
          key={index}
          className="image__item"
        >
          <video controls>
            <source src={video.src} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
};

export default VideoComp;
