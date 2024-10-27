import React from "react";
import "./BoysInternational.css";
import MediaPage from "../MediaPage/MediaPage";
import { useTranslation } from "react-i18next";
import PhotoIcon from "../../assets/images/9848177.png";
import VideoIcon from "../../assets/images/vecteezy_video-icon-video-symbol-play-video-sign_7160087.png";

const BoysInternational = () => {
  const { t } = useTranslation();
  return (
    <div className="boysInternational__container">
      <MediaPage actionTitle={t("photo")} actionImage={PhotoIcon} />
      <MediaPage actionTitle={t("video")} actionImage={VideoIcon} />
    </div>
  );
};

export default BoysInternational;
