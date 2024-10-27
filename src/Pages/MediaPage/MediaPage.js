import React from "react";
import "./MediaPage.css";
import CardComp from "../../Components/CardComponent/CardComp";
import { useTranslation } from "react-i18next";

const MediaPage = ({ cardUrl, mediaTitle, actionTitle, actionImage }) => {
  const { t } = useTranslation();
  return (
    <CardComp
      cardImg={actionImage}
      linkUrl={cardUrl}
      cardTitle={mediaTitle}
      linkName={actionTitle}
    />
  );
};

export default MediaPage;
