import React from "react";
import SaudiFlag from "../../assets/SVG/SaudiFlag";
import USFlag from "../../assets/SVG/USFlag";

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
  return <div className="lang-switch">
    {
      langs.map((lang, i) => {
        return <button key={i} className="lang-switch__button">
          {lang.flag}
          <p>{lang.name === 'Arabic' ? "العربية" : lang.name}</p>
        </button>;
      })
    }
  </div>;
};

export default LangChanger;
