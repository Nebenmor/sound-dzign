import React, { useEffect, useState } from "react";
import "./Footer.css";
import { instagramLogo, twitterLogo, facebookLogo } from "../../assets";

const Footer = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    const year = new Date().getFullYear();
    setDate(year);
  }, []);

  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              Sound<span className="red">DZign</span>
            </a>

            {/* Social Icons */}
            <div className="social-icons">
              <a href="#">
                <img src={facebookLogo} alt="facebook-logo" />
              </a>

              <a href="#">
                <img src={twitterLogo} alt="twitter-logo" />
              </a>

              <a href="#">
                <img src={instagramLogo} alt="instagram-logo" />
              </a>
            </div>

            <div className="copyright">
              This website is designed by GTCoding &copy; <span style={{color: 'white'}} >{date}</span>
            </div>
          </div>

          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Blog</a></li>

              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li><a href="#"></a>contact@email.com</li>

              <li><a href="#">+1 999 9999 999</a></li>
            </ul>
            <div className="copyright mobile">
              This website is designed by GTCoding &copy; <span style={{color: 'white'}} >{date}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
