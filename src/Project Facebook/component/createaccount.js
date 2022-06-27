import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/style1.css';
import axios from 'axios';
import { useEffect,useState,Navigate } from "react";
import Swal from "sweetalert2";
export default function App()
{
    const [name,setname]=useState("");
    const [username,setusername]=useState("");
    const [email,setemail]=useState("");
    const [gender,setgender]=useState("");
    const [dob,setdob]=useState("")
    const [password,setpassword]=useState("")
    // const navigate = useNavigate();
    const createaccount =()=>
    {
       let fd=new FormData()
       fd.append('name',name);
       fd.append('usename',username);
       fd.append('email',email);
       fd.append('gender',gender);
       fd.append('dob',dob);
       fd.append('password',password);
       axios.post('http://localhost/project.php',fd)
       .then(res=>{
        setname("");
        // setlable(true);
        setemail("");
        setdob("");
        setgender("");
        setpassword("");
        setusername("");     
        })
      .catch(function(res){console.log(res)});
  
    }
       

    return(
       <div id="login-form-wrap">
  <h2>Create Account</h2>
  <form onSubmit={(e)=>e.preventDefault()}>
  <p>
    <input onChange={e=>setname(e.target.value)} value={name} type="text" id="username" name="username" placeholder="Full Name" required/><i className="validation"><span></span><span></span></i>
    </p>
    <p>
    <input onChange={e=>setusername(e.target.value)} value={username} type="text" id="username" name="username" placeholder="Username" required/><i className="validation"><span></span><span></span></i>
    </p>
    <p>
    <input onChange={e=>setemail(e.target.value)} value={email} type="email" id="email" name="email" placeholder="Email Address" required/><i className="validation"><span></span><span></span></i>
    </p>
    <p>
    <input onChange={e=>setdob(e.target.value)} value={dob} type="text" id="email" name="email" placeholder="Date of birth" required/><i className="validation"><span></span><span></span></i>
    </p>
    <p>
    <select onChange={e=>setgender(e.target.value)} value={gender}  style={{width:"450px",height:"60px",fontSize:"15px",color:"GrayText"}} id="country" name="country" placeholder="Select Gender">
    <option>Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
    {/* <p>
    <input style={{width:"50px"}} type="file" id="myFile" name="filename"/>
    </p> */}
    </p>
    <p>
    <input onChange={e=>setpassword(e.target.value)} value={password} type="text" id="email" name="email" placeholder="Password" required/><i className="validation"><span></span><span></span></i>
    </p>
    <p style={{fontSize:"14px"}}><small >By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a></small></p>
    <p>
      
    </p>
   <p>
    <input  type="submit" id="login" value="Create Account" onClick={createaccount}/>
    </p>
  </form>
  <div id="create-account-wrap">
  </div>
  </div>
  
       
    )
}