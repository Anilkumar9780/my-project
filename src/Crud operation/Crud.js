import React from "react";
import './style.css';
import { useEffect,useState } from "react";
import img from './delete.svg';
import img1 from './edit.svg';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import axios from "axios";
import Swal from "sweetalert2";
export default function App(){
     const[data,setdata]=useState([]);
     const[name,setname]=useState("");
     const[email,setemail]=useState("");
     const[id,setid]=useState(0);
     const[lable,setlable]=useState("Submit");
     const[search,setsearch]=useState("");

   //display data api 
   const getdata=async()=>
   {
    await axios.get("http://localhost:3000/posts")
    .then(res=>{
        setdata(res.data)
    });
   }
   useEffect(()=>{
    getdata();
   },[]);
//input data api 
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
//edit data api 
const edit=(e)=>
{
    axios.get("http://localhost:3000/posts"+"/"+e)
    .then(res=>{
       setid(res.data.id);
       setname(res.data.name);
       setemail(res.data.email);
       setlable("Update");
    })
}
// delete data api 
 const Delete=(e)=>
 {
    axios.delete("http://localhost:3000/posts"+"/"+e)
    getdata();
 }
 // search data api 
 const search1 = async()=>
 {
     await axios.get("http://localhost:3000/posts?q="+search)
     .then(res=>{setdata(res.data)});
 }
    return(
        <div>
<div className="login-form">
    <form onSubmit={(e)=>e.preventDefault()}>
        <h2 className="text-center">Crud Operation</h2>   
        <div className="form-group has-error">
            <label className="text">Full Name</label>
        	<input type="text" onChange={e=>setname(e.target.value)} value={name} className="form-control" name="username" placeholder="Username" required="required"/>
        </div>
		<div className="form-group">
            <label className="text">Email Address</label>
            <input type="email" onChange={e=>setemail(e.target.value)} value={email} className="form-control" name="password" placeholder="Password" required="required"/>
        </div>        
        <div className="form-group">
            <button type="submit" onClick={submitdata} className="btn btn-primary btn-lg btn-block">{lable}</button>
        </div>
    </form>
</div>
<div className="container">
        <div className="table-responsive">
            <div className="table-wrapper">
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-8" style={{color:"red"}}><h2>Customer <b>Details</b></h2></div>
                        <div className="col-sm-4">
                            <from onSubmit={(e)=>e.preventDefault()}>
                        <div class="input-group">
                        <input type="search" onChange={e=>setsearch(e.target.value)} class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                         <button type="button" onClick={search1} class="btn-outline-primary">search</button>
                          </div>
                          </from>
                        </div>
                    </div>
                </div>
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name <i className="fa fa-sort"></i></th>
                            <th>Email Address</th>
                            <th>Edit<i className="fa fa-sort"></i></th>
                            <th>Delete<i className="fa fa-sort"></i></th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((Item)=>{
                     return<tr key={Item.id}>
                        <td>{Item.id}</td>
                        <td>{Item.name}</td>
                        <td>{Item.email}</td>
                        <td style={{cursor:"pointer"}} onClick={()=>edit(Item.id)}><img src={img1}/></td>
                        <td style={{cursor:"pointer"}} onClick={()=>Delete(Item.id)}><img src={img}/></td>
                        </tr>
                        })}
                        </tbody>
                </table>
                <div className="clearfix">
                    <div className="hint-text" style={{color:"red"}}>Showing <b>5</b> out of <b>25</b> entries</div>
                   </div>
                </div>
            </div>
        </div>        
    </div>     
    )
}







// Swal.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, delete it!'
//   }).then((e) => {
//     if (e.isConfirmed) {
//       Swal.fire(
//         'Deleted!',
//         'Your record has been deleted.',
//         'success'
//       )
//     }
//   })






