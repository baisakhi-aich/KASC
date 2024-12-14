import React from 'react';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <a href="https://www.facebook.com/share/axJmkpofua49K2xC/" target="_blank" rel="noopener noreferrer" className="sidebar-icon">
          <i className="bi bi-facebook"></i>
        </a>
        <span className="sidebar-tooltip">Facebook Page</span>
      </div>
      <div className="sidebar-item">
        <a href="https://twitter.com/"  target="_blank" rel="noopener noreferrer" className="sidebar-icon">
          <i className="bi bi-twitter"></i>
        </a>
        <span className="sidebar-tooltip">Twitter</span>
      </div>
      <div className="sidebar-item">
        <a href="https://www.instagram.com/kacsiasoas/profilecard/?igsh=b3IzenJ0aWprMXZk"  target="_blank" rel="noopener noreferrer" className="sidebar-icon">
          <i className="bi bi-instagram"></i>
        </a>
        <span className="sidebar-tooltip">Instagram Page</span>
      </div>
      <div className="sidebar-item">
        <a href="https://whatsapp.com/channel/0029VaImFwA96H4OEHfLex3G" target="_blank" rel="noopener noreferrer" className="sidebar-icon">
          <i className="bi bi-whatsapp"></i>
        </a>
        <span className="sidebar-tooltip">WhatsApp Channel</span>
      </div>
      <div className="sidebar-item">
        <a href="https://www.youtube.com/@kacsiasoas" target="_blank" rel="noopener noreferrer" className="sidebar-icon">
          <i className="bi bi-youtube"></i>
        </a>
        <span className="sidebar-tooltip">YouTube</span>
      </div>
      <div className="sidebar-item">
        <a href="https://t.me/kacsiasoas"  target="_blank" rel="noopener noreferrer" className="sidebar-icon">
          <i className="bi bi-telegram"></i>
        </a>
        <span className="sidebar-tooltip">Telegram Page</span>
      </div>
    </div>
  );
};

export default Sidebar;
