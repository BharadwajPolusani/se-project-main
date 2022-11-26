import { useState } from "react";
import React from "react";
import { BrowserRouter, useNavigate, Link, Router, Route, Routes} from "react-router-dom";
import logo from './../images/logo.png';
import '../../src/components/Booking.css';
const Registration = () => {
    const [newAccount, updatenewacc] = useState({ //need to modify field names
      first_name: "",
      last_name: "",
      email_id: "",
      password: "",
      dob: "",
      ssn: "",
      telephone: ""
    });
    
    const testing=(e)=> { //chnage the method name, 
      e.preventDefault();
      fetch("http://localhost:8080/user", {
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(newAccount)
      })
      .then(res=>{
          console.log(1,res);
          if(res.status === 201){
            return res.json();
          }else{
            alert('user not created');
          }
        })
      .then(res=>{
        console.log(res)
        if(res!==null){
          navigate("/");
          alert("User created successfully!")
        }else{
          alert('fails');
        }
      
      });
  
    }
    const onSubmit = (e) => {
      e.preventDefault();
      let a = {
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        email_id: e.target.email_id.value,
        password: e.target.password.value,
        dob: e.target.dob.value,
        ssn: e.target.ssn.value,
        telephone: e.target.telephone.value
      };
      updatenewacc(a);
      console.log(newAccount);
      console.log(JSON.stringify(newAccount));
      testing(e);
    };
    const navigate=useNavigate()
    return (
      <div className="class">
      <form className="add-form" onSubmit={onSubmit}>
       
        <div  style = {{width: '100%',
    height: '100px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    position: 'relative'}}>

<div style={{width:'30%'}}>
        <img src={logo} style={{height: 100, width:100, float:'left' , margin:40}} alt="logo" />
        </div>
        <div style={{width:'60%'}}>
        <h1 className="Title"
        style={{marginTop: 10}}>Create new Account
        </h1>
        </div>
        <div style={{width:'10%'}}>
          <button 
          style={{cursor:'pointer', marginTop: 10}}
          onClick={() => {
              navigate("/");
              }}>
            Log Out
          </button>
          </div>
          </div>

        <div className="form-field">
                <input
            name="first_name"
            required={true}
            type="text"
            //value={"First Name"}
            style={{width:400, height:40,marginLeft: 400, marginTop:10,textAlign:'center'}}
            placeholder="First Name"
            //value={text}
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, first_name: e.target.value });
              //console.log(newAccount);
            }}
          />
          <br />
          <input class="form-field"
            name="last_name"
            required={true}
            type="text"
            //value={"Last Name"}
            style={{width:400, height:40, marginTop:30,marginLeft: 400, textAlign:'center'}}
            placeholder="Last Name"
            //value={text}
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, last_name: e.target.value });
              //console.log(newAccount);
            }}
          />
          <br />
          <br />
          
          <input
            name="email_id" className="form-field"
            required={true}
            type="Email"
            //value={"Email"}
            style={{width:400, height:40, marginLeft: 400,marginTop:10,textAlign:'center'}}
            placeholder="Email"
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, email_id: e.target.value });
            }}
          />
          <br />
          <br />

          <input
            name="password" className="form-field"
            required={true}
            type="password"
            //value={"Email"}
            style={{width:400, height:40, marginLeft: 400, marginTop:10,textAlign:'center'}}
            placeholder="New Password"
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, password: e.target.value });
            }}
          />
          <br />
          <br />
          
          <input
            name="dob" className="form-field"
            required={true}
            type="date"
            //value="DOB"
            style={{width:400, height:40, marginLeft: 400,marginTop:10,textAlign:'center'}}
            placeholder="First Name"
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, dob: e.target.value });
            }}
          />
          <br />
          <br />
         
          <input className="form-field"
            name="ssn"
            required={true}
            type="text"
            //value={"SSN"}
            style={{width:400, height:40,marginLeft: 400, marginTop:10,textAlign:'center'}}
            placeholder="SSN"
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, ssn: e.target.value });
            }}
          />
          <br />
          <br />
          
          <input className="form-field"
            name="telephone"
            required={true}
            type="tel"
            //value={"Mobile"}
            style={{width:400, height:40, marginLeft: 400,marginTop:10,textAlign:'center'}}
            placeholder="Mobile Number"
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, telephone: e.target.value });
            }}
          />

          <br />
           <input className="form-field" type="submit" value="Submit" 
           //onClick={testing} 
           style={{width:100, height:40,marginLeft: 550, marginTop:25,marginBottom:55,textAlign:'center',color: 'blue',borderColor: 'blue'}} />
        </div>
       
      </form>
      </div>
    )
  }
  
  export default Registration;
