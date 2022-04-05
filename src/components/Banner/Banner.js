import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
     <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h2 className="display-2">
                Online Payment Easy For You.
              </h2>
              <p className="main-hero-para">
              An e-payment system is a way of making transactions or paying for goods and services through an electronic medium, without the use of checks or cash.
              </p>
              <button className="btn btn-warning mt-0">Learn More</button>
          
              
            </div>
          
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./images/hero2.jpg"
                alt="heroimg"
                className="img-fluid"
              />
             
            </div>
          </div>
        </section>
      </header>
  
          </>

  )
};

export default Banner;
