import React, { useState } from "react";
import "./Header.css";

import { Trans, useTranslation } from "react-i18next";
import LangChanger from "../LangChanger/LangChanger";

import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const NavCollapse = () => {
    if (window.innerWidth <= 768) {
      setShowMenu(false);
      setToggleMenu(!toggleMenu);
    }
  };
  const { t } = useTranslation();
  return (
    <header>
      <div className="topnav">
        <h3>
          {t("headerRibbon")}
          <Trans i18nKey={t("admissionLink")}>
            <a href="https://ncle-sms.com/Admission" target="blank">
              {t("admissionLink")}
            </a>
          </Trans>
        </h3>
      </div>
      <div className="bottomnav">
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
            <h1>{t("main")}</h1>
          </div>
          <div className="nav-links">
            <ul className={showMenu ? "bigMenu" : undefined}>
              <div className="nav-items">
                {setShowMenu ? (
                  <IoIosArrowUp
                    size={200}
                    onClick={() => {
                      setShowMenu(!showMenu);
                      setToggleMenu(!toggleMenu);
                    }}
                  />
                ) : null}
                <li>
                  <NavLink to="qurtuba-complex/home" onClick={NavCollapse}>
                    {t("home")}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="qurtuba-complex/kindergarten"
                    onClick={NavCollapse}
                  >
                    {t("kindergarten")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="qurtuba-complex/boys" onClick={NavCollapse}>
                    {t("boys")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="qurtuba-complex/girls" onClick={NavCollapse}>
                    {t("girls")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="qurtuba-complex/contact" onClick={NavCollapse}>
                    {t("contact")}
                  </NavLink>
                </li>
              </div>
            </ul>
          </div>
          <LangChanger />
          <div className="dropdown">
            {toggleMenu ? null : (
              <IoIosArrowDown
                size={40}
                onClick={() => {
                  setShowMenu(!showMenu);
                  setToggleMenu(!toggleMenu);
                }}
              />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
