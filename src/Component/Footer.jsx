import React from "react";
import "../Styled/Footer.css";
import bottom from "/bottom.png";
import Logo from "/Logos.png";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaFacebook,  FaXTwitter,  FaLinkedinIn  } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="body">
        <div className="footer-container">
          <div className="bodys">
            <div className="footer-part-text">
              <img src={Logo} alt="Logo" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
              </p>
            </div>
            <div className="footer-part-link">
              <div>
                <span>Product</span>
                <li>Features</li>
                <li>Solutions</li>
                <li>Pricing</li>
              </div>
              <div>
                <span>Company</span>
                <li>About us</li>
                <li>Careers</li>
                <li>Media kit</li>
                <li>Contact</li>
              </div>
              <div>
                <span>Legal</span>
                <li>Terms</li>
                <li>Privacy</li>
              </div>
            </div>
          </div>

          <div className="footer-body">
            <p>@All right deserved. 2024, Paybills Limited</p>

            <div className="footer-icon">
              <div className="iconss">
                <FaFacebook color="#fff" size={20} />
              </div>
              <div className="iconss">
                <FaWhatsapp color="#fff" size={20} />
              </div>
              <div className="iconss">
                <FaXTwitter color="#fff" size={20} />
              </div>
              <div className="iconss">
                <FaLinkedinIn color="#fff" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={bottom} alt="Bottom Graphic" className="bottom" />
    </div>
  );
};

export default Footer;
