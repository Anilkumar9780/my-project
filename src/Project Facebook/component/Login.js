import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import { useState } from "react";
import './css/style1.css';
export default function Login()
{
  const [username,setusername]=useState("");
  const [password,setpassword]=useState("");
   
  const login=()=>{
    let fd=new FormData()
    fd.append('username',username)
    fd.append('password',password)
    axios.get('http://localhost/project.php',fd)
    .then(res=>{
      setusername("");
      setpassword("");
    }).catch(error=>{console.log(error)})
  }

    return(
       <div id="login-form-wrap" style={{marginTop:"150px"}}>
  <h2>Login</h2>
  <form id="login-form" onSubmit={(e)=>e.preventDefault()}>
    <p>
    <input onChange={e=>setusername(e.target.value)} value={username} type="text" id="username" name="username" placeholder="Username" required/><i class="validation"><span></span><span></span></i>
    </p>
    <p>
    <input onChange={e=>setpassword(e.target.value)} value={password} type="password" id="email" name="email" placeholder="Password" required/><i class="validation"><span></span><span></span></i>
    </p>
    <p>
    <input type="submit" id="login" onClick={login} value="Login"/>
    </p>
  </form>
  <div id="create-account-wrap">
  <p>Not a member? <Link to="/createac">Create Account</Link></p>
  </div>
  </div>
  
       
    )
}