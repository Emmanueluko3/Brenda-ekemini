import React from "react";
import "../styles/footer.css";
import Logo from "../assets/images/citadel.svg";
import Fb from "../assets/images/Fb.png";
import Ig from "../assets/images/ig.png";
import Twitter from "../assets/images/twitter.png";
import Linkedin from "../assets/images/linkedin.png";

function Footer() {
  return (
    <div className="footer-parent">
      <div className="footer">
        <div className="down-path">
          <h4>Follow us on all social media platforms</h4>
          <div className="medias">
            <img src={Fb} alt="Facebook" />
            <img src={Ig} alt="Instagram" />
            <img src={Twitter} alt="Twitter" />
            <img src={Linkedin} alt="Linkedin" />
          </div>
        </div>

        <div className="logo">
          <img src={Logo} alt="Logo" />
          <h4>All right reserved 2023</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
