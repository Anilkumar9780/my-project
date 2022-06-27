import React from "react";
import Header from './component/header';
import Category from './component/category';
import Footerbar from './component/footerbar';
import Webdesing from './component/webdesing';
import Detail from "./component/details";
import Login from './component/Login';
import Register from './component/Register';
import {Routes,Route,BrowserRouter as Router} from "react-router-dom";
import Home from './component/Home';
import Logout from './component/logout';
export default  function App()
{
  
   //  json-server --watch db.json --port 8000
   
return(  
    <div>
          
               <Router>
               <Header/>   

<Routes>
   <Route path="/" element={< Category/>}></Route>
         <Route path="/home" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>  
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>
         <Route path="/webdesing" element={<Webdesing cat="webdesing"/>}></Route> 
         <Route path="/graphi" element={<Webdesing cat="graphicdesign"/>}></Route>
         <Route path="/video" element={<Webdesing cat="videoediting"/>}></Route>
         <Route path="/online" element={<Webdesing cat="onlinemarketing"/>}></Route>
         <Route path="/more" element={<Detail/>}></Route>  
         

  </Routes>
  </Router>
 <Footerbar/>
   

    </div>
   )
}