import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Navigate, Link, Router, Routes, Route} from 'react-router-dom';
import Header from './header';
import Allproduct from './Allproduct';
import All from './allproduct1';
class App extends Component {
  render() {
    return (
      <div>
     <Header></Header>
        <Routes>
        <Route path="/" element={<Allproduct/>}></Route>
           <Route path="/allproduct" element={<Allproduct/>}></Route>
           <Route path="/Cameras" element={<All/>}></Route>
           <Route path="/TVs" element={<All/>}></Route>
           <Route path="/camcorders" element={<All/>}></Route>  
           {/* <Route path="/detail" element={<Detail/>}></Route>   */}
        </Routes>
      </div>
    )
  }
}
export default App;
