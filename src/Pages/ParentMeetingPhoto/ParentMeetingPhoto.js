import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ImageComp from "../../Components/ImageComponent/ImageComp";
import "yet-another-react-lightbox/plugins/counter.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Download from "yet-another-react-lightbox/plugins/download";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { ParentMeetingPhotos } from "../../ParentMeeting1Img";
import "./ParentMeetingPhoto.css";

const ParentMeetingPhoto = () => {
  const [index, setIndex] = React.useState(-1);
  const fullscreenRef = React.useRef(null);
  const [closeOnPullDown, setCloseOnPullDown] = React.useState(true);
  const [closeOnBackdropClick, setCloseOnBackdropClick] = React.useState(true);
  return (
    <>
      <ImageComp
        photos={ParentMeetingPhotos}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />
      <Lightbox
        controller={{ closeOnPullDown, closeOnBackdropClick }}
        plugins={[ Download, Fullscreen, Slideshow]}
        on={{
          click: () => fullscreenRef.current?.enter(),
        }}
        fullscreen={{ ref: fullscreenRef }}
        slides={ParentMeetingPhotos}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
};

export default ParentMeetingPhoto;
