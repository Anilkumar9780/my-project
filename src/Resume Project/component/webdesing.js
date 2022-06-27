import React from 'react';
import './css/style1.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import DataDisplay from './datadisplay';
import axios from 'axios';
import { useEffect,useState } from 'react';
export default function App(props) {
    const [data, setdata] = useState([]);
    const [number, setNumber] = useState(1); 
    const [postPerPage] = useState(4);
    const[search,setsearch]=useState("");
   
  const getdata=async()=>
  {
     await axios.get(`http://localhost:8000/${props.cat}`)
     .then(res=>{
         console.log(res);
         setdata(res.data)
     }).catch(err=>{console.log(err)})
  }



  useEffect(() => {
    getdata();
  }, []);



  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = data.slice(firstPost, lastPost);
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(data.length / postPerPage); i++) {
    pageNumber.push(i);
  }

  const ChangePage = (pageNumber) => {
    setNumber(pageNumber);
  };
     




const serach2=async()=>
{
   await axios.get(`http://localhost:8000/${props.cat}?q=`+search)
              .then(res=>{
                console.log(res);
                  setdata(res.data)
   }).catch(err=>{console.log(err)})
}

        return (
         <div style={{height:"900px",marginLeft:"100px"}}>
  

         
  <div className="container-fluid" style={{marginTop:"20px",paddingRight:"110px"}}>
    <form className="d-flex" role="search" onSubmit={(e=>e.preventDefault(e))}>
      <input value={search} onChange={e=>setsearch(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button onClick={serach2} className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>

            <div className="container-xxl py-5 category">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s" style={{textAlign:"center"}}>
                <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                <h1 className="mb-5">Courses</h1>
            </div>
            </div>
            </div>
            

        {currentPost.map((item)=>{

                 return<div className="col-md-3" key={item.id}>
                <DataDisplay image={item.image} name={item.name} price={item.price} overview={item.overview}></DataDisplay>
            </div>
            
        })}
          <div className="my-3 text-center" >
            <button className="px-3 py-1 m-1 text-center btn-primary" onClick={() => setNumber(number - 1)}>Pevious</button>

            {pageNumber.map((Elem) => {
                return (
                <> <button className="px-3 py-1 m-1 text-center btn-outline-dark" onClick={() => ChangePage(Elem)}>{Elem}</button>
                </>
              );
            })}
            <button className="px-3 py-1 m-1 text-center btn-primary" onClick={() => setNumber(number + 1)}>Next</button>
            </div>
          </div>
      
        );
    }

