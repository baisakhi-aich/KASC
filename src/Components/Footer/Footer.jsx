import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* Left Section: Copyright */}
      <div className="footer-left">
        <p>Copyright ©2024 KACS, Odisha. All Rights Reserved.</p>
      </div>

      {/* Right Section: Social Icons */}
      <div className="footer-right">
        <div className="social-icons">
          <a 
            href="https://www.facebook.com/share/axJmkpofua49K2xC/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook fb"></i>
          </a>
          <a 
            href="https://twitter.com/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter tw"></i>
          </a>
          <a 
            href="https://www.instagram.com/kacsiasoas/profilecard/?igsh=b3IzenJ0aWprMXZk" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram in"></i>
          </a>
          <a 
            href="https://www.youtube.com/@kacsiasoas" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="bi bi-youtube yt"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

