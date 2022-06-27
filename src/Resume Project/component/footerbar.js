import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/style.css';
export default function Footerbar()
{
    return(
        <>
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
              
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Contact</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, Ludhiana ,Punjab</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+19 98-345-67890</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>eleaning1@email.com</p>
                 
                </div>
            
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Newsletter</h4>
                    <p></p>
                 

                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.

                     
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="footer-menu">
                            <a>Home</a>
                            <a>Cookies</a>
                            <a>Help</a>
                            <a>FQAs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}