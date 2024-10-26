import React, { useEffect } from "react";
import SaudiFlag from "../../assets/SVG/SaudiFlag";
import USFlag from "../../assets/SVG/USFlag";
import "../Header/Header.css";
import { useTranslation } from "react-i18next";

const langs = [
  {
    code: "en",
    flag: <USFlag />,
    name: "English",
  },
  {
    code: "ar",
    flag: <SaudiFlag />,
    name: "Arabic",
  },
];

const LangChanger = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="lang-switch">
      {langs.map((lang, i) => {
        return (
          <button
            key={i}
            className={lang.code === i18n.language ? "selected" : ""}
            onClick={() => changeLanguage(lang.code)}
          >
            {lang.flag}
            <p>{lang.name === "Arabic" ? "العربية" : lang.name}</p>
          </button>
        );
      })}
    </div>
  );
};

export default LangChanger;
