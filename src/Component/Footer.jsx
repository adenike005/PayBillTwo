import React from "react";
import "../Styled/Footer.css";
import bottom from "/bottom.png";
import Logo from "/Logos.png";
import { FaFacebook,  FaXTwitter,  FaLinkedinIn  } from "react-icons/fa6";
import frame2 from '/Frame2.png';
import frame3 from '/Frame3.png';
import { FaWhatsapp } from "react-icons/fa";
import { FaApple, FaGooglePlay, FaQrcode, FaUserFriends } from 'react-icons/fa';
import { FiCopy } from "react-icons/fi";
import user  from '/User.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="stack">
      <div className="footer-stack">
  <div className="span">
    <h1>Download on Apple <br /> and Google playstore</h1><br />
   <div className="download-overicon">
   <div className="download-icon">
      <FaGooglePlay size={20} color="red" />
      <span>Download on Google play</span>
    </div>
      <FaQrcode size={40} />
   </div>

      <div className="download-overicon">
   <div className="download-icon">
   <FaApple size={20}  color="#000"/>
   <span>Download on Apple Store</span>
    </div>
    <FaQrcode size={40}  />
   </div>

    

    <div className="user-box">
    <span>Join 137k+ users today.</span><br />
    <img src={user} alt="" className="icons"/>
    </div>
  
   <div className="box-input-text">
   <h3>Earn more money when <br /> you refer a friend</h3>
   <div className="box-input">
    <input type="text" placeholder="BP-EMMANUEL001"/>
    <div className="box-copy">
    <FiCopy />
      <h6>Copy Referral code</h6>
    </div>
   </div>
   </div>
  </div>
  <img src={frame2} alt="" />
</div>
        <div className="footer-stack">
        <img src={frame3} alt="" />

        </div>
      </div>
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
                <ul>
                  <li>Features</li>
                  <li>Solutions</li>
                  <li>Pricing</li>
                </ul>
              </div>
              <div>
                <span>Company</span>
                <ul>
                  <li>About us</li>
                  <li>Careers</li>
                  <li>Media kit</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <span>Legal</span>
                <ul>
                  <li>Terms</li>
                  <li>Privacy</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-body">
            <p>© All rights reserved. 2024, Paybills Limited</p>

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

