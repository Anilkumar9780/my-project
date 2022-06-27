import React from "react";
import { Link } from "react-router-dom";
export default function Logout()
{
    localStorage.removeItem("user");
   return(
    <>
    <h1>You are Logout</h1>
    <Link to='/'><h1> Click me to go to Home Page</h1></Link>
    </>
   )
}