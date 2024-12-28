import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Middle from './Components/Middle/Middle';
import Address from './Components/Address/Address';
import Why from './Components/Why/Why';
import Crouses from './Components/Crouses/Crouses';
import Photos from './Components/Photos/Photos';
import Youtube from './Components/Youtube/Youtube';
import OurTeams from './Components/OurTeams/OurTeams';
import Sidebar from './Components/Sidebar/Sidebar';
import Blogs from './Components/Blogs/Blogs'; // Import the Blogs component
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
     
        <Routes>
          {/* Define routes for each page/component */}
          <Route
            path="/"
            element={
              <>
              <Navbar />
                <Middle />
                <Why />
                <Crouses />
                <Photos />
                <Youtube />
                <OurTeams />
                <Address />
                <Footer />
                <Sidebar />
              </>
            }
          />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      
      </div>
    </Router>
  );
};

export default App;
