import React from "react";
import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>© 2022 Airbnb, Inc. · Privacy · Terms · Sitemap </footer>
      <div className="social-media">
        <ImFacebook className="icon-social" />
        <ImTwitter className="icon-social" />
        <ImInstagram className="icon-social" />
      </div>
    </div>
  );
};

export default Footer;
