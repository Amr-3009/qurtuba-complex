import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import VideoComp from "../../Components/VideoComponent/VideoComp";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Video from "yet-another-react-lightbox/plugins/video";
import Download from "yet-another-react-lightbox/plugins/download";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { TeacherTrainingVideos } from "../../TeacherTrainingVideos";

const TeacherTrainingVideo = () => {
  const [index, setIndex] = React.useState(-1);
  const fullscreenRef = React.useRef(null);
  const [closeOnPullDown, setCloseOnPullDown] = React.useState(true);
  const [closeOnBackdropClick, setCloseOnBackdropClick] = React.useState(true);
  return (
    <>
      <VideoComp
        videos={TeacherTrainingVideos}
        // onClick={(currentIndex) => setIndex(currentIndex)}
      />
      <Lightbox
        controller={{ closeOnPullDown, closeOnBackdropClick }}
        plugins={[Download, Fullscreen, Slideshow, Video]}
        on={{
          click: () => fullscreenRef.current?.enter(),
        }}
        fullscreen={{ ref: fullscreenRef }}
        slides={TeacherTrainingVideos}
        index={index}
        // open={index >= 0}
        // close={() => setIndex(-1)}
      />
    </>
  );
};

export default TeacherTrainingVideo;
