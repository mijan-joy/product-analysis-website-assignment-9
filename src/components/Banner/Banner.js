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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                officiis tempora recusandae voluptate quam, nisi odio officiis
                tempora recusandae
              </p>
          
              
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
