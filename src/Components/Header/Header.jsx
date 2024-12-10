import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="web-site">
      {/* Left: Contact Information */}
      <div className="web-header-left">
        <span className="mobile-no">
          <i className="bi bi-telephone-fill"></i>
          <a href="tel:+919776462222" className="contact-link">+91 97764 62222</a>
        </span>
        <span className="email-id">
          <i className="bi bi-envelope"></i>
          <a href="mailto:kacs.workspace@gmail.com" className="contact-link">kacs.workspace@gmail.com</a>
        </span>
      </div>

      {/* Right: Social Media Icons */}
      <div className="web-header-right">
        <a href="https://www.facebook.com/KACSIASOAS/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="https://www.instagram.com/kacsiasoas/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://www.youtube.com/@kacsiasoas" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
