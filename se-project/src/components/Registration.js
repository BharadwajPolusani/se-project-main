import { useState } from "react";
import React from "react";
import { BrowserRouter, useNavigate, Link, Router, Route, Routes} from "react-router-dom";
import logo from './../images/logo.png';
import '../../src/components/Registration.css';
const Registration = () => {
    const [newAccount, updatenewacc] = useState({
      first_name: "",
      last_name: "",
      email: "",
      pass: "",
      dob: "",
      ssn: "",
      mobile: ""
    });
    const testing=(e)=> {
      e.preventDefault();
      fetch("http://localhost:8080/test", {
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
            return null;
          }
        });
      // .then(res=>{
      //   console.log(res)
      //   if(res!==null){
      //     navigate("/");
      //   }else{
      //     alert('fails');
      //   }
      
      // });
  
    }
    const onSubmit = (e) => {
      e.preventDefault();
      let a = {
        first_name: e.target.first_name.value,
        lname: e.target.lname.value,
        email: e.target.email.value,
        pass: e.target.pass.value,
        dob: e.target.dob.value,
        ssn: e.target.ssn.value,
        mobile: e.target.mobile.value
      };
      updatenewacc(a);
      console.log(newAccount);
      console.log(JSON.stringify(newAccount));
      testing(e);
    };
    const navigate=useNavigate()
    return (
      <form className="add-form" onSubmit={onSubmit}>
       
        <div className="form-control">
        <img src={logo} style={{height: 100, width:100, float:'left' , margin:40}} alt="logo" />
        <h1 
        style={{fontFamily:'"Trebuchet MS Bold Italic", "Trebuchet MS", sans-serif',fontWeight:700,fontStyle:'italic',fontSize:'25px', marginRight: 75, textAlign: 'center', marginTop:60}}>Create new Account</h1>
        <input
            name="first_name"
            required={true}
            type="text"
            //value={"First Name"}
            style={{width:400, height:40, marginTop:150,textAlign:'center',marginRight:173}}
            placeholder="First Name"
            //value={text}
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, first_name: e.target.value });
              //console.log(newAccount);
            }}
          />
          <br />
          
          <input
            name="lname"
            required={true}
            type="text"
            //value={"Last Name"}
            style={{width:400, height:40, marginTop:50,textAlign:'center'}}
            placeholder="Last Name"
            //value={text}
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, lname: e.target.value });
              //console.log(newAccount);
            }}
          />
          <br />
          <br />
          
          <input
            name="email"
            required={true}
            type="Email"
            //value={"Email"}
            style={{width:400, height:40, marginTop:10,textAlign:'center'}}
            placeholder="Email"
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, email: e.target.value });
            }}
          />
          <br />
          <br />

          <input
            name="pass"
            required={true}
            type="password"
            //value={"Email"}
            style={{width:400, height:40, marginTop:10,textAlign:'center'}}
            placeholder="New Password"
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, pass: e.target.value });
            }}
          />
          <br />
          <br />
          
          <input
            name="dob"
            required={true}
            type="date"
            //value="DOB"
            style={{width:400, height:40, marginTop:10,textAlign:'center'}}
            placeholder="First Name"
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, dob: e.target.value });
            }}
          />
          <br />
          <br />
         
          <input
            name="ssn"
            required={true}
            type="text"
            //value={"SSN"}
            style={{width:400, height:40, marginTop:10,textAlign:'center'}}
            placeholder="SSN"
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, ssn: e.target.value });
            }}
          />
          <br />
          <br />
          
          <input
            name="mobile"
            required={true}
            type="tel"
            //value={"Mobile"}
            style={{width:400, height:40, marginTop:10,textAlign:'center'}}
            placeholder="Mobile Number"
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, mobile: e.target.value });
            }}
          />

          <br />
           <input type="submit" value="Submit" className="btn" 
           //onClick={testing} 
           style={{width:100, height:40, marginTop:10,textAlign:'center',color: 'blue',borderColor: 'blue'}} />
        </div>

        
       
      </form>
      
    );
  };
  
  export default Registration;
