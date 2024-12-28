import React from 'react'
import pic1 from "../../assets/scroll-img.jpg"
import pic2 from "../../assets/scroll-img3.jpg"
import pic3 from "../../assets/scroll-img5.jpg"
import pic4 from "../../assets/scroll-img8.jpg"
const Middle = () => {
  return (
    
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pic1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic2}class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic4} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Middle

