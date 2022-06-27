import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/style.css';
import { Link } from "react-router-dom";
import About from "./about";
export default function category()
{
  
    return(
        <>

  <div className="container-xxl py-5 category">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Categories</h6>
                <h1 className="mb-5">Courses Categories</h1>
            </div>
            <div className="row g-3">
               
   <div className="container-xxl py-5">
      <div className="container">
          <div className="row g-4">
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="service-item text-center pt-3">
                      <div className="p-4">
                          <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                         <Link to='/webdesing'> <h5 className="mb-3">Web Design</h5></Link>
                          <p></p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="service-item text-center pt-3">
                      <div className="p-4">
                          <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                        <Link to='/graphi'>  <h5 className="mb-3">Graphic Design</h5></Link>
                          <p></p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="service-item text-center pt-3">
                      <div className="p-4">
                          <i className="fa fa-3x fa-home text-primary mb-4"></i>
                        <Link to='/video'> <h5 className="mb-3">Video Editing</h5></Link>
                          <p></p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                  <div className="service-item text-center pt-3">
                      <div className="p-4">
                          <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                         <Link to='/online'> <h5 className="mb-3">Online Marketing</h5></Link>
                          <p></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

                </div>
        </div>
        <About></About>

    </div>
        </>
    )
}