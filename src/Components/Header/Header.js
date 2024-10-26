import React, { useState } from "react";
import "./Header.css";

import { Trans, useTranslation } from "react-i18next";
import LangChanger from "../LangChanger/LangChanger";


const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <h3>
        {t("headerRibbon")}
        <Trans i18nKey={t("admissionLink")}>
          <a href="https://ncle-sms.com/Admission" target="blank">
            {t("admissionLink")}
          </a>
        </Trans>
      </h3>
      <LangChanger />
    </header>
  );
};

export default Header;
