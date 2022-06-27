import axios from "axios";
import React from "react";
import { FaBook } from 'react-icons/fa';
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {Navigate} from 'react-router-dom';
export default function Login()
{
  const navigate = useNavigate();

  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [submitted, setSubmitted] = useState("submit");
   const [logged,setlogged]=useState(false);
  const registion=(e)=>
  {
     const postdata={
      name:name,
      email:email,
      password:password
     }
   password&&email&&name?axios.post("http://localhost:8000/user",postdata)
   .then(res=>
    {
    localStorage.setItem("user", JSON.stringify(res.data));
    setlogged(true);
    setname("");
   setemail("");
   setpassword("")
   setSubmitted("submit");
   Swal.fire({
    icon: 'success',
    title: 'Registration successfully',
    showConfirmButton: false,
    timer: 1500
  })
  }):Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter your valid details!',
    });
   
  }
  if(logged)
  {
   return <Navigate to="/login"></Navigate>
  }
    return(
        <div>
            <section className="vh-100" style={{backgroundColor:""}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100" style={{marginTop:"-20px"}}>
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius:" 1rem",height:"580px"}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                 alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} /> 
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={(e)=>e.preventDefault()}>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219;"}}></i>
                    <span className="h1 fw-bold mb-0"><FaBook/>eLEARNING</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:"  1px"}}>Welcome to <FaBook/>eLEARNING</h5>
                 
                  <div className="form-outline mb-4">
                    <input value={name} onChange={e=>setname(e.target.value)} type="text" className="form-control form-control-lg" />
                    <label  className="form-label" for="form2Example17">Name</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input value={email} onChange={e=>setemail(e.target.value)} type="email" id="form2Example17" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input value={password} onChange={e=>setpassword(e.target.value)} type="password" id="form2Example27" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example27">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button onClick={ registion} className="btn btn-dark btn-lg btn-block" type="button">Register</button>
                  </div>
                  <p className="mb-5 pb-lg-2" style={{color:" #393f81"}}>Already an account<a href="#!"
                      style={{color: "#393f81"}}><Link to='/login'>Login</Link></a></p>
                
                  
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