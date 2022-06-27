import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import PHPMovieApp from './php/App';
// import ShoppingPHPapp from './shopping cart/app';
// import { BrowserRouter } from "react-router-dom";
// import ApiMovieApp from './Project Reactjs/Moviewebsits';
import reportWebVitals from './reportWebVitals';
// import JsonAdd from './Json add React/Add';
// import Crud from './Crud operation/Crud';
// import App from './Resume Project/App';
import App from './Resume Project/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
  <App/>
  {/* </BrowserRouter> */}
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
