import { Link } from "react-router-dom";
import axios from "axios";
import React, { useRef } from "react";
import { FaBook } from 'react-icons/fa';
import Swal from "sweetalert2";
import { useState } from "react";
import {Navigate} from 'react-router-dom';
export default function Login(){ 
 const email =useRef();
 const password=useRef();
 const [name,setname]=useState("");
 const [id,setid]=useState("");
 const [logged,setlogged]=useState(false);

 const login=()=>
 {
  const getdata={
    email:email.current.value,
    password:password.current.value
  }
    axios.get(`http://localhost:8000/user?email=${email.current.value}&&${password.current.value}`)
    .then(res=>{
      console.log(res.data)
      if(email.current.value==res.data[0].email && password.current.value == res.data[0].password)
      {
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("name",res.data[0].name);
        localStorage.getItem("id",res.data[0].id);
        // console.log(name);
        setlogged(true);
        Swal.fire({
          icon: 'success',
          title: 'Login successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter valid username and password!',
        });
      }
    })
  }
 
 if(logged)
 {
  return <Navigate to="/"></Navigate>
 }
 
    return(
        <div>
            <section className="vh-100" style={{backgroundColor:""}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100" style={{marginTop:"-20px"}}>
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius:" 1rem"}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
             
                <form >

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219;"}}></i>
                    <span className="h1 fw-bold mb-0"><FaBook/>eLEARNING</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:"  1px"}}>Welcome to <FaBook/>eLEARNING</h5>

                  <div className="form-outline mb-4">
                    <input  ref={email}  type="email" id="form2Example17" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input  ref={password}  type="password" id="form2Example27" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example27">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button  onClick={login} className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                  </div>

                  
                  <p className="mb-5 pb-lg-2" style={{color:" #393f81"}}>Don't have an account? <a
                      style={{color: "#393f81"}}><Link to='/register'>Register here</Link></a></p>
                  
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}
