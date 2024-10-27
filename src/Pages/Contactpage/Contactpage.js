import React from "react";
import { useState } from "react";
import { SiSnapchat } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Contact.css";
import { Trans, useTranslation } from "react-i18next";

const Contactpage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:info@trbyh.edu.sa?subject=Message from ${name}&body=${encodeURIComponent(
      message
    )}&cc=${email}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="contact-body">
      <div className="contact-header">
        <div className="contact-container">
          <h3>{t("contact")}</h3>
          <hr />
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">{t("name")}:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">{t("email")}:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="message">{t("message")}:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">{t("send")}</button>
            </form>
          </div>
        </div>
        <div className="social-media">
          <h3>{t("socials")}</h3>
          <div className="social-icons">
            <div className="row-1">
              <a href="https://www.snapchat.com/add/tns-mgr" target="blank">
                <SiSnapchat size={64} />
              </a>
              <a href="https://www.instagram.com/trbyh/" target="blank">
                <FaInstagram size={64} />
              </a>
              <a href="https://twitter.com/trbyh" target="blank">
                <BsTwitterX size={64} />
              </a>
            </div>
            <div className="row-2">
              <a href="https://www.youtube.com/user/trbyh" target="blank">
                <FaYoutube size={64} />
              </a>
              <a href="https://wa.me/966920003488" target="blank">
                <FaWhatsapp size={64} />
              </a>
              <a href="https://www.facebook.com/altarbiya" target="blank">
                <FaFacebook size={64} />
              </a>
            </div>
          </div>
          <hr />
          <div className="contact-details">
            <h3>{t("conDetails")}</h3>
            <div className="phone">
              <FaPhoneAlt />
              <a href="tel:920003488">920003488</a>
            </div>
            <div className="email">
              <MdEmail />
              <a href="mailto:info@trbyh.edu.sa">info@trbyh.edu.sa</a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.8047274230685!2d46.73650176163006!3d24.802139246509164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efdb550c55379%3A0x9c05eeb4810dffc4!2z2YXYr9in2LHYsyDYp9mE2KrYsdio2YrYqSDYp9mE2YbZhdmI2LDYrNmK2Kkg2YLYsdi32KjYqQ!5e0!3m2!1sen!2ssa!4v1730008774512!5m2!1sen!2ssa"
          width="1170"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Google Maps Embed"
        ></iframe>
      </div>
    </div>
  );
};

export default Contactpage;
