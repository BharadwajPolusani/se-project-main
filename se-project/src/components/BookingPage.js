import { useState } from "react";
import React from "react";
import { BrowserRouter, useNavigate, Link, Router, Route, Routes} from "react-router-dom";

const Booking = () => {
  const [newAccount, updatenewacc] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
    dob: "",
    ssn: "",
    mobile: ""
  });
  const testing=(e)=> {
    e.preventDefault();
    fetch("http://localhost:8080/test", {
      method:"PUT",
      headers:{
        "Content-Type" : "application/json"
      },
      //body: JSON.stringify(e)
    })
    /*.then(res=>{
        console.log(1,res);
        if(res.status === 201){
          return res.json();
        }else{
          return null;
        }
      })*/
    .then(res=>{
      console.log(res)
      if(res!==null){
        navigate("/");
      }else{
        alert('fails');
      }
    
    });

  }

  const onSubmit = (e) => {
    e.preventDefault();
    let a = {
      fname: e.target.fname.value,
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
  };
  const navigate=useNavigate()
  return (
    <div>
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>First Name </label>
        <input
          name="fname"
          required={true}
          type="text"
          placeholder="First Name"
          //value={text}
          onChange={(e) => {
            const value = e.target.value;
            updatenewacc({ ...newAccount, fname: e.target.value });
            //console.log(newAccount);
          }}
        />
      </div>
      <div className="form-control">
        <br />
        <label>Last Name </label>
        <input
          name="lname"
          required={true}
          type="text"
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
        <label>Email </label>
        <input
          name="email"
          required={true}
          type="Email"
          placeholder="Email"
          onChange={(e) => {
            const value = e.target.value;
            updatenewacc({ ...newAccount, email: e.target.value });
          }}
        />
        <input
          name="pass"
          required={true}
          type="password"
          placeholder="New Password"
          onChange={(e) => {
            const value = e.target.value;
            updatenewacc({ ...newAccount, pass: e.target.value });
          }}
        />
        <br />
        <br />
        <label>Date of Birth  </label>
        <input
          name="dob"
          required={true}
          type="date"
          //placeholder='First Name'
          onChange={(e) => {
            const value = e.target.value;
            updatenewacc({ ...newAccount, dob: e.target.value });
          }}
        />
        <br />
        <br />
        <label>SSN </label>
        <input
          name="ssn"
          required={true}
          type="text"
          placeholder="SSN"
          onChange={(e) => {
            const value = e.target.value;
            updatenewacc({ ...newAccount, ssn: e.target.value });
          }}
        />
        <br />
        <br />
        <label>Mobile </label>
        <input
          name="mobile"
          required={true}
          type="tel"
          placeholder="Mobile Number"
          onChange={(e) => {
            const value = e.target.value;
            updatenewacc({ ...newAccount, mobile: e.target.value });
          }}
        />
      </div>
      <br />
      <input type="submit" value="Submit" className="btn" 
      
      onClick={testing}/>
    </form>
    <button
              onClick={() => {
               navigate("/");
               }}
              >
               Existing User?
            </button>
    </div>
  
  );
};

export default Registration;
