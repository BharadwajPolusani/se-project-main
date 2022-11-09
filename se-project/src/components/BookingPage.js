import { useState } from "react";
import React from "react";
import { BrowserRouter, useNavigate, Link, Router, Route, Routes} from "react-router-dom";

const Booking = () => {
  const [newAccount, updatenewacc] = useState({
    first_name: "",
    last_name: "",
    email_id: "",
    password: "",
    dob: "",
    ssn: "",
    telephone: ""
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
  };
  const navigate=useNavigate()
  return (
    <div>
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>First Name </label>
        <input
          name="first_name"
          required={true}
          type="text"
          placeholder="First Name"
          //value={text}
          onChange={(e) => {
            const value = e.target.value;
            updatenewacc({ ...newAccount, first_name: e.target.value });
            //console.log(newAccount);
          }}
        />
      </div>
      <div className="form-control">
        <br />
        <label>Last Name </label>
        <input
          name="last_name"
          required={true}
          type="text"
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
          name="password"
          required={true}
          type="password"
          placeholder="New Password"
          onChange={(e) => {
            const value = e.target.value;
            updatenewacc({ ...newAccount, password: e.target.value });
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
          name="telephone"
          required={true}
          type="tel"
          placeholder="Mobile Number"
          onChange={(e) => {
            const value = e.target.value;
            updatenewacc({ ...newAccount, telephone: e.target.value });
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
