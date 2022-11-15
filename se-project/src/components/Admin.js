import { useState } from "react";
import React from "react";
import { BrowserRouter, useNavigate, Link, Router, Route, Routes} from "react-router-dom";
import logo from './../images/logo.png';
const Admin = () => {
    const [newAccount, updatenewacc] = useState({ //need to modify field names
      add_location: "",
      add_date: "",
      add_slot: "",
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
          //navigate("/");
        }else{
          alert('fails');
        }
      
      });
  
    }
    const onSubmit = (e) => {
      e.preventDefault();
      let a = {
        add_location: e.target.add_location.value,
        add_date: e.target.add_date.value,
        add_slot: e.target.add_slot.value,
      };
      updatenewacc(a);
      console.log(newAccount);
      console.log(JSON.stringify(newAccount));
      testing(e);
    };
    const navigate=useNavigate()
    return (
      <form onSubmit={onSubmit}>
       
        <div  style = {{width: '100%',
    height: '100px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    position: 'relative'}}>

<div style={{width:'30%'}}>
        <img src={logo} style={{height: 100, width:100, float:'left' , margin:40}} alt="logo" />
        </div>
        <div style={{width:'70%'}}>
        <h1 
        style={{fontFamily:'"Trebuchet MS Bold Italic", "Trebuchet MS", sans-serif',
        fontWeight:700,fontStyle:'italic',fontSize:'25px',paddingLeft:140, marginTop:60}}>Admin Account
        </h1>
        </div>
        </div>
        <div className="form-control">

        <div>

        <input
            name="add_location"
            required={true}
            type="text"
            //value={"First Name"}
            style={{width:400, height:40, marginTop:150,textAlign:'center'}}
            placeholder="Add Location Ex:Kansas City,MO"
            //value={text}
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, add_location: e.target.value });
              //console.log(newAccount);
            }}
          />
          <br />
          <br />
          
          <input
            name="add_date"
            required={true}
            type="date"
            //value="DOB"
            style={{width:400, height:40, marginTop:10,textAlign:'center'}}
            placeholder="Add Date"
            onChange={(e) => {
              const value = e.target.value;
              let Days={0:'Monday', 1:'Tuesday', 2:'Wednesday', 3:'Thursday', 4:'Friday', 5:'Saturday', 6:'Sunday'}
              let Day = Days[new Date(e.target.value).getDay()]
              console.log(Day)
              updatenewacc({ ...newAccount, add_date: e.target.value });
            }}
          />
          <br />
          <br />
         
          <input
            name="add_slot"
            required={true}
            type="text"
            //value={"SSN"}
            style={{width:400, height:40, marginTop:10,textAlign:'center'}}
            placeholder="Add Slot"
            onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, add_slot: e.target.value });
            }}
          />
          <br />
          <br />
           <input type="submit" value="Submit" className="btn" 
           //onClick={testing} 
           style={{width:100, height:40, marginTop:10,textAlign:'center',color: 'blue',borderColor: 'blue'}} />
        </div>
        </div>
       
      </form>
      
    );
  };
  
  export default Admin;
