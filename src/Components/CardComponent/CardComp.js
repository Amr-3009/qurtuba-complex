import React from "react";
import "./CardComp.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CardComp = ({ cardImg, cardTitle, linkUrl, linkName, cardDate }) => {
  const { t } = useTranslation();
  return (
    <div className="card">
      <div className="card__img">
        <img src={cardImg} alt="card_image" />
      </div>
      <div className="card__content">
        <h3 className="card__title">{cardTitle}</h3>
        <p className="card__date">{cardDate}</p>
        <Link className="card__link" to={linkUrl}>
          {linkName}
        </Link>
      </div>
    </div>
  );
};

export default CardComp;
