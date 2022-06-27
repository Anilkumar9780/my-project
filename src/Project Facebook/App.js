import React from "react";
import Header from './component/header';
import Home from "./component/home";
import Profile from "./component/profile";
import Login from './component/Login';
import Create from './component/createaccount'
import {Routes,Route,Link,BrowserRouter as Router} from "react-router-dom";

export default function App()
{
    return(
        <div>
            <Header></Header>
    <Router>
<Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/profile" element={<Profile/>}></Route>  
       <Route path="/login" element={<Login/>}></Route>
      <Route path="/createac" element={<Create/>}></Route> 
  </Routes>
  </Router>
        </div>
    )
}