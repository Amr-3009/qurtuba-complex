import React from "react";
import "./Homepage.css";
import { Trans, useTranslation } from "react-i18next";

const Homepage = () => {
  const { t } = useTranslation();
  return (
    <div className="homepage">
      <div className="homepage__intro">
        <h2>{t("intro")}</h2>
      </div>
      <div className="homepage__container">
        <div className="homepage__card">
          <h3>{t("vision")}</h3>
          <p>{t("ourVision")}</p>
        </div>
        <div className="homepage__card">
          <h3>{t("mission")}</h3>
          <p>{t("ourMission")}</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
