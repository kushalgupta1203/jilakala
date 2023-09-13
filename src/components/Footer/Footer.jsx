import React from "react";
import "../../assets/styles/Footer.css";
import odopLogo from "../../assets/images/odop-logo.png";
import nic from "../../assets/images/nic.png"
import digital from "../../assets/images/digital.png"
import msm from "../../assets/images/msm.png"
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-body">
          <div className="footer-upper">
            <div className="footer-upper-left">
              <img className="odop-logo" src={odopLogo} alt="odop-logo" />
            </div>
            <div className="footer-upper-right">
              <div className="side-left">
                <div className="side-left-1">
                  <ul>
                    <li>About</li>
                    <li>Growers</li>
                    <li>Merchants</li>
                    <li>Partners</li>
                    <li>Contacts</li>
                  </ul>
                </div>
                <div className="side-left-2">
                  <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Linkedin</li>
                    <li>Instagram</li>
                  </ul>
                </div>
                <BsFillArrowUpCircleFill className="link-up"/>
              </div>
            </div>
          </div>
          <div className="footer-middle">
            <div className="footer-middle-left">
              <div className="left-upper">
                <p>(434) 546-4356</p>
              </div>
              <div className="left-lower">
                <p>
                  <a href="#">contact@lxyz.com</a>
                </p>
              </div>
          </div>
          <div className="footer-middle-right">
            <p>© Jammu & Kashmir <a href="#">Ministry of Electronics & Information Technology</a>, Government of India</p>
          </div>    
        </div>
        <div className="footer-lower">
            <img  className="digital" src={digital} alt="digital-india" />
            <img className="nic" src={nic} alt="nic" />
            <img  className="msm" src={msm} alt="msm" />
        </div>
      </div>

      </div>
    </>
  );
}

export default Footer;
