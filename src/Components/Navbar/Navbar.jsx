// import React from 'react';

// import { Link } from 'react-scroll';

// import "./Navbar.css";
// import logo from '../../assets/LOGO.png'

// const Navbar = () => {
//   return (
//     <div className="nav_container container-fluid">
//       <div className="nav-left">
//         <img src={logo} height='50' width='50' alt="logo" />
//       </div>
//       <div className="nav-right">
//         {/* The Institute Dropdown */}
//         <div className="dropdown">
//           <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//             The Institute
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="#">Blogs</a></li>
//             <li><a className="dropdown-item" href="#">Director's Message</a></li>
//             <li><a className="dropdown-item" href="#">Chief Advisor's Message</a></li>
//           </ul>
//         </div>
        
//         {/* Course Dropdown */}
//         <div className="dropdown">
//           <Link
//             to="courses"
//             className="nav-link dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//             spy={true}
//             smooth={true}
//             offset={-50} // Adjust for sticky headers
//             duration={500}
//           >
//             Courses
//           </Link>
//           <ul className="dropdown-menu">
//             <li>
//               <a className="dropdown-item" href="#">
//                 OAS Foundation Batch
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 OAS Mains Test Series
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 OAS Prelims Test Series
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Other Links */}
//         <a href="#" className="nav-link">Success-story</a>
//         <a href="#" className="nav-link">Books</a>
//         <a href="https://kacs.learnyst.com/learn/account/signin" className="nav-link">Login</a>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
// 
import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import kasclogo from "../../assets/LOGO.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Top Header */}
      <div className="top-header">
        <div className="container">
          <div className="contact-info">
            <span>
              <i className="bi bi-envelope"></i><a href="kacs.workspace@gmail.com">kacs.workspace@gmail.com</a>
            </span>
            <span>
              <i className="bi bi-telephone-fill"></i> <a href="+919776462222">+919776462222</a>
            </span>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          {/* Logo Section */}
          <div className="nav-left">
            <a href="#">
              <img src={kasclogo} alt="Logo" className="logo" />
            </a>
          </div>

          {/* Hamburger Menu */}
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* Navigation Links */}
          <div className={`nav-right ${menuOpen ? "active" : ""}`}>
            <div className="dropdown">
              <a href="#" className="nav-link">
                The Institute <i className="bi bi-caret-down-fill"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-journal-text"></i> Blogs
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-person"></i> Director's Message
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-people"></i> Chief Advisor's Message
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <Link
                to="courses"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Courses <i className="bi bi-caret-down-fill"></i>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-book"></i> OAS Foundation Batch
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-pencil"></i> OAS Mains Test Series
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-check-circle"></i> OAS Prelims Test Series
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" className="nav-link">
              <i className="bi bi-trophy"></i> Achievements
            </a>
            <a href="#" className="nav-link">
              <i className="bi bi-star"></i> Success Story
            </a>
            <a href="#" className="nav-link">
              <i className="bi bi-book"></i> Books
            </a>
            <a
              href="https://kacs.learnyst.com/learn/account/signin"
              className="nav-link login-btn"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

