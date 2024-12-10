// import React from 'react'
// import imgadd from "../../assets/addressimg.jpeg"
// import "./Address.css"
// const Address = () => {
//   return (
//     <div className='map-container'> 
//     <h3>Our Address</h3>
//     <span>
//     <img src={imgadd}></img>
//     <a href="https://www.google.com/maps/place/KACS+Library+%7C+Reading+room+%7C+IAS%2FOAS+Coaching+Center+%7C+Institution+%7C+bhubaneswar+%7C+BBSR/@20.2844612,85.8037257,15z/data=!4m6!3m5!1s0x3a19a7c03d221f19:0x6ef3ed3f84fa500f!8m2!3d20.272881!4d85.8046507!16s%2Fg%2F11lcbzcddq?entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D">
//     <i class="bi bi-geo-alt-fill"></i></a>
//     </span>
//     </div>
//   )
// }

// export default Address
import React from 'react';
import imgadd from "../../assets/addressimg.jpeg";
import "./Address.css";
const Address = () => {
  return (
    <div className='address-container'>
      <div className='address-container1'>

      <div className='address-image-wrapper'>
        <img src={imgadd} alt="Address Location" className='address-image' />
        <a
          href="https://www.google.com/maps/place/KACS+Library+%7C+Reading+room+%7C+IAS%2FOAS+Coaching+Center+%7C+Institution+%7C+bhubaneswar+%7C+BBSR/@20.2844612,85.8037257,15z/data=!4m6!3m5!1s0x3a19a7c03d221f19:0x6ef3ed3f84fa500f!8m2!3d20.272881!4d85.8046507!16s%2Fg%2F11lcbzcddq?entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
          className='address-icon'
        >
          <i className="bi bi-geo-alt-fill"></i>
        </a>
      </div>
      </div>
      <div className='address-container2'>
      <h6 className='address-heading2'>Bhubaneswar Office</h6>
<p className='details'>Plot No. 1030/2166, Near Delta Square, Opposite of UNIT -8 Boys High School, Shatabdi Nagar, Bhubaneswar, Odisha, 751003
</p>
<span>Contact us:+919776462222</span>
      </div>
    </div>
  );
};

export default Address;
