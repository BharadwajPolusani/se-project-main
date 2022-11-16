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
    const [newSlot, updatenewSlot] = useState({
      calendarId: {},
      locationId: {},
      slot: "",
      isAvailable: "" 
    });
    const testing=(e)=> { //chnage the method name, 
      e.preventDefault();
      fetch("http://localhost:8080/oneDate", {
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(newSlot)
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
        <div style={{width:'60%'}}>
        <h1 
        style={{fontFamily:'"Trebuchet MS Bold Italic", "Trebuchet MS", sans-serif',
        fontWeight:700,fontStyle:'italic',fontSize:'25px',paddingLeft:170, marginTop:60}}>Admin Account
        </h1>
        </div>
        <div style={{width:'10%'}}>
        <input type="logout" value="Logout" className="btn" 
           //onClick={testing} 
           style={{width:100, height:40, marginTop:40,textAlign:'center',color: 'green',borderColor: 'green'}} />
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
              updatenewSlot({...newSlot, locationId: {"cityState":e.target.value}});
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
              updatenewSlot({...newSlot, calendarId: {"date":e.target.value,"day":Day,"isHoliday": false,"isWeekend":false}});

            }}
          />
          <br />
          <br />
         
          <select  class="form-field"  required={true} name="add_slot" 
          style={{width:400, height:40, marginTop:10,textAlign:'center'}} placeholder="Add Slot"
             onChange={(e) => {
              const value = e.target.value;
              updatenewacc({ ...newAccount, add_slot: e.target.value }); 
              updatenewSlot({...newSlot, slot: e.target.value});
      
                    //console.log(value);
            }} >   
            <option selected disabled = {true} value="">Choose Slots ...</option>
            <option value="default">default</option>
            <option value="9AM">9AM</option>
            <option value="10AM">10AM</option>
            <option value="11AM">11AM</option>
            <option value="12PM">12PM</option>
            <option value="1PM">1PM</option>
            <option value="2PM">2PM</option>
            <option value="3PM">3PM</option>
            <option value="4PM">4PM</option>
            <option value="5PM">5PM</option>
            </select>
          
            <br />
          <br />
            <select class="form-field"  required name="isAvailable" 
          style={{width:400, height:40, marginTop:10,textAlign:'center'}} 
             onChange={(e) => {
              const value = e.target.value;
              updatenewSlot({...newSlot, isAvailable: e.target.value});
      
                    //console.log(value);
            }} >   
            <option selected disabled = {true} value="">Choose Availability ...</option>
            <option value="true">true</option>
            <option value="false">false</option>
            
            </select>


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
