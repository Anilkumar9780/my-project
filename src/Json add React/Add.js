import React from 'react';
// import React, { Component } from 'react'
import axios from 'axios';
import  {useState,useEffect} from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Swal from 'sweetalert2';
export default function Add() {
 const [ data,setData] = useState([]);
 const [name,setname]= useState("");
 const [email,setemail]= useState("");
 const [id,setid]=useState(0);
 const [lable,setlable]=useState("submit");
//  yarn json-server --watch db.json
      const getdata =async()=>{ 
     await axios.get("http://localhost:3000/posts")
        .then(res =>{
            setData(res.data)
            console.log(data);
        });
    }
    useEffect(() => {
      getdata();
    },[]);
   const delt=(e)=>{
    axios.delete("http://localhost:3000/posts"+"/"+e);
    getdata();
   }
  const edit=(e)=>{
    axios.get("http://localhost:3000/posts"+"/"+e)
    .then(res=>{
      setname(res.data.name);
      setemail(res.data.email);
      setid(res.data.id)
      setlable("Update")
    })

  }
   const submitdata = ()=>
   {
    const postdata = {
            name:name,
            email:email
    }
    id?axios.put("http://localhost:3000/posts"+"/"+id,postdata).then(res=>{
      getdata();
      setlable("submit");
      setid(null);
      setname("");
      setemail("");
    }):
    name?axios.post("http://localhost:3000/posts",postdata).then(res=>
    {
  getdata();
  setname("");
  setemail("");
  setlable("submit");
    }):Swal.fire({
      title:'Alert',
      type:'denger',
      text:"Place Enter Your Name",
    });
   }
 
    
    return (  
        <div>
            {/* CRUDOPERATHION */}
      {/* <div class="position-absolute mb-2  justify-content-center w-50 p-3"><h3>CRUDOPERATHION</h3></div> */}
       <form onSubmit={(e)=> e.preventDefault()}>     
  <div className="mb-2  justify-content-center w-50 p-3" style={{marginLeft:"300px"}}>
 
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder='name' onChange={e=>setname(e.target.value)} value={name} /><br/>
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder='email' onChange={e=>setemail(e.target.value)} value={email} /><br/>
  <button className="btn btn-primary" type="submit"  onClick={submitdata}>{lable}</button>
  
</div></form>
<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>

    </tr>
  </thead>
  <tbody>
  {data.map((data1)=>{
   return(<tr key={data1.id}>
      <th>{data1.id}</th>
      <td>{data1.name}</td>
      <td>{data1.email}</td>
      <td><button onClick={()=>edit(data1.id)}>Edit</button></td>
      <td><button onClick={()=>delt(data1.id)}>Delete</button></td>
    </tr>)
  })
  } </tbody>
</table>

                
                </div>
    )
}