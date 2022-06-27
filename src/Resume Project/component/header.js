import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/style.css';
import { FaBook } from 'react-icons/fa';
import { Link } from "react-router-dom";
export default function Header()
{ 

    
const auth = JSON.parse(localStorage.getItem("user"));
console.log(auth);
    return(
        <>
          <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary"><i><FaBook/></i>e-LEARNING</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
               
            <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" ole="button" style={{color:"red"}}></a>
                    <div className="dropdown-menu ">
                        {/* {(auth==true)} */}
                        <Link to='/logout'><button  className="dropdown-item">Logout</button></Link>
                      
                    </div>
                </div>
             
               <Link to='/home'><a className="nav-item nav-link active">Home</a></Link>
                <Link to='/login'><a className="nav-item nav-link">Login</a></Link>
               


       
                          </div>
                    
                        
        </div>
    </nav>
  
        </>
    )
}

