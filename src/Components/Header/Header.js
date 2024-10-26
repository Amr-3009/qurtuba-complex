import React from "react";
import "./Header.css";
import SaudiFlag from "../../assets/SVG/SaudiFlag";

const Header = () => {
  return (
    <header>
      <h3>
        Tarbyh Namouthajiyah Schools in Alnarjis & Qurtoba are now open{" "}
        <a href="https://ncle-sms.com/Admission" target="blank">
          Register Now
        </a>
      </h3>
      <div className="lang-switch">
        <p>العربية</p>
        <SaudiFlag />
      </div>
    </header>
  );
};

export default Header;
