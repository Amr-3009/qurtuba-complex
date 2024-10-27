import React from "react";
import { Timer, ConstructionIcon } from "lucide-react";
import "./UnderConstruction.css";
import { useTranslation } from "react-i18next";

const UnderConstruction = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="content">
        <div className="icon-container">
          <ConstructionIcon className="icon" />
        </div>

        <div className="header">
          <h1>{t("construction")}</h1>
          <p>{t("constructionText")}</p>
        </div>

        <div className="timer-display">
          <div className="timer-item">
            <Timer className="timer-icon" />
            <p>{t("timer")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
