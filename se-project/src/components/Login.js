import React from 'react';
import { useState } from "react";
import './../App.css';
import logo from './../images/logo.png';
import { BrowserRouter, useNavigate, Link, Router, Route, Routes} from "react-router-dom";
import '../../src/components/Login.css';

//this is not working yet
// const LoginUser =(e)=>{
//     e.preventDefault();
//     fetch("http://localhost:8080/login", {
//       method:"POST",
//       headers:{
//         "Content-Type" : "application/json"
//       },
//       //body: JSON.stringify(book)
//     })
//     .then(res=>{
//         console.log(1,res);
//         if(res.status === 201){
//           return res.json();
//         }else{
//           return null;
//         }
//       });

//   }
// const user = () => {
//   const [user, updateuser] = useState({
//     email: "",
//     pass: "",
//   });


const Login = () => {
  const [user, updateuser] = useState({
        email: "",
        pass: "",
       });
       const testing=(e)=> {
        e.preventDefault();
        fetch("http://localhost:8080/test", {
          method:"POST",
          headers:{
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(user)
        })
        .then(res=>{
            console.log(1,res);
            if(res.status === 200){
              let output = res.json()
              console.log(output)
              return res.json();
            }else{
              return null;
            }
          })
        .then(res=>{
          console.log(res)
          if(res!==null){
            navigate("/Registration");
          }else{
            alert('fails');
          }
        
        });
    
      }
const onSubmit = (e) => {
        e.preventDefault();
        let a = {
          email: e.target.email.value,
          pass: e.target.pass.value,
        };
        updateuser(a);
        console.log(user);
        console.log(JSON.stringify(user));
      }

      const navigate=useNavigate()
  return (
<div className='class'>

    <div style={{width: '100%', overflow: 'hidden'}}>
    <div style={{width: '600px', float: 'left'}}> 
    <br/>
    <br/>
    <form className="add-form" onSubmit={onSubmit}>

    <div className="Body">
    <input  type="Email" 
      name="email"
      //value={"Username/Email"} 
      placeholder="Username/Email"
      onChange={(e) => {
        const value = e.target.value;
        updateuser({ ...user, email: e.target.value });
        //console.log(user);
      }}
      style={{width:200, height:40, marginTop:20}} />
    </div>
      <br/>
      <br/>
      <input className="Body" type="password" 
      //value={"Password"}
      name="pass"
      placeholder='Password'
      onChange={(e) => {
        const value = e.target.value;
        updateuser({ ...user, pass: e.target.value });
        //console.log(user);
      }}
      style={{width:200, height:40, marginTop:10}} />
      <br/>
      <br/>
      <input className="Body" type="submit" value="Login" 
      onClick={testing} 
      style={{marginRight:100, width:100, height:40, marginTop:10, color: 'blue',borderColor: 'blue'}}/>
      </form>
      <br/>
      <br/>
      <div>
      <inputtext style={{marginLeft: 40}}>
      Not an existing user?
      <button
      onClick={() => {
      navigate("/Registration");
      }}>
        Not an Existing User
      </button>
      </inputtext>
      <br/>
      {/* <input type="submit" style={{width:120, height:40, marginTop:10, marginRight:80,color: 'blue',borderColor: 'blue'}} value="Create Account"
      <button>  
      onClick={() => {
      navigate("/Registartion");
      </button>
      }}/> */ }
      
      </div>
      </div>
    <img src={logo} style={{height: 100, width:100, float:'left' , margin:40}} alt="logo" />
    
    <h2 className='Title'>Fix My Fixture</h2>
      
    <h3 className='Caption'>
      -Where booking made easy!
    </h3>
    <br></br>
    <br></br>
    <br></br>
    <h3 className='Description'>
      
      Get started with FmF by signing up and logging in to book appointments for all your needs. <br></br>
      Select your service, location & slot and you will be booked with the appointment of your choice,<br></br>
       making your day hassle free. Keep track of your booking details via email updates, so you do not miss any!

    </h3>
    
      
</div>
</div>

  )
}

export default Login;

