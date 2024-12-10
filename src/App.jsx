import React from 'react'
 import Navbar from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Middle from './Components/Middle/Middle';
import Address from './Components/Address/Address';
import Why from './Components/Why/Why';
import Crouses from './Components/Crouses/Crouses';
import Photos from './Components/Photos/Photos';
import Youtube from './Components/Youtube/Youtube';
import OurTeams from './Components/OurTeams/OurTeams';
const App = () => {
  return (
    <div>
    {/* <Header/> */}
    <Navbar/> 
    <Middle/>
    <Why/>
    <Crouses/>
     <Photos/>
     <Youtube/> 
     <OurTeams/>
    <Address/>
    <Footer/>
    </div>
  )
}

export default App 

